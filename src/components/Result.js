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