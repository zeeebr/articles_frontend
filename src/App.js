import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Count from './components/Count'
import UploadScopus from './components/UploadScopus'
import UploadWos from './components/UploadWos'
import UploadAuthors from './components/UploadAuthors'
import UploadEids from './components/UploadEids'
import ExportScopus from './components/ExportScopus'
import ExportWos from './components/ExportWos'
import RightBlock from './components/RightBlock'

class App extends Component {
    render() {
        return (
        <div className="main-block">
            <div className="main-left">
                <Count />
                <UploadScopus />
                <UploadWos />
                <UploadAuthors />
                <UploadEids />
                <ExportScopus />
                <ExportWos />
            </div>   
            <div className="main-right">
                <RightBlock />
            </div>                 
        </div>
        )
    } 
}

export default App