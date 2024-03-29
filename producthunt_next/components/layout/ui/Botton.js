import styled from '@emotion/styled';
import React from 'react';

const Botton = styled.a`
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #1d1d1d;
    padding: .8rem 2rem;    
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? '#DA552F': 'white'};
    color: ${props => props.bgColor? 'white': '#000'};
    
    /* &:last-of-type{
        margin-right: 0;
    } */

    &:hover{
        cursor: pointer;
    }
`;
 
export default Botton;