import React from 'react';

class DynamicComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {id: 1, name: 'Ryu'},
                {id: 2, name: 'Ken'}
            ]}
    }

    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person} />
        })

        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

const PersonRow = (props) => {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
        </tr>
    )
}

export default DynamicComponent
