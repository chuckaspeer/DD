import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Checkboxes from "../Accommodations/CheckBoxes";
import Comments from "../Accommodations/Comments";
import { spEdStudents, panelsTabs } from "../../utils/MockData/Data";
import { spEdAccommodations } from "../../utils/MockData/DataCheckBoxes";
import AccomPanel from './Panels/AccomPanel'
import TabContainers from "./TabContainers";


const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "left"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
class MainPanel extends Component {
  state = {
    selectedIndex: [],
    spEdAccommodations: "",
    expanded: null
  };

  handleButtonClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  getCheckboxesBySpEd() {
    return Object.entries(
      this.state.spEdAccommodations.reduce(
        (spEdAccommodations, spEdAccommodation) => {
          const { text, id } = spEdAccommodation;
          spEdAccommodations[id] = spEdAccommodations[text]
            ? [...spEdAccommodations[text], spEdAccommodation]
            : [spEdAccommodation];
          return spEdAccommodations;
        },
        {}
      )
    );
  }

  render() {
    const { classes } = this.props;
    
    // const { spEdAccommodations } = this.getCheckboxesBySpEd();
    const spEdAccomms = spEdAccommodations.map((spEdAccommodation, id) => {
      return (
        <Paper key={id} className={classes.paper}>
          <Checkboxes
            className={classes}
            spEdAccommodation={spEdAccommodations}
          />
          {spEdAccommodations.spEdAccommodation}
        </Paper>
      );
    });
    const AccomText = spEdAccommodations.map((id, text) => {
      return (
        <Paper key={text} className={classes.heading}>
          {id.text}
        </Paper>
      );
    });
    console.log(spEdAccomms.id);
    console.log(spEdAccommodations.id);
    console.log(spEdAccommodations);
    console.log(AccomText);

    //  const {spEdAccommodation, text} = spEdAccomms
    return (
      <div className={classes.root}>
        {spEdStudents.map((students, id) => (
          <ExpansionPanel key={students.id} className={classes.coulmn}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.Header} >
                <div className={classes.root}>
                  {students.first_name}, {students.last_name}
                </div>
              </div>
              <TabContainers panelsTabs={panelsTabs} />
            </ExpansionPanelSummary>
            <div>
              <ExpansionPanelDetails>
                <Grid container spacing={24}>
                  <Grid item xs={3} align="centered">
                    <Paper>{spEdAccomms}</Paper>
                  </Grid>
                  <Grid  item xs={8}>
                    <Paper  className={classes.heading} label={AccomText}>
                      {AccomText}
                    </Paper>
                  </Grid>
                </Grid>
                <AccomPanel />
              </ExpansionPanelDetails>
            </div>
            <Divider />
            <ExpansionPanelActions>
              <Comments />
              <Button size="small" color="primary">
                Save
              </Button>
              <Button size="small">Cancel</Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}
MainPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPanel);
