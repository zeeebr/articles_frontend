import React, {Component} from 'react'
//import Result from './Result'

const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URL;

class FindOne extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            paper: undefined,
            baseIsScopus: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    getScopusPaper = async (e) => {
        e.preventDefault();
        const eid = e.target.elements.eid.value;
        const response = await axios.get(`${apiUrl}/correction/scopus/${eid}`, {
            mode: 'no-cors'
        });
        
        //console.log(response.data);
    
        this.setState({paper: response.data[0]})
    }

    getWosPaper = async (e) => {
        e.preventDefault();
        const eid = e.target.elements.eid.value;
        const response = await axios.get(`${apiUrl}/correction/wos/${eid}`, {
            mode: 'no-cors'
        });
        
        //console.log(response.data);
    
        this.setState({paper: response.data[0]})
    }

    handleChange(e) {
        let data = JSON.parse(e.target.value)
        this.setState({ paper: data });
        //console.log(this.state);
    }

    handleCheck(e){
        this.setState({
            baseIsScopus: !this.state.baseIsScopus
        });
    }

    postScopusPaper = async (e) => {
        e.preventDefault();
        console.log(this.state.paper);
        await axios({
            method: 'post',
            url: `${apiUrl}/correction/scopus/`,
            mode: 'no-cors',
            data: this.state.paper
        });
    }

    postWosPaper = async (e) => {
        e.preventDefault();
        console.log(this.state.paper);
        await axios({
            method: 'post',
            url: `${apiUrl}/correction/wos/`,
            mode: 'no-cors',
            data: this.state.paper
        });
    }

    render() {
        return(
            <div className="find-one">
                <h5>{this.state.baseIsScopus ? 'Scopus paper correction:' : 'Web of Science paper correction:'}</h5>
                <table className="correction-table">
                    <tbody>
                        <tr>
                            <td>
                                <form onSubmit={this.state.baseIsScopus ? this.getScopusPaper : this.getWosPaper}>
                                    <input type="text" name="eid" placeholder={this.state.baseIsScopus ? 'id (2-s2.0-8...)' : 'id (WOS:000...)'} />
                                    <button>Загрузить</button>
                                </form>
                            </td>
                            <td align="right"> 
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={this.handleCheck} />
                                    <label className="custom-control-label" htmlFor="customSwitch1">Switch to WoS</label>
                                </div>     
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                
                <form>
                    <textarea className="textarea" type="text" placeholder="paper body..." value={this.state.paper ? JSON.stringify(this.state.paper, undefined, 4) : ''} onChange={this.handleChange} />
                </form>
                { this.state.baseIsScopus ?
                    <form onSubmit={this.postScopusPaper}>
                        <button>Update Scopus!</button>
                    </form>
                    :
                    <form onSubmit={this.postWosPaper}>
                        <button>Update WoS!</button>
                    </form> 
                }
                
                
            </div>
            
        )
    }
}

export default FindOne