import React, {Component} from 'react'
import Result from './Result'

const axios = require('axios');

class FindOne extends Component {
    constructor(props) {
        super(props);
        this.state = undefined;
    }

    getOnePaper = async (e) => {
        e.preventDefault();
        const eid = e.target.elements.eid.value;
        const response = await axios.get(`http://localhost:4000/correction/${eid}`, {
            mode: 'no-cors'
        });
        
        console.log(response.data);
    
        this.setState(response.data)
    }

    render() {
        return(
            <div className="find-one">
                <h2>Запрос FindOne</h2>
                <form onSubmit={this.getOnePaper}>
                    <input type="text" name="eid" placeholder="Идентификатор"></input>
                    <button>Загрузить</button>
                </form>
                <Result data={this.state} />
            </div>
            
        )
    }
}

export default FindOne