import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const StyledCards = styled.div`
    display: flex;
    width: 100%;
`

const Cards = ({ selected, data, handleCompare, handleRemove }) => (
    <StyledCards>
        {data.map(item => (
            <Card key={item.id} selected={selected} item={item} handleCompare={handleCompare} handleRemove={handleRemove} />
        ))}
    </StyledCards>
)

export default Cards;