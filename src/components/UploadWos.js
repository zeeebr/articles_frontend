import React, {useState, useEffect} from 'react'
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

function UploadWos() {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState(null);
    

    useEffect(() => {
        const interval = setInterval(() => {
            getStatus();
            //console.log(status)
        }, 500);
        
        return () => clearInterval(interval);       
    });

    const getStatus = async () => {
        const response = await axios.get(`${apiUrl}/wos/status`, {
            mode: 'no-cors'
        })

        setStatus(response.data);
    }

    const postCsv = async (e) => {
        e.preventDefault();
        await axios({
            method: 'post',
            url: `${apiUrl}/wos/parser`,
            mode: 'no-cors',
            data: data
        });
        //console.log(this.state)
    }
    
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
                            onFileLoaded={data => setData(data)} 
                            parserOptions={parseOptions} 
                        />
                        <SubmitFile json={postCsv} test={data} />
                        {status}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}

export default UploadWos