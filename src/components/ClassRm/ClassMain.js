import React, { Component } from "react";
import ClassSpEd from "./ClassSpEd";
import ToggleButton from '../Nav/Toggle/ToggleButton'

class ClassMain extends Component {
  render() {
    return (
      <div>
        <h1>ClassMain</h1>
        <ToggleButton/>
        <ClassSpEd />
      </div>
    );
  }
}

export default ClassMain;
