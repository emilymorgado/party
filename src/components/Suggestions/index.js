import React, { Component } from 'react';

import Navbar from '../Navbar'; // This can be improved with react router?
import TextArea from '../TextArea';

class Suggestions extends Component {
  // state = {
  //   comment: ''
  // };
  //
  // handleChange = event => {
  //   this.setState({ comment: event.target.value });
  // };
  //
  // handleSubmit = event => {
  //   event.preventDefault();
  //
  //   // TODO - Call an action creator
  //   // And save the comment
  //
  //   this.setState({ comment: '' });
  // };

  render() {
    return (
      <div>
        <Navbar />
        <h1>Add a Suggestion</h1>
        <TextArea />
        {/* <form onSubmit={this.handleSubmit} >
          <h1>Add a Suggestion</h1>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <div>
            <button>Submit</button>
          </div>
        </form> */}
      </div>
    )
  }
}

export default Suggestions;
