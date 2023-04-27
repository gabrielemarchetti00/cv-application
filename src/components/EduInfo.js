import React, { Component } from "react";

class Edu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {school, title, sdate, edate} = this.props
        return (
            <div>
                <p>{school.text}</p>
                <p>{title.text}</p>
                <p>{sdate.text} {edate.text}</p>
            </div>
        )
    }
}

export default Edu