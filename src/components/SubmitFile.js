import React, {Component} from 'react'

class SubmitFile extends Component {
    render() {
        return (
            <div>
                { this.props.test &&
                    <div>
                        <br></br>
                        <form onSubmit={this.props.json}>
                            <button>Submit!</button>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default SubmitFile