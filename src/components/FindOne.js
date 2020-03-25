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
        this.handleCheck1 = this.handleCheck1.bind(this);
        this.handleCheck2 = this.handleCheck2.bind(this);
    }

    getScopusPaper = async (e) => {
        e.preventDefault();
        const eid = '2-s2.0-'+e.target.elements.eid.value;
        const response = await axios.get(`${apiUrl}/correction/scopus/${eid}`, {
            mode: 'no-cors'
        });
        
        //console.log(response.data);
    
        this.setState({paper: response.data[0]})
    }

    getWosPaper = async (e) => {
        e.preventDefault();
        const eid = 'WOS:'+e.target.elements.eid.value;
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
                                    <input type="text" name="eid" placeholder={this.state.baseIsScopus ? 'id (8508...)' : 'id (0005...)'} />
                                    <button>Загрузить</button>
                                </form>
                            </td>
                            <td>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={this.handleCheck1} />
                                    <label className="custom-control-label" htmlFor="customSwitch1">freez-z-zer</label>
                                </div>
                            </td>
                            <td align="right"> 
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch2" onChange={this.handleCheck2} />
                                    <label className="custom-control-label" htmlFor="customSwitch2">Switch to WoS</label>
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