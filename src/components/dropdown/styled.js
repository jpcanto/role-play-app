import styled from 'styled-components';
import { variables } from '../../styles/variables';
const fonts = variables.fonts;
const colors = variables.colors;

export const DropdownBox = styled.div`
    background: ${colors.greyScale02};
    border: 1px solid ${colors.greyScale01};
    box-shadow: 0 0 6px ${colors.greyScale01};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    top: 1vh;
`;

export const DropdownItem = styled.p`
    margin: 0 !important;
    padding: 1vh 1vw !important;
    width: -webkit-fill-available !important;
    &:not(:last-of-type) {
        border-bottom: 1px solid ${colors.greyScale01};
    };
`;