import React, {Component} from 'react'
import CSVReader from 'react-csv-reader'
import SubmitFile from './SubmitFile'
import logo from '../img/wos.png'

const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URL;

const parseOptions = { 
    header: true,
    quoteChar: "",
    delimiter: "\t",
    skipEmptyLines: true
}

class UploadWos extends Component {
    constructor(props) {
        super(props);
        this.state = undefined;
    }

    postCsv = async (e) => {
        e.preventDefault();
        await axios({
            method: 'post',
            url: `${apiUrl}/wos/parser`,
            mode: 'no-cors',
            data: this.state
        });
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="upload-block">
                <table className="upload-table">
                    <tbody>
                        <tr>
                            <th><img src={logo} alt={"logo"}></img>&nbsp;&nbsp;Upload CSV file Web of Science DB</th>
                        </tr>
                        <tr>
                            <td>
                            <CSVReader 
                                onFileLoaded={data => this.setState(data)} 
                                parserOptions={parseOptions} 
                            />
                            <SubmitFile json={this.postCsv} test={this.state} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UploadWos