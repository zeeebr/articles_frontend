import React, {Component} from 'react'
import ExportFile from './ExportFile'
import logo from '../img/wos.png'
import jsonToCsv from "./JsonToCsv";

const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URL;

class ExportWos extends Component {
    constructor(props) {
        super(props);
        this.state = undefined;
    }

    getJson = async (e) => {
        e.preventDefault();
        let response = await axios.get(`${apiUrl}/wos/export`, {
            mode: 'no-cors'
        });
        
        let csvData = jsonToCsv(response.data)
        //console.log(csvData)
        this.setState({csv: csvData})
    }
    
    render() {
        return (
            <div className="upload-block">
                <table className="upload-table">
                    <tbody>
                        <tr>
                            <th><img src={logo} alt={"logo"}></img>&nbsp;&nbsp;Export CSV file Web of Science DB</th>
                        </tr>
                        <tr>
                            <td>
                            <form onSubmit={this.getJson}>
                                <button>Export!</button>
                            </form>
                            <ExportFile data={this.state} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExportWos