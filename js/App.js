import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hobby: 'I don\'t have a hobby'
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            hobby: e.target.value
        });
    }

    render() {
        let hobby = this.props.hobby
        return (
            <div>
                <input type="text" onChange={this.update} />
                <h1>{hobby} @ {this.state.hobby}</h1>
            </div>
        )
    }
}

App.propTypes = {
    hobby: React.PropTypes.string.isRequired,
    company: React.PropTypes.string
};

App.defaultProps = {
    company: 'Facebook Inc.'
};

export default App
