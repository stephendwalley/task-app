import React, { Component } from "react";


class List extends Component {
    render() {
        const { tasks } = this.props;
        return (
            <div>
                <ul>
                    {tasks.map((task, index) => {
                        return <li key={task.id}>{index + 1}. {task.text}</li>;
                    })}
                </ul>
            </div>
        );
    }
}


export { List }