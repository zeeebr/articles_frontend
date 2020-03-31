import React, {Component} from 'react'

class TextareaPlus extends Component {
    render() {
        return(
            <div className="correction-block-plus">
                <table className="correction-table">
                    <tbody>
                        <tr>
                            <th>Connections:</th>
                        </tr>
                        <tr>
                            <td>
                                <form>
                                    <textarea className="textarea-plus" type="text" placeholder="paper body..." defaultValue={this.props.connection ? JSON.stringify(this.props.connection, undefined, 4) : ''}  />
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TextareaPlus