import styled from 'styled-components';

export const LoginForm = styled.div`
    background-image: ${props => `url(${props.image})`};
    align-items: center;
    background-color: #353535;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`;

export const Nav = styled.nav`
align-items: center;
background-color: #272727;
display: flex;
height: 5.5vh;
padding: 5px;
width: -webkit-fill-available;
    a {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;

        align-items: center;
        cursor: pointer;
        display: flex;
        height: 100%;
        padding: 1px 5px;
        width: fit-content;
        &:hover {
            font-weight: bolder;

            background-color: #e8e8e84f;
        }
    }
`;

export const Form = styled.form`
    align-items: center;
    background-color: #444446c9;
    border-radius: 1vh;
    box-shadow: 0 0 4px #00fafd;
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
    position: relative;
    top: 25vh;
    width: 50vw;
    h2 {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2.5rem;

        margin-top: 1.5vh;
        position: absolute;
        top: 0;
    }
    p {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
    };
    input {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;

        height: 2.5vh;
        &:focus {
            outline: 0;
            border: 0;
            box-shadow: 0px 0px 3px 1px #00fafd;
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
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    text-shadow: .5px .5px .5px;

    background: #40babb;
    border: 1px solid #fff;
    border-radius: 5vh;
    box-shadow: 0 0 6px #00fafd;
    cursor: pointer;
    height: 4vh;
    margin-top: 5vh;
    padding: 0 3vw;
    width: fit-content;
    &[mode="cancel"] {
        background: #bd3636;
        box-shadow: 0 0 6px #d41b1b;
        &:hover {
        background-color: #942b2b;
        }
    }
    &:hover {
        background-color: #338d8e;
    }
    &:hover {
        background-color: #338d8e;
    }
    &:focus {
        outline-color: #1d9596;
    }
`;
