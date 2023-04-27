import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {name, email, phone} = this.props
        return (
            <div>
                <h1>{name.text}</h1>
                <p>{email.text}</p>
                <p>{phone.text}</p>
            </div>
        )
    }
}

export default General