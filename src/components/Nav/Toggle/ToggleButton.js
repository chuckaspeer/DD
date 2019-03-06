import React, { Component } from 'react'

export default class ToggleButton extends Component {
    state ={
        on: false,
    }
    toggle = () => {
this.setState({
    on: !this.state.on
})
    }
  render() {
    return (
      <div>
          {
              this.state.on && <h4>Toggle Me</h4>
          }
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    )
  }
}
