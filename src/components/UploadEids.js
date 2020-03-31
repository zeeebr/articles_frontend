import React, {Component} from 'react'
import CSVReader from 'react-csv-reader'
import SubmitFile from './SubmitFile'
import logo from '../img/id.png'

const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URL;

const parseOptions = { header: true }

class UploadScopus extends Component {
    constructor(props) {
        super(props);
        this.state = undefined;
    }

    postCsv = async (e) => {
        e.preventDefault();
        await axios({
            method: 'post',
            url: `${apiUrl}/scopus/parser`,
            mode: 'no-cors',
            data: this.state
        });
        //console.log(this.state)
    }

    updateEids = async (e) => {
        e.preventDefault();
        await axios({
            method: 'put',
            url: `${apiUrl}/eids`,
            mode: 'no-cors'
        });
        //console.log(this.state)
    }
    
    render() {
        return (
            <div className="upload-block">
                <table className="upload-table">
                    <tbody>
                        <tr>
                            <th><img src={logo} alt={"logo"}></img>&nbsp;&nbsp;Upload CSV file of Identificators</th>
                        </tr>
                        <tr>
                            <td>
                            <CSVReader 
                                onFileLoaded={data => this.setState(data)} 
                                parserOptions={parseOptions} 
                            />
                            <SubmitFile json={this.postCsv} test={this.state} />
                            <br></br>
                            <form onSubmit={this.updateEids}>
                                <button>Write new identificators!</button>
                            </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UploadScopus