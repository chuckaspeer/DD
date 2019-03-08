// import React, { Component } from "react";

 



// export default class AccMain extends Component {


//   render() {

//     return (
//       <div>
        
//         <div>Students NAME</div>
        // <CheckBoxes />
        // <Comments/>
//       </div>
//     );
//   }
// }

import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CheckBoxes from "./CheckBoxes";
 import Comments from "./Comments";
const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes} =  props;
 

  return (
    <Card className={classes.card}>
      <CardContent>
        <CheckBoxes/>
       </CardContent>
       <CardContent>
        <Comments/>
       </CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      
      <CardActions> 
        <Button size="small">Some</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);