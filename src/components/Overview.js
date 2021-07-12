import React, { Component } from "react";


class List extends Component {
    render() {
        return (
            <div>
                {this.props.tasks.map((task, index) => {
                    return <li key={index}>{task}</li>;
                })}
            </div>
        );
    }
}


export { List }