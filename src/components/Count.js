import React, {Component} from 'react'

const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URL;

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = undefined;
    }

    counter = async () => {
        const response = await axios.get(`${apiUrl}/count`, {
            mode: 'no-cors'
        })
        this.setState(response)
    }

    componentWillMount() {
        this.counter();
        this.timer = setInterval(() => this.counter(), 1000)
    }

    componentWillUnmount() {
        this.timer = null;
    }

    render() {
        return(
            <div>
                { this.state &&
                    <table className="counter-table">
                        <tbody>
                            <tr align="center">
                                <th>University</th>
                                <th>2015</th>
                                <th>2016</th>
                                <th>2017</th>
                                <th>2018</th>
                                <th>2019</th>
                                <th>2020</th>
                            </tr>
                            <tr align="center">
                                <td>WoS</td>
                                <td>{this.state.data.wos['2015']}</td>
                                <td>{this.state.data.wos['2016']}</td>
                                <td>{this.state.data.wos['2017']}</td>
                                <td>{this.state.data.wos['2018']}</td>
                                <td>{this.state.data.wos['2019']}</td>
                                <td>{this.state.data.wos['2020']}</td>
                            </tr>
                            <tr align="center">
                                <td>Scopus</td>
                                <td>{this.state.data.scopus['2015']}</td>
                                <td>{this.state.data.scopus['2016']}</td>
                                <td>{this.state.data.scopus['2017']}</td>
                                <td>{this.state.data.scopus['2018']}</td>
                                <td>{this.state.data.scopus['2019']}</td>
                                <td>{this.state.data.scopus['2020']}</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

export default Count