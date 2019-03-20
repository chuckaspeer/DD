// import React, { Component, Fragment } from 'react'
// import { Tabs1 } from './Tabs1'
// import XPanel from './XPanel'
// import { muscles, exercises } from '../../../store'

// export default class extends Component {
//   state = {
//     exercises,
//     exercise: {}
//   }

//   getExercisesByMuscles() {
//     return Object.entries(
//       this.state.exercises.reduce((exercises, exercise) => {
//         const { muscles } = exercise

//         exercises[muscles] = exercises[muscles]
//           ? [...exercises[muscles], exercise]
//           : [exercise]

//         return exercises
//       }, {})
//     )
//   }

//   handleCategorySelected = category => {
//     this.setState({
//       category
//     })
//   }

//   handleExerciseSelected = id => {
//     this.setState(({ exercises }) => ({
//       exercise: exercises.find(ex => ex.id === id)
//     }))
//   }

//   render() {
//     const exercises = this.getExercisesByMuscles(),
//       { category, exercise } = this.state

//     return <Fragment>
      

//       <XPanel
//         exercise={exercise}
//         category={category}
//         exercises={exercises}
//         onSelect={this.handleExerciseSelected}
//       />

//       <Tabs1
//         category={category}
//         muscles={muscles}
//         onSelect={this.handleCategorySelected}
//       />
//     </Fragment>
//   }
// }
