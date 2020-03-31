import React, {Component} from 'react'

class Correction extends Component {
    render() {
        return(
            <div className="correction-block">
                <table className="correction-table">
                    <tbody>
                        <tr>
                            <th colSpan="3">{this.props.base ? 'Scopus paper correction:' : 'Web of Science paper correction:'}</th>
                        </tr>
                        <tr>
                            <td>
                                <form onSubmit={this.props.base ? this.props.getScopusPaper : this.props.getWosPaper}>
                                    <input type="text" name="eid" placeholder={this.props.base ? 'id (8508...)' : 'id (0005...)'} />
                                    <button>Request</button>
                                </form>
                            </td>
                            <td>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={this.props.handleCheck1} />
                                    <label className="custom-control-label" htmlFor="customSwitch1">freez-z-zer</label>
                                </div> 
                            </td>
                            <td>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch2" onChange={this.props.handleCheck2} />
                                    <label className="custom-control-label" htmlFor="customSwitch2">Switch to WoS</label>
                                </div>  
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <form>
                                    <textarea className="textarea" type="text" placeholder="paper body..." value={this.props.paper ? JSON.stringify(this.props.paper, undefined, 4) : ''} onChange={this.props.handleChange} />
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { this.props.base ?
                                    <form onSubmit={this.props.updateScopusPaper}>
                                        <button>Update Scopus!</button>
                                    </form>
                                    :
                                    <form onSubmit={this.props.updateWosPaper}>
                                        <button>Update WoS!</button>
                                    </form> 
                                }
                            </td>
                            <td></td>
                            <td align="right">
                                { this.props.base ?
                                    <form onSubmit={this.props.deleteScopusPaper}>
                                        <button>Delete Scopus!</button>
                                    </form>
                                    :
                                    <form onSubmit={this.props.deleteWosPaper}>
                                        <button>Delete WoS!</button>
                                    </form> 
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Correction