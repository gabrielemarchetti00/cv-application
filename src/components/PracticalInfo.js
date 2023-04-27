import React, { Component } from "react";

class Practice extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {company, position, tasks, sdateJob, edateJob} = this.props
        return (
            <div>
                <p>{company.text}</p>
                <p>{position.text}</p>
                <p>{tasks.text}</p>
                <p>{sdateJob.text} {edateJob.text}</p>
            </div>
        )
    }
}

export default Practice