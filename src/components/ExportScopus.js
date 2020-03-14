import React, {Component} from 'react'
import ExportFile from './ExportFile'
import logo from '../img/scopus.png'

const axios = require('axios');

class ExportScopus extends Component {
    constructor(props) {
        super(props);
        this.state = undefined;
    }

    getJson = async (e) => {
        e.preventDefault();
        let response = await axios.get(`http://localhost:4000/scopus/export`, {
            mode: 'no-cors'
        });
        console.log(response)
        this.setState(response.data)
    }
    
    render() {
        return (
            <div className="upload-block">
                <table className="upload-table">
                    <tr>
                        <th><img src={logo} alt={"logo"}></img>&nbsp;&nbsp;Export CSV file Scopus DB</th>
                    </tr>
                    <tr>
                        <td>
                        <form onSubmit={this.getJson}>
                            <button>Export!</button>
                        </form>
                        <ExportFile data={this.state} />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ExportScopus