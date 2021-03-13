import React from 'react';
import styled from 'styled-components';
import './Person.css'

const StyledDiv=styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    padding: 16px;
    text-align: center;

    @meida (min-width: 500px) {
        width: 450px;
    }
`;
const person=(props)=>{
    const style={
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
            <StyledDiv>
                <p onClick={props.click}> I am {props.name} and I am {props.age} year old!</p>
                {/* <p>{props.children}</p> */}
                <input type="text" onChange={props.changed} value={props.name}/>
            </StyledDiv>
    );
}

export default person;
