import styled from 'styled-components';

export const Nav = styled.nav`
align-items: center;
background-color: #04d361;
display: flex;
height: 5.5vh;
padding: 5px;
width: 100%;
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

export const Login = styled.div`
    align-items: center;
    background-color: #191622;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`;

export const Form = styled.form`
    align-items: center;
    background-color: #a48fe68f;
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
        font-size: 2em;

        position: absolute;
        top: 0;
    }
    p {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    };
    input:focus {
        outline: 0;
        border: 0;
        box-shadow: 0px 0px 3px 1px #04d361;
    };
`;

export const Button = styled.button`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;

    background: #04d361;
    border: 1px solid #fff;
    height: 3vh;
    margin-top: 5vh;
    width: 10vw;
    &:focus {
        outline-color: #2cad66;
    }
`;
