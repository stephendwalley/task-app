import React, { Component } from "react";


class List extends Component {
    render() {
        return (
            <div>
                {this.props.tasks.map((task, index) => {
                    return <li key={task.id}>{task.text}</li>;
                })}
            </div>
        );
    }
}


export { List }