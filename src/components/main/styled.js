import styled from 'styled-components';

export const Nav = styled.nav`
align-items: center;
background-color: #e8e8e84f;
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

export const Home = styled.div`
    background-image: ${props => `url(${props.imgUrl})`};
    background-position: center;
    background-size: cover;
    display: flex;
    height: 100vh;
    width: 100%;
`;

export const Button = styled.button`
    background: red;
`;
