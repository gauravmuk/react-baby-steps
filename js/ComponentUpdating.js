import React from 'react';
import ReactDOM from 'react-dom';

class ComponentUpdating extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {
            increasing: false
        }
    }

    update() {
        ReactDOM.render(
            <ComponentUpdating val={this.props.val + 1} />,
            document.querySelector('#app')
        );
    }

    render() {
        return (
            <button onClick={this.update}>{this.props.val}</button>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            increasing: nextProps.val > this.props.val
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.val)
    }
}

ComponentUpdating.defaultProps = {
    val: 0
}

export default ComponentUpdating
