import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 5%;
    color: white;
`

const StyledCard = styled.div`
    border: 1px solid black;
    padding: 2%;
    margin: 2%;
    width: 100%;
    &:hover {
        box-shadow: 1px 1px 10px grey;
    }
`

const Image = styled.img`
    height: 150px;
    min-height: 150px;
    max-height: 150px;
`

const Name = styled.h2``

const Description = styled.div`
    display: flex;
    justify-content: space-between;
`

class Card extends Component {
    renderButton(selected, id) {
        let { handleCompare, handleRemove } = this.props;

        if (selected.includes(id)) {
            return <Button style={{ backgroundColor: 'red' }} onClick={() => handleRemove(id)}>Remove</Button>
        }

        return <Button style={{ backgroundColor: 'green' }} onClick={() => handleCompare(id)}>Compare</Button>
    }
    render() {

        const { id, name, description, image, price } = this.props.item;

        return (
            <StyledCard>
                <Image src={image} alt={name} />
                <Name>{name}</Name>
                <Description>
                    <p>{description}</p>
                    <p style={{ fontWeight: 'bold' }}>{price}</p>
                </Description>
                {this.renderButton(this.props.selected, id)}
            </StyledCard>
        );
    }
}

export default Card;