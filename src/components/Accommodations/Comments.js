
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
 import Button from "../../utils/CommentButton";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});
const inputProps = {
  step: 300,
  width: 600
};

class Comments extends React.Component {
  state = {
    comments: ""
  };
  
  handleChange = name => event => {
    this.setState({
      comments: event.target.value
    });
   
  };
  
  submit
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <form className={classes.container} onSubmit={this.submit} noValidate autoComplete="off">
          <TextField
            id="outlined-full-width"
            label="Academic & Accomodation Comments"
            style={{margin:8}}
            multiline
            fullWidth
            rowsMax="12"
            value={this.state.comments}
            onChange={this.handleChange("Comments")}
            className={classes.textField}
            
            variant="outlined"
            inputProps={inputProps}
          />
          {/* <Button type="submit" value="Submit" /> */}
          
        </form>
        
      </React.Fragment>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comments);
