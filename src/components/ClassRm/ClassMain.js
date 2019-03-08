import React, { Component } from "react";
import ToggleButton from '../Toggle/ToggleButton'


class ClassMain extends Component {
  render(props) {

    return (
      <div>
        <span><h1>ClassMain</h1></span>
        
        <ToggleButton position ="right"/>
        

      </div>
    );
  }
}

export default ClassMain;
