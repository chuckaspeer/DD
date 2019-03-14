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
import Checkboxes from "../Accommodations/CheckBoxes";
import Comments from "../Accommodations/Comments";
import { spEdStudents, panelsTabs } from "../../utils/MockData/Data";
import { spEdAccommodations } from "../../utils/MockData/DataCheckBoxes";

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
class AccomPanel extends Component {
  state = {
    selectedIndex: [],
    spEdAccommodations
  };

  handleButtonClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
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
      {})
    );
  }

  render() {
    const { classes } = this.props;
    const {spEdAccommodation} = this.getCheckboxesBySpEd();
    return (
      <div className={classes.root}>
        {spEdStudents.map((students, id) => (
          <ExpansionPanel key={students.id} className={classes.coulmn}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Paper className={classes.heading}>
                <div className={classes.column}>
                  {students.first_name}, {students.last_name}
                </div>
              </Paper>
              <TabContainers
                panelsTabs={panelsTabs}
                spEdStudents={spEdStudents}
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              
              {spEdAccommodations.map((spEdAccommodation,text) =>
                  <Paper key={text}>
                    {spEdAccommodation.text}
                  </Paper>
                )}
              <Checkboxes
                className={classes}
                spEdAccommodation={spEdAccommodation}
              />
            </ExpansionPanelDetails>

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
AccomPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccomPanel);
