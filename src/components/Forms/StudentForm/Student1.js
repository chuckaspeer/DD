import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

class TextFields extends React.Component {
  state = {
    id: "",
    stateId: "",
    first_name: "",
    last_name: "",
    district: [],
    campus: [],
    grade_level: [],
    aP: [],
    counselor: [],

  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
console.log(this.state);

    return (
      <div className={classes.container} noValidate autoComplete="off">
        <h2>ADD NEW STUDENT</h2>
        <br />
        <TextField
          id="standard-dense"
          label="student_first_name"
          onChange={this.handleChange("first_name")}
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          id="standard-dense"
          label="student_last_name"
          onChange={this.handleChange("last_name")}
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          id="standard-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          id="standard-textarea"
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="dense"
        />
        <TextField
          id="standard-number"
          label="Grade level"
          value={this.state.age}
          onChange={this.handleChange("age")}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="dense"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Campus"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange("currency")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
