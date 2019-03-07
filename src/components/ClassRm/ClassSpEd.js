import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core'
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const spEdStudents = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Dan"
  },
  {
    id: 3,
    name: "Sue"
  },
  {
    id: 4,
    name: "Brian"
  }
];

 class ClassSpEd extends Component {
  state = {
    selectedIndex: []
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleButtonClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    
    const { classes } = this.props;
    return (
      <div>
        DIV Hello from ClassSpEd
        <div>
          <div>
            {spEdStudents.map((student, id) => (
              <Button
              className={classes.root}
                component={Link}
                to={`/student/:id`}
                key={student.id}
                selected={id === this.state.selectedIndex}
                onClick={event => this.handleButtonClick(event, id)}
              >
              {student.name }
               </Button>
            ))}
           
          </div>

          
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(ClassSpEd)