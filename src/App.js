import React, { Component } from "react";
import { List } from "./components/Overview"

// handle input field and set logic for adding inputs to task list etc. 
// send to overview to print tasks


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ["tester1", "tester2", "tester3", "tester4"],
    }

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("button has been clicked")

  }

  render() {
    return (
      <div>
        <button onClick={this.onClickBtn}>Submit</button>
        {this.state.tasks.map((task, index) => (
          <List key={index} task={task} />
        ))}
      </div >
    );
  }
}

export default App;
