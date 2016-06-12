import React from 'react';

class OwnerOwnee extends React.Component {
    constructor() {
        super();
        this.state = {
            hobby: ''
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            hobby: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Widget hobby={this.state.hobby} update={this.update} />
                <Widget hobby={this.state.hobby} update={this.update} />
                <Widget hobby={this.state.hobby} update={this.update} />
            </div>
        )
    }
}


const Widget = (props) => {
    return (
        <div>
            <input type="text" onChange={props.update} />
            <h1>{props.hobby}</h1>
        </div>
    )
}

export default OwnerOwnee
