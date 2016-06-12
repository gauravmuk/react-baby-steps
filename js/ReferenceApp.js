import React from 'react';
import ReactDOM from 'react-dom';

class ReferenceApp extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            blue: 0,
            green: 0
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.colorSlider).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.colorSlider).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.colorSlider).value
        });
    }

    render() {
        return (
            <div>
                <Slider ref="red" update={this.update} />
                {this.state.red}
                <br />
                <Slider ref="blue" update={this.update} />
                {this.state.blue}
                <br />
                <Slider ref="green" update={this.update} />
                {this.state.green}
                <br />
            </div>
        )
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div>
                <input ref="colorSlider"
                       type="range" min="0" max="255"
                       onChange={this.props.update} />
            </div>
        )
    }
}

export default ReferenceApp
