import React, {Component} from 'react'
import CSVReader from 'react-csv-reader'
import SubmitFile from './SubmitFile'

const axios = require('axios');

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
            url: `http://localhost:4000/scopus/parser`,
            mode: 'no-cors',
            data: this.state
        });
    }
    
    render() {
        return (
            <div className="block1">
                <p>Upload CSV file Scopus DB:</p>
                <CSVReader 
                    onFileLoaded={data => this.setState(data)} 
                    parserOptions={parseOptions} 
                />
                <SubmitFile json={this.postCsv} test={this.state} />
            </div>
        )
    }
}

export default UploadScopus