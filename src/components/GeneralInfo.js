import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {name} = this.props
        return (
            <div>
                <h1>{name.text}</h1>
            </div>
        )
    }
}

export default General