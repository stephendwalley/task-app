import React, { Component } from "react";
import { List } from "./components/Overview"

// handle input field and set logic for adding inputs to task list etc. 
// send to overview to print tasks


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      input: '',
    }

    this.submitBtn = this.submitBtn.bind(this);
  }

  submitBtn = () => {
    this.setState({ tasks: [...this.state.tasks, this.state.input] })
    console.log(this.state.input);

  }

  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputChangeHandler} />
        <button onClick={this.submitBtn}>Submit</button>
        {this.state.tasks.map((task, index) => (
          <List key={index} task={task} />
        ))}
      </div >
    );
  }
}

export default App;
