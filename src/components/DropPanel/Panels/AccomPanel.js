import React, { Component } from 'react'
import {Grid, Paper} from "@material-ui/core";

export default class AccomPanel extends Component {
    render() {
        const {spEdAccomms, classes, AccomText} =this.props;
        console.log(AccomText);
        
        return (
            <div>
                <Grid container spacing={24}>
                  <Grid item xs={3} align="centered">
                    <Paper>{spEdAccomms}</Paper>
                  </Grid>
                  <Grid item xs={8}>
                    <Paper className={classes} label={AccomText}>
                      {AccomText}
                    </Paper>
                  </Grid>
                </Grid>
            </div>
        )
    }
}

