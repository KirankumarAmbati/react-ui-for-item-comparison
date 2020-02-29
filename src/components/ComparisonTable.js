import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.h3`
  color: red;
  text-align: center;
`

const Colors = styled.span`
    border-radius: 50%;
    margin-right: 5px;
    color: ${props => props.color};
    background-color: ${props => props.color}}}
`

class ComparisonTable extends Component {
    constructor() {
        super()

        this.state = {
            properties: [],
            availableProperties: [
                "price",
                "colors",
                "condition",
                "vendors"
            ]
        }

        this.handlePropSelect = this.handlePropSelect.bind(this);
        this.renderComparisonTable = this.renderComparisonTable.bind(this);
        this.fetchRequiredItemByID = this.fetchRequiredItemByID.bind(this);
    }
    handlePropSelect(event) {
        event.persist()

        let { properties } = this.state;

        if (event.target.checked) {
            properties.push(event.target.value)
        } else {
            properties.splice(properties.indexOf(event.target.value), 1)
        }

        this.setState({
            properties
        })
    }
    renderComparisonTable(selectedItems) {
        let { properties } = this.state;

        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Property Name ⬇️</th>
                            {selectedItems.map(id => {
                                let requiredItem = this.fetchRequiredItemByID(id);

                                return (
                                    <th key={id}>{requiredItem.name}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            properties.map((property, index) => (
                                <tr key={index}>
                                    <td><strong>{property.toUpperCase()}</strong></td>

                                    {selectedItems.map(id => {
                                        let requiredItem = this.fetchRequiredItemByID(id);

                                        return (
                                            <td key={id}>{typeof requiredItem[property] === 'object' ? this.renderArray(requiredItem[property], property) : requiredItem[property]}</td>
                                        )
                                    })}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        )
    }
    fetchRequiredItemByID(id) {
        let requiredItem;

        this.props.data.forEach(item => {
            if (item.id === id) {
                requiredItem = item
            }
        });

        return requiredItem;
    }
    renderArray(arr, prop) {
        if (prop === 'colors') {
            return (
                <p>
                    {arr.map((color,index) => (
                        <Colors key={index} color={color}>OO</Colors>
                    ))}
                </p>
            )
        } else {
            return arr.join(', ')
        }
    }
    render() {

        let { availableProperties, properties } = this.state;

        return (
            <Container>
                <Title>Comparison</Title>
                <PropertiesFilter>
                    {availableProperties.map((prop, index) => (
                        <p key={index} style={{ display: 'flex',  marginRight: '2%' }}><input type="checkbox" style={{marginRight: '10px'}} onChange={this.handlePropSelect} value={prop} />{prop}</p>
                    ))}
                </PropertiesFilter>
                {this.renderComparisonTable(this.props.selected)}
                {properties.length === 0 && <ErrorMessage>* Please select any of the properties below to compare</ErrorMessage>}
            </Container>
        );
    }
}

const Container = styled.div``

const Title = styled.h1``

const PropertiesFilter = styled.div`
    display: flex
`
export default ComparisonTable;