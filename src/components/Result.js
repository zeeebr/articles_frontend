import React, {Component} from 'react'

class Result extends Component {
    render() {
        return (
            <div>
                { this.props.eid &&
                    <div>
                    <br></br>
                    <p>eid: {this.props.eid}</p>
                    <p>topic: {this.props.topic}</p>
                    <p>type: {this.props.type}</p>
                    <p>journal: {this.props.journal}</p>
                    <p>volume: {this.props.volume}</p>
                    <p>issue: {this.props.issue}</p>
                    <p>pages: {this.props.pages}</p>
                    <p>ourAuthors: {this.props.ourAuthors}</p>
                    <p>affil: {this.props.affil}</p>
                    <p>year: {this.props.year}</p>
                    <p>frezee: {this.props.frezee}</p>
                </div>
                }
            </div>
        )
    }
}

export default Result