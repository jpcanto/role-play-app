import React, { useState, useEffect } from 'react';
import Messages from '../../data/messages.json';
import { DropdownBox, DropdownItem } from './styled';

interface DropdownProps {
    default: string,
    itens: Array<string>,
    fontColor?: string,
    fontFamily?: string
};

const Dropdown: React.FC<DropdownProps> = (props) => {

    const [isDropdownActive, setDropdownActive] = useState(false);

    function handleClick() {
        setDropdownActive(!isDropdownActive);
    }

    return (
        <>
            <p onClick={handleClick}>{props.default}</p>
            {isDropdownActive ? <DropdownBox>
                {props.itens.map((item, index) => {
                    return <DropdownItem key={index}>{item}</DropdownItem>
                })}
            </DropdownBox> : null}
        </>
    );
};

export default Dropdown;