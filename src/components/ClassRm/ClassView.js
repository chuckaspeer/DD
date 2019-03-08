import React, { Component } from "react";


class ClassView extends Component {
  
  render() {
    return (
      <div>
        Class View
        <div>*</div>
        <div>
          -Accom Text 1 <strong>"Note taking assistance"</strong>
        </div>
        <div>Buttons (Student 1) (Student 2) (Student 5)</div>
        <div>*</div>
        <div>
          -Accom Text 2 <strong>"Oral Testing"</strong>
        </div>
        <div>Buttons (Student 6) (Student 3) (Student 9)</div>
        <div>*</div>
        <div>
          -Accom Text 3 <strong>"reminders to stay on task"</strong>
        </div>
        <div>
          Buttons (Student 1) (Student 2) (Student 3) (Student 4) (Student 5)
          (Student 9)
        </div>
      </div>
    );
  }
}
export default ClassView;