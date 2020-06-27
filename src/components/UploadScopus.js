import React, {useState, useEffect} from 'react'
import CSVReader from 'react-csv-reader'
import SubmitFile from './SubmitFile'
import logo from '../img/scopus.png'

const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URL;
const parseOptions = { 
    header: true,
    skipEmptyLines: true 
}

function UploadScopus() {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState(null);
    

    useEffect(() => {
        const interval = setInterval(() => {
            getStatus();
            //console.log(status)
        }, 200);
        
        return () => clearInterval(interval);       
    });

    const getStatus = async () => {
        const response = await axios.get(`${apiUrl}/scopus/status`, {
            mode: 'no-cors'
        })

        setStatus(response.data);
    }

    const postCsv = async (e) => {
        e.preventDefault();
        await axios({
            method: 'post',
            url: `${apiUrl}/scopus/parser`,
            mode: 'no-cors',
            data: data
        });
    }

    return (
        <div className="upload-block">
            <table className="upload-table">
                <tbody>
                    <tr>
                        <th><img src={logo} alt={"logo"}></img>&nbsp;&nbsp;Upload CSV file Scopus DB</th>
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

export default UploadScopus