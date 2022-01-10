import styled from "styled-components";

export const Buttons = styled.button`
    background: linear-gradient(180deg, #EF6C00 0%, #C0661C 100%);
    border-radius: 4px;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
    padding: 14px;
    transition: filter 0.2s;
        
    &:hover{
        cursor: pointer;
        filter: brightness(0.9);
    }

`;
