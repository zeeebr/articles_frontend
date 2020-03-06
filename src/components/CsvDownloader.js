import React, {Component} from 'react'
import { CSVLink } from "react-csv";

const axios = require('axios');


class CsvDownloader extends Component {
    constructor(props) {
        super(props);
        this.state = undefined ;
    }

    getJson = async (e) => {
        e.preventDefault();
        let response = await axios.get(`http://localhost:4000/output`, {
            mode: 'no-cors'
        });
        console.log(response)
        this.setState(response)

        
    }

    render() {
        return (
            <div>
                <p>{this.state}</p>
                {/* <CSVLink data={this.state}>Download me</CSVLink> */}
            </div>
            
        )
      }
}

export default CsvDownloader