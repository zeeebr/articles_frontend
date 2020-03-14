import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Count from './components/Count'
import FindOne from './components/FindOne'
import UploadScopus from './components/UploadScopus'
import UploadWos from './components/UploadWos'
import UploadAuthors from './components/UploadAuthors'
import UploadEids from './components/UploadEids'
import ExportScopus from './components/ExportScopus'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = undefined;
    }
    render() {
        return (
            <div className="main">
              <table className="main-table">
                <tr>
                  <td>
                    <Count />
                    <UploadScopus />
                    <UploadWos />
                    <UploadAuthors />
                    <UploadEids />
                    <ExportScopus />
                  </td>
                  <td>
                    <FindOne />
                  </td>
                </tr>
              </table>
            </div>
        )
    } 
}

export default App