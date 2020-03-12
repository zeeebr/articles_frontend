import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Count from './components/Count'
import FindOne from './components/FindOne'
import UploadScopus from './components/UploadScopus'
import UploadWos from './components/UploadWos'
//import CsvDownloader from './components/CsvDownloader'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = undefined;
    }
    render() {
        return (
            <div>
                <Count />
                <UploadScopus />
                <UploadWos />
                <UploadWos />
                <UploadWos />
                <FindOne />
            </div>
        )
    } 
}

export default App