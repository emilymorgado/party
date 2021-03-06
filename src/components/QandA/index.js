import React, { Component, useState } from 'react';
import { css } from 'emotion';
import fire from 'fire';
import axiosInstance from 'axiosInstance';
import Button from 'components/reusable/Button';


class QandA extends Component {
  state = {
    ref: fire.database().ref('questions').orderByKey(),
    docs: [],
    loading: true,
  }

  componentDidMount() {
    // Now getting saved in action/reducer?
    axiosInstance.get('/questions.json')
      .then(res => {
        const docs = [];

        for (const key in res.data) {
          const enter = { id: key, question: res.data[key].question, answer: res.data[key].answer}
          docs.push(enter);
        }
        this.setState({ loading: false, docs });
        //set to redux store instead
      })
      .catch(err => {
        this.setState({ loading: false });
        console.warn(err)
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE', prevProps, this.props)
    if (this.props !== prevProps) {
      console.log('BIG IF', prevProps, this.props)
    }

    if (this.state.docs !== prevState.docs) {
      console.log(prevProps)
      console.log(prevState)
      console.log(this.state)
    }
  }

  render() {
    console.log('Render QandA', this.props)
    // STYLES
    const questionStyle = css`
      font-family: 'Mali', cursive;
      font-size: 2em;
      color: #272727;
      padding: 0;
    `
    const qStyle = css`
      border: 2px, solid, #C34271;
      list-style: none;
      padding-top:
    `

    const questionsAndAnswers = this.state.docs.map(doc => {
      return (
        <li
          className={qStyle}
          key={doc.id}
        >
          {doc.question ? doc.question : null}
        </li>
      )
    });

    return (
      <div className="main-container">
        <h1>Questions and Answers</h1>
        <p className={'description'}>
          Have a question? Have special needs? Please let us know!
        </p>
        <div>
          <Form
            btnName="Let us know!"
          />
        </div>
        <ul className={questionStyle}>
          {questionsAndAnswers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    action: state.action,
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ action }, dispatch);
}

export default QandA;


// Improvements: make the form a button that opens a modal window
const Form = () => {
  const [text, setText] = useState('');

  const handleTextChange = event => {
    setText(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { question: text, answer: '' }
    if (data.question.length > 0) {
      // Send the message to Firebase
      fire.database().ref('questions').push(data);

    }
    setText('');
  }

  // STYLES
  const questionArea = css`
    height: 400px;
    width: 1000px;
    font-size: 1.5em;
    font-family: 'Mali', cursive;
    border: 5px solid #C34271;
    background-color: #F070A1;
  `

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <textarea
          className={questionArea}
          placeholder="Your message here..."
          onChange={handleTextChange}
          value={text}
        />
        <br/>
        <Button text="Let Us Know!" type="formButton" />
      </form>
    </div>
  )
}
