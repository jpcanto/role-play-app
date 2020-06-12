import styled from 'styled-components';

export const Navigation = styled.nav`
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
        text-decoration: none;

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

export const User = styled.div`
    margin-left: auto;
        div {
            background-color: #abfeff;
            background-image: ${props => `url(${props.image})`};
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            border: 1px solid #00fafd;
            border-radius: 5vw;
            cursor: pointer;
            display: block;
            height: 5vh;
            width: 2.5vw;
            &:hover {
                box-shadow: 0 0 6px #00fafd;
            }
        };
`;