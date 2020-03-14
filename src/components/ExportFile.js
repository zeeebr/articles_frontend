import React, {Component} from 'react';
import { CSVLink } from "react-csv";

class ExportFile extends Component {
    render() {
        return (
            <div>
                { this.props.data &&
                    <CSVLink data={JSON.stringify(this.props.data)}>Download me</CSVLink>
                }
            </div>
        )
    }
}

export default ExportFile