import styled from 'styled-components';
import { variables } from '../../styles/variables';
const colors = variables.colors;

export const LoginForm = styled.div`
    background-image: ${props => `url(${props.image})`};
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`;

export const Form = styled.form`
    align-items: center;
    background-color: ${variables.opacityColors.greyScale01};
    border-radius: 1vh;
    box-shadow: 0 0 4px ${colors.blueScale02};
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
    position: relative;
    top: 25vh;
    width: 50vw;
    h2 {
        color: #fff;
        font-family: ${variables.fonts.titleFont};
        font-size: 2.5rem;

        margin-top: 1.5vh;
        position: absolute;
        top: 0;
    }
    p {
        color: #fff;
        font-family: ${variables.fonts.titleFont};
        font-size: 1.2rem;
    };
    input {
        font-family: ${variables.fonts.titleFont};
        font-size: 1rem;

        height: 2.5vh;
        &:focus {
            outline: 0;
            border: 0;
            box-shadow: 0px 0px 3px 1px ${colors.blueScale02};
        };
    }
`;

export const Line = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

export const Button = styled.button`
    color: #fff;
    font-family: ${variables.fonts.titleFont};
    font-size: 1rem;
    text-shadow: .5px .5px .5px;

    background: #40babb;
    border: 1px solid #fff;
    border-radius: 5vh;
    box-shadow: 0 0 6px ${colors.blueScale02};
    cursor: pointer;
    height: 4vh;
    margin-top: 5vh;
    padding: 0 3vw;
    width: fit-content;
    &[mode="cancel"] {
        background: ${colors.redScale01};
        box-shadow: 0 0 6px ${colors.redScale02};
        &:hover {
        background-color: ${colors.redScale03};
        }
    }
    &:hover {
        background-color: ${colors.blueScale03};
    }
    &:hover {
        background-color: ${colors.blueScale03};
    }
    &:focus {
        outline-color: #1d9596;
    }
`;
