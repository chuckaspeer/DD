// import React from 'react'
// // import { Query } from "react-apollo";
// // import gql from "graphql-tag"
// //import {graphql, withApollo} from "react-apollo"
// //import { withStyles } from '@material-ui/core/styles';
// // import Button from '@material-ui/core/Button';
// // import { Link } from "react-router-dom";
// import {spEdAccommodations} from '../../utils/MockData/DataCheckBoxes'
// import { Checkbox } from '@material-ui/core';

// const styles = theme => ({
//       button: {
//         margin: theme.spacing.unit,

//       }});

//  const spEdAccommodation= spEdAccommodations.map((spEdAccommodation) => (
//             <Checkbox key={spEdAccommodation.text} label={spEdAccommodation} style={styles.button}/>
//           ))
//  console.log(spEdAccommodation)
// const CheckBoxes = () => (

//         <div >

//               <Checkbox label={spEdAccommodation}>key={spEdAccommodation.text}</Checkbox>

//         </div>

// );
// export default (CheckBoxes)
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

class RadioButtons extends React.Component {
  state = {
    selectedValue: "a"
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Radio
          checked={this.state.selectedValue === "c"}
          onChange={this.handleChange}
          value="c"
          name="radio-button-demo"
          aria-label="C"
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <Radio
          checked={this.state.selectedValue === "d"}
          onChange={this.handleChange}
          value="d"
          color="default"
          name="radio-button-demo"
          aria-label="D"
        /> 
        <Radio
        checked={this.state.selectedValue === 'e'}
        onChange={this.handleChange}
        value="e"
        color="default"
        name="radio-button-demo"
        aria-label="E"
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
      />
        <Radio
          checked={this.state.selectedValue === "b"}
          onChange={this.handleChange}
          value="b"
          name="radio-button-demo"
          aria-label="B"
          
        />
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtons);
