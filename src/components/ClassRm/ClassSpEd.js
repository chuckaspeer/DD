import React, { Component } from 'react'

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {Link} from 'react-router-dom'
// import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const spEdStudents = [
    {
      "id": 1,
      "name": "John"
    },
    {
      "id": 2,
      "name": "Dan"
    },
    {
      "id": 3,
      "name": "Sue"
    }, 
    {
      "id": 4,
      "name":"Brian"
    }
  ]

export default class ClassSpEd extends Component {
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
        const { anchorEl } = this.state;
        return (
            <div>
                Hello from ClassSpEd
                <div>
        
        <List key ='classMain' component="nav">
        
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="ClasseMain"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="SpEd"
              secondary={spEdStudents[this.state.selectedIndex]}
            />
          </ListItem>
        <Menu
        key={spEdStudents}
            id="students"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {spEdStudents.map((student, id) => (
              <MenuItem
              component ={Link} to={`/student/:id`}
                key={student.id}
                selected={id === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, id)}
              >
             
                {student.name}
              </MenuItem>
            ))}
          </Menu>
        </List>
      </div>
            </div>
        )
    }
}
