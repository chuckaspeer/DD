import React, { Component } from "react";
import ToggleButton from '../Toggle/ToggleButton'
// import { createMuiTheme } from "@material-ui/core";


// const theme = createMuiTheme({
//   ToggleButton:{
// display:"flex"
//   }
// })
class ClassMain extends Component {
  render(props) {

    return (
      <div>
        <div display ="flex">ClassMain</div>
      
        <div><ToggleButton /></div>
        
        

      </div>
    );
  }
}

export default ClassMain;
