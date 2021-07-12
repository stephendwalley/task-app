import React, { Component } from "react";
import { List } from "./components/Overview"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      input: '',
    }

    this.submitBtn = this.submitBtn.bind(this);
  }

  submitBtn = (event) => {
    event.preventDefault();
    this.setState({ tasks: [...this.state.tasks, this.state.input] })
    console.log(this.state.input);

  }

  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter Tasks</label>
          <input type="text" onChange={this.inputChangeHandler} />
          <button onClick={this.submitBtn}>Submit</button>
          <List tasks={this.state.tasks} />
          
        </form>
      </div >
    );
  }
}

export default App;
