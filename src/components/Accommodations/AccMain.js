import React, { Component } from "react";

import CheckBoxes from "./CheckBoxes";
import Comments from "./Comments";



export default class AccMain extends Component {


  render() {

    return (
      <div>
        
        <div>Students NAME</div>
        <CheckBoxes />
        <Comments/>
      </div>
    );
  }
}