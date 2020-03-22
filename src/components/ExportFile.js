import React, {Component} from 'react';

class ExportFile extends Component {
    render() {
        return (
            <div>
                { this.props.data &&
                    <form>
                        <textarea className="textarea-export" type="text" defaultValue={this.props.data.csv} />
                    </form>
                }
            </div>
        )
    }
}

export default ExportFile