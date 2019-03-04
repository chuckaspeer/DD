import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});



const reportOptions = ["ClassReport","Skills","Behavior",'']

class ReportMenu extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: [],

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
    <div></div>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="ClasseMenu"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="Reports"
              secondary={reportOptions[this.state.selectedIndex]}
            />
          </ListItem>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {reportOptions.map((reportOption, index) => (
              <MenuItem
              component ={Link} to={`/ReportMenu/${index}`}
                key={reportOption}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                {reportOption}
              </MenuItem>
            ))}
          </Menu>
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="ReportMenu"
            onClick={this.handleClickListItem}
          >
          </ListItem>
          
        </List>
        
      </div>
    );
  }
}

ReportMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReportMenu);