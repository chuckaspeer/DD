// import React, { Component } from "react";

// class Comments extends Component {
//   state = {
//     comment: ""
//   };

//   onChangeHandler = e => {
//     this.props.typed(e.target.value);
//     this.setState({ comment: e.target.value });
//   };

//   render() {
//     return (
//       <div className="input">
//         Comment:
//         <textarea
//           className="comment"
//           onChange={this.onChangeHandler}
//           type="text"
//         />
//       </div>
//     );
//   }
// }
// export default Comments;

import React from "react";
import PropTypes from "prop-types";
//import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
//import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "../../utils/CommentButton";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
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
            id="outlined-flexible"
            label="Comments"
            multiline
            rowsMax="8"
            value={this.state.comments}
            onChange={this.handleChange("Comments")}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            inputProps={inputProps}
          />
          <Button type="submit" value="Submit" />
        </form>
        
      </React.Fragment>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comments);
