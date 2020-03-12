import React, {Component} from 'react'

class Result extends Component {
    render() {
        return (
            <div>
                { this.props.data &&
                    <form>
                        <textarea className="textarea" type="text" defaultValue={JSON.stringify(this.props.data, undefined, 4)} />
                    </form>
                }
            </div>
        )
    }
}

export default Result

/* eid: <input type="text" defaultValue={this.props.eid} />
                            <p>topic: {this.props.topic}</p>
                            <p>type: {this.props.type}</p>
                            <p>journal: {this.props.journal}</p>
                            <p>volume: {this.props.volume}</p>
                            <p>issue: {this.props.issue}</p>
                            <p>pages: {this.props.pages}</p>
                            <p>ourAuthors: {this.props.ourAuthors}</p>
                            <p>affil: {this.props.affil}</p>
                            <p>year: {this.props.year}</p>
                            <p>frezee: {this.props.frezee}</p> */