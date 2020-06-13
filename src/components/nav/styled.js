import styled from 'styled-components';
import { variables } from '../../styles/variables';
const colors = variables.colors;

export const Navigation = styled.nav`
align-items: center;
background-color: ${colors.greyScale02};
display: flex;
height: 5.5vh;
justify-content: space-between;
padding: 5px;
width: -webkit-fill-available;
    a, p {
        color: #fff;
        font-family: ${variables.fonts.titleFont};
        font-size: 1rem;
        text-decoration: none;

        align-items: center;
        cursor: pointer;
        display: flex;
        height: 100%;
        margin: 0 2vw;
        padding: 1px 5px;
        width: fit-content;
        &:hover {
            font-weight: bolder;

            background-color: ${colors.greyScale01};
        }
    }
`;

export const User = styled.div`
    margin: 0 2vw 0 auto;
    background-color: ${colors.blueScale01};
    background-image: ${props => `url(${props.image})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid ${colors.blueScale02};
    border-radius: 5vw;
    cursor: pointer;
    display: block;
    height: 5vh;
    width: 2.5vw;
    &:hover {
        box-shadow: 0 0 6px ${colors.blueScale02};
    };
    div {
        height: 100%;
        width: 100%;
    }
    select {
        position: absolute;
        padding: .5vh 1vw;
        right: 2vw;
        top: 6.6vh;
        width: fit-content;
    }
`;