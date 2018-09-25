import React, { Component } from 'react';

import Navbar from 'components/Navbar'; // This can be improved with react router?
import TextArea from 'components/TextArea';

class Help extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <h1>I'm interested in helping!</h1>
        <h2>Let us know what you can help with:</h2>
        <TextArea
          reducer='ADD_HELP'/>
      </div>
    )
  }
}

export default Help;