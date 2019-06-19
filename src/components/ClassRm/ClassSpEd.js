// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
// import { withStyles } from "@material-ui/core";
// import { spEdStudents } from "../../utils/Data";
// import PropTypes from "prop-types";
// import { Card, CardContent } from "@material-ui/core";

// const styles = theme => ({
//   button: {
//     margin: theme
//   },
//   input: {
//     display: ""
//   }
// });

// class ClassSpEd extends Component {
//   state = {
//     selectedIndex: []
//   };

//   handleClickListItem = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleButtonClick = (event, index) => {
//     this.setState({ selectedIndex: index, anchorEl: null });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };
//   render() {
//     const { classes } = this.props;
  
//     return (
//       <div>
//         <strong>ClassSpEd</strong>
//         <div>
          
//           <Card className={classes.card}>
//             {/* <div>
//               {spEdStudents.map((student, id) => (
//                 <CardContent key = {id}
//                     variant="contained"
//                     className={classes.card}
//                     component={Link}
//                     to={`/student/:id`}
//                     key={student.id}
//                     selected={id === this.state.selectedIndex}
//                     onClick={event => this.handleButtonClick(event, id)}
//                   >
                  
//                    {student.first_name}, {student.last_name}
//                 </CardContent>
//               ))}
//             </div> */}
//           </Card>
//         </div>
//       </div>
//     );
//   }
// }
// ClassSpEd.propTypes = {
//   classes: PropTypes.object.isRequired
// };
// export default withStyles(styles)(ClassSpEd);
