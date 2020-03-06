import React, {Component} from 'react'
import CSVReader from 'react-csv-reader'

const axios = require('axios');

class CsvParser extends Component {
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
            <div class="block1">
                <p>Upload CSV file Scopus DB:</p>
                <CSVReader onFileLoaded={data => this.setState(data)} />
            </div>
        )
    }
}

export default CsvParser