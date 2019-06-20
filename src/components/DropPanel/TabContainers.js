import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import {Paper} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography } from "@material-ui/core";


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class TabContainerClass
 extends React.Component {
  state = {
    value: 0,
    children: []
  };

  // getCheckboxesBySpEd() {
  //   return Object.entries(
  //     this.state.spEdAccommodations.reduce(
  //       (spEdAccommodations, spEdAccommodation) => {
  //         const { text, id } = spEdAccommodation;
          
          
  //         spEdAccommodations[id] = spEdAccommodations[text]
  //           ? [...spEdAccommodations[text], spEdAccommodation]
  //           : [spEdAccommodation];

  //         return spEdAccommodations;
  //       },
  //       {}
  //     )
  //   );
  // }

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    // console.log(this.state)
    // console.log(this.value);
    

    const { classes, panelsTabs } = this.props;
    const { value } = this.state;
    // const { first_name, last_name}  = this.props;

    //  console.log(this.props);
    
     
    return (
      <div className={classes.root}>
        {/* <Paper position="absolute" color="default"> */}

        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          //  variant="scrollable"
          scrollButtons="auto"
        >
          
          {panelsTabs.map((panelT, index) => (
            <Tab key={panelT} label={panelT} />
          ))}
        </Tabs>
      </div>
    );
  }
}

TabContainerClass.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabContainerClass
  );
