import React, { Component } from "react";

// render tasks in list format
// use map to map over tasks array (provide unique key to each item, and print as list element)

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li>{this.props.task}</li>
            </div>
        );
    }
}


export { List }