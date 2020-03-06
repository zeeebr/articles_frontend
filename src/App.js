import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Info from './components/Info'
import FindOne from './components/FindOne'
import Result from './components/Result'
import CsvParser from './components/CsvParser'
import CsvDownloader from './components/CsvDownloader'

const axios = require('axios');

class App extends Component {
  state = {
    eid: undefined,
    topic: undefined,
    type: undefined,
    journal: undefined,
    volume: undefined,
    issue: undefined,
    pages: undefined,
    ourAuthors: undefined,
    affil: undefined,
    year: undefined,
    frezee: null
  }
  
  getOnePaper = async (e) => {
    e.preventDefault();
    const eid = e.target.elements.eid.value;
    const response = await axios.get(`http://localhost:4000/correction/${eid}`, {
      mode: 'no-cors'
    });
    
    console.log(response.data);

    this.setState({
      eid: response.data[0].eid,
      topic: response.data[0].topic,
      type: response.data[0].type,
      journal: response.data[0].journal,
      volume: response.data[0].volume,
      issue: response.data[0].issue,
      pages: response.data[0].pages,
      ourAuthors: response.data[0].ourAuthors,
      affil: response.data[0].affil,
      year: response.data[0].year,
      frezee: String(response.data[0].frezee)
    })
  } 
  
  render() {
    return (
      <div>
        <Info />
        <FindOne articleID={this.getOnePaper} />
        <Result 
          eid={this.state.eid}
          topic={this.state.topic}
          type={this.state.type}
          journal={this.state.journal}
          volume={this.state.volume}
          issue={this.state.issue}
          pages={this.state.pages}
          ourAuthors={this.state.ourAuthors}
          affil={this.state.affil}
          year={this.state.year}
          frezee={this.state.frezee}
        />
        <CsvParser />
        <CsvDownloader />
      </div>
    )
  } 
}

export default App