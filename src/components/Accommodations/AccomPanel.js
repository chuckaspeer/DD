import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Checkboxes from "./CheckBoxes";
import Comments from "./Comments";
import { spEdStudents } from "../../utils/Data";

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
    selectedIndex: []
  };

  handleButtonClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };
  render() {
 
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {spEdStudents.map((students, id) => (
          <ExpansionPanel key={students.id} className={classes.coulmn}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {students.first_name}, {students.last_name}
                </Typography>
                <div>
                  <h6
                    variant="contained"
                    key={students.id}
                    selected={id === this.state.selectedIndex}
                    onClick={event => this.handleButtonClick(event, id)}
                  >
                    <ul>
                      <div />
                    </ul>
                  </h6>
                </div>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Accomidations
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <div className={classes.column}>
                <Checkboxes />
              </div>
              <div className={classNames(classes.column, classes.helper)}>
                <Comments />
              </div>
            </ExpansionPanelDetails>

            <Divider />
            <ExpansionPanelActions>
              <Button size="small">Cancel</Button>
              <Button size="small" color="primary">
                Save
              </Button>
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
