import React, { Component } from "react";


class List extends Component {
    render() {
        const { tasks } = this.props;
        return (
            <div>
                {tasks.map((task) => {
                    return <li key={task.id}>{task.text}</li>;
                })}
            </div>
        );
    }
}


export { List }