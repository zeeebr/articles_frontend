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
            <div className="counter-block">
                { this.state &&
                    <table className="counter-table">
                        <tbody>
                            <tr>
                                <th>University</th>
                                <th>2015</th>
                                <th>2016</th>
                                <th>2017</th>
                                <th>2018</th>
                                <th>2019</th>
                                <th>2020</th>
                                <th>ALL</th>
                            </tr>
                            <tr>
                                <td>WoS</td>
                                <td>{this.state.data.wos['2015']}<sup>&nbsp;{this.state.data.wos['2015+'] > 0 ? '+'+this.state.data.wos['2015+'] : ''}</sup></td>
                                <td>{this.state.data.wos['2016']}<sup>&nbsp;{this.state.data.wos['2016+'] > 0 ? '+'+this.state.data.wos['2016+'] : ''}</sup></td>
                                <td>{this.state.data.wos['2017']}<sup>&nbsp;{this.state.data.wos['2017+'] > 0 ? '+'+this.state.data.wos['2017+'] : ''}</sup></td>
                                <td>{this.state.data.wos['2018']}<sup>&nbsp;{this.state.data.wos['2018+'] > 0 ? '+'+this.state.data.wos['2018+'] : ''}</sup></td>
                                <td>{this.state.data.wos['2019']}<sup>&nbsp;{this.state.data.wos['2019+'] > 0 ? '+'+this.state.data.wos['2019+'] : ''}</sup></td>
                                <td>{this.state.data.wos['2020']}<sup>&nbsp;{this.state.data.wos['2020+'] > 0 ? '+'+this.state.data.wos['2020+'] : ''}</sup></td>
                                <td>{this.state.data.wos['all']}</td>
                            </tr>
                            <tr>
                                <td>Scopus</td>
                                <td>{this.state.data.scopus['2015']}<sup>&nbsp;{this.state.data.scopus['2015+'] > 0 ? '+'+this.state.data.scopus['2015+'] : ''}</sup></td>
                                <td>{this.state.data.scopus['2016']}<sup>&nbsp;{this.state.data.scopus['2016+'] > 0 ? '+'+this.state.data.scopus['2016+'] : ''}</sup></td>
                                <td>{this.state.data.scopus['2017']}<sup>&nbsp;{this.state.data.scopus['2017+'] > 0 ? '+'+this.state.data.scopus['2017+'] : ''}</sup></td>
                                <td>{this.state.data.scopus['2018']}<sup>&nbsp;{this.state.data.scopus['2018+'] > 0 ? '+'+this.state.data.scopus['2018+'] : ''}</sup></td>
                                <td>{this.state.data.scopus['2019']}<sup>&nbsp;{this.state.data.scopus['2019+'] > 0 ? '+'+this.state.data.scopus['2019+'] : ''}</sup></td>
                                <td>{this.state.data.scopus['2020']}<sup>&nbsp;{this.state.data.scopus['2020+'] > 0 ? '+'+this.state.data.scopus['2020+'] : ''}</sup></td>
                                <td>{this.state.data.scopus['all']}</td>
                            </tr>
                            <tr>
                                <td>All in year</td>
                                <td>{this.state.data.all['2015']}</td>
                                <td>{this.state.data.all['2016']}</td>
                                <td>{this.state.data.all['2017']}</td>
                                <td>{this.state.data.all['2018']}</td>
                                <td>{this.state.data.all['2019']}</td>
                                <td>{this.state.data.all['2020']}</td>
                                <td><b>{this.state.data.all['all']}</b><sup>&nbsp;{this.state.data.all['all+'] > 0 ? '+'+this.state.data.all['all+'] : ''}</sup></td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

export default Count