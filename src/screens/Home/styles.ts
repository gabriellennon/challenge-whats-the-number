import styled from "styled-components";
import PropTypes from 'prop-types';

export const Container = styled.header`
    margin: 0 auto;
`;

export const Content = styled.div`
    text-align: center;
    margin-top: 108px;
`;

export const Header = styled.div`
    text-align: center;
    margin-top: 44px;
    padding: 0 289px;
`;

export const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color:#DB6300;
`;

export const Divider = styled.hr`
    border: 1px solid #CFCFCF;
`;

export const Number = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 200px;
    color: #262A34;
    margin: 0;
`;

export const ContentSort = styled.div``;

export const InputSort = styled.input`
    margin-top: 143px;
    margin-right: 11px;
    background: #FFFFFF;
    border: 1px solid #FF6600;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 14px 12px;

    &:hover:not(.disabled),
    &:active:not(.disabled),

    &:disabled {
        opacity: 0.6;
        filter: saturate(60%);
    }
`;

InputSort.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export const ButtonComponent = styled.button`
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

    &:hover:not(.disabled),
    &:active:not(.disabled),

    &:disabled {
        opacity: 0.6;
        filter: saturate(60%);
    }
`;

ButtonComponent.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export const LoadingStyle = styled.div`
    text-align: center;
    margin: 40px auto;
`;

export const Error = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #CC3300;
`;

export const NewMatch = styled.button`
    background: linear-gradient(180deg, #434854 0%, #9E9E9E 100%);
    border-radius: 4px;
    border: none;
    text-transform: uppercase;
    transition: filter 0.2s;
    font-family: Roboto;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
    padding: 14px 10px;
        
    &:hover{
        cursor: pointer;
        filter: brightness(0.9);
    }

    svg{
        margin-right: 6px;
    }
`;

export const DescriptionUser = styled.p`
    font-family: Montserrat;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    color: #FF6600;
`;