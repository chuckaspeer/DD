import React from 'react'
// import { Query } from "react-apollo";
// import gql from "graphql-tag"
//import {graphql, withApollo} from "react-apollo"
//import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import { Link } from "react-router-dom";
import { Checkbox } from '@material-ui/core';


const styles = theme => ({
      button: {
        margin: theme.spacing.unit,
        
      }});
      
// const SUPPORT_CHECK_QUERY = gql`
// query supportCheckQuery{
//     spEdClassSupports{
//     id
//     supportId
//     supportTag
//     supportItem
//   }
// }`;
// //Need to pair class with staffId

const CheckBoxes = () => (
  
//   <Query query={SUPPORT_CHECK_QUERY}>
//     {({ loading, error, data }) => {
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;
// console.log(data);
//       return data.spEdClassSupports.map(({ id, supportTag, supportItem }) => (
        <div >
              
              
          <Checkbox variant="contained" style={styles.button} />
          Hello from CheckBoxes
     
        </div>
  //     ));
  //   }}
  // </Query>
  
  
);
export default (CheckBoxes)