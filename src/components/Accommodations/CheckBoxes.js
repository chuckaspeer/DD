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
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




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
    selectedValue: "a",

  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;
    // const spEdAccommodationz= spEdAccommodations.map((spEdAccommodations, text) => (
    //               //  < Radio key={spEdAccommodation.id} label={spEdAccommodation} style={styles.button}/>
    //            {spEdAccommodations}
    //                ))
    //   console.log(spEdAccommodationz)

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.radio}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Radio value="female" control={<Radio />} label="Female" />
            <Radio value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          
        </FormControl></div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtons);
