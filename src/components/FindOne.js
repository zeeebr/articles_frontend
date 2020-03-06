import React, {Component} from 'react'

class FindOne extends Component {
    render() {
        return(
            <form onSubmit={this.props.articleID}>
                <input type="text" name="eid" placeholder="Идентификатор"></input>
                <button>Загрузить</button>
            </form> 
        )
    }
}

export default FindOne