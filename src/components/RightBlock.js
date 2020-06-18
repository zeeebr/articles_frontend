import React, {Component} from 'react'
import Correction from './Correction'
import TextareaPlus from './TextareaPlus'

const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URL;

class RightBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            paper: undefined,
            connection: undefined,
            baseIsScopus: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck1 = this.handleCheck1.bind(this);
        this.handleCheck2 = this.handleCheck2.bind(this);
    }

    getScopusPaper = async (e) => {
        e.preventDefault();
        const eid = '2-s2.0-'+e.target.elements.eid.value;
        const response = await axios.get(`${apiUrl}/scopus/paper/${eid}`, {
            mode: 'no-cors'
        });
    
        this.setState({paper: response.data[0]})

        const response2 = await axios.get(`${apiUrl}/scopus/connection/${eid}`, {
            mode: 'no-cors'
        });

        this.setState({connection: response2.data})
    }

    getWosPaper = async (e) => {
        e.preventDefault();
        const eid = 'WOS:'+e.target.elements.eid.value;
        const response = await axios.get(`${apiUrl}/wos/paper/${eid}`, {
            mode: 'no-cors'
        });
    
        this.setState({paper: response.data[0]})

        const response2 = await axios.get(`${apiUrl}/wos/connection/${eid}`, {
            mode: 'no-cors'
        });

        this.setState({connection: response2.data})
    }

    handleChange(e) {
        let data = JSON.parse(e.target.value)
        this.setState({ paper: data });
    }

    handleCheck1(e){
        this.setState(prevState => {
            let paper = Object.assign({}, prevState.paper);  
            paper.frezee = !paper.frezee;                                     
            return { paper };                                 
        })
    }

    handleCheck2(e){
        this.setState({
            baseIsScopus: !this.state.baseIsScopus
        });
    }

    updateScopusPaper = async (e) => {
        e.preventDefault();
        console.log(this.state.paper);
        await axios({
            method: 'put',
            url: `${apiUrl}/scopus/correction`,
            mode: 'no-cors',
            data: this.state.paper
        });
    }

    updateWosPaper = async (e) => {
        e.preventDefault();
        console.log(this.state.paper);
        await axios({
            method: 'put',
            url: `${apiUrl}/wos/correction`,
            mode: 'no-cors',
            data: this.state.paper
        });
    }

    deleteScopusPaper = async (e) => {
        e.preventDefault();
        const eid = this.state.paper.eid;
        console.log(this.state.paper);
        await axios({
            method: 'delete',
            url: `${apiUrl}/scopus/delete/${eid}`,
            mode: 'no-cors',
            data: this.state.paper
        });
    }

    deleteWosPaper = async (e) => {
        e.preventDefault();
        const eid = this.state.paper.eid;
        console.log(this.state.paper);
        await axios({
            method: 'delete',
            url: `${apiUrl}/wos/delete/${eid}`,
            mode: 'no-cors',
            data: this.state.paper
        });
    }

    render() {
        return(
            <div className="right-block">
                <Correction 
                    base={this.state.baseIsScopus} 
                    paper={this.state.paper} 
                    getScopusPaper={this.getScopusPaper}
                    getWosPaper={this.getWosPaper}
                    handleChange={this.handleChange}
                    handleCheck1={this.handleCheck1}
                    handleCheck2={this.handleCheck2} 
                    updateScopusPaper={this.updateScopusPaper}
                    updateWosPaper={this.updateWosPaper}
                    deleteScopusPaper={this.deleteScopusPaper}
                    deleteWosPaper={this.deleteWosPaper}
                />
                <TextareaPlus connection={this.state.connection} />
            </div>
        )
        
    }
}

export default RightBlock