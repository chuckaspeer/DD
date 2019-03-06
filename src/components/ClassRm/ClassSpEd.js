import React, { Component } from "react";

// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import {Button} from '@material-ui/core'
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import SelectButton from "../../utils/SelectButton";

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
        Hello from ClassSpEd
        <div>
          <div>
            {spEdStudents.map((student, id) => (
              <SelectButton
              
                component={Link}
                to={`/student/:id`}
                key={student.id}
                selected={id === this.state.selectedIndex}
                onClick={event => this.handleButtonClick(event, id)}
              
              >
              
              {student.name }
              </SelectButton>
            ))}
            
          </div>

          {/* </List>  */}
        </div>
      </div>
    );
  }
}
export default (ClassSpEd)