import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button2: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const CommentButton = (props) => {
    const { classes } = props;
  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.button2}>
        Submit
      </Button>
    </div>
  )
}
CommentButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentButton)
