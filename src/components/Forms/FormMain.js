import React, { Component } from 'react'
import ARDMain from './ARDForm/ARDMain';
import StudentMain from './StudentForm/StudentMain'

export default class FormMain extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                Hello from FormMain
               
                {children}
            </div>
        )
    }
}

