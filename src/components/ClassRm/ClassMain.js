import React, { Component } from "react";
import ToggleButton from '../Toggle/ToggleButton'
import { Typography } from "@material-ui/core";


class ClassMain extends Component {
  render(props) {

    return (
      <div>
        <Typography>ClassMain</Typography>
        
        <ToggleButton position ="right"/>
        

      </div>
    );
  }
}

export default ClassMain;
