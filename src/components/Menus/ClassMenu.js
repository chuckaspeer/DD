import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const options = [
  "1st Period Biology",
  "2nd Period Chemistry",
  "3rd Period Biology",
  "4th Period Ecology",
  "5th Period Biology",
  "6th Period Chemistry",
  "8th Period Biology"
];

class ClassMenu extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: []
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="ClasseMenu"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              key="9"
              primary="Classes"
              secondary={options[this.state.selectedIndex]}
            />
          </ListItem>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                component={Link}
                to={`/ClassMain/${index}`}
                key={option}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </List>
      </div>
    );
  }
}

ClassMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClassMenu);
