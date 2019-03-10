import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ClassView from '../ClassRm/ClassView'
import AccomPanel from '../Accommodations/AccomPanel'

class ToggleButton extends React.Component {
  state = {
    ToggleSwitch: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    let AccomView
    if (!this.state.ToggleSwitch) {
      AccomView = <AccomPanel/>;
    } else {
      AccomView = <ClassView />;
    }
    return (
      <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Student/Class-views</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.ToggleSwitch}
                onChange={this.handleChange("ToggleSwitch")}
                value="ToggleSwitch"
              />
            }
            label="Toggle"
          />
        </FormGroup>
      
      </FormControl>
            <div>{AccomView}</div>
      </>
    );
  }
}

export default ToggleButton;
