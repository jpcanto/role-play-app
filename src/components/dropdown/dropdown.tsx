import React, { useState, useEffect } from 'react';
import Messages from '../../data/messages.json';
import { DropdownBox, DropdownItem } from './styled';

interface DropdownProps {
    default: string,
    itens: Array<any>,
    fontColor?: string,
    fontFamily?: string
};

const Dropdown: React.FC<DropdownProps> = (props) => {

    const [isDropdownActive, setDropdownActive] = useState(false);
    const [isDropdownChildrenActive, setDropdownChildrenActive] = useState(false);
    const [fatherElement, setFatherElement] = useState({ 'children': [{ 'text': 'default' }] });

    function handleClick(children = false, element: any = {}) {
        if (children) {
            setDropdownChildrenActive(!isDropdownChildrenActive);
            setFatherElement(element);
            return;
        };
        if (isDropdownChildrenActive)
            setDropdownChildrenActive(!isDropdownChildrenActive);

        setDropdownActive(!isDropdownActive);
    }

    return (
        <>
            <p onClick={() => { handleClick() }}>{props.default}</p>
            {isDropdownActive ? <DropdownBox>
                {props.itens.map((item, index) => {
                    return (
                        item.type === 'dropdown' ?
                            <>
                                <DropdownItem key={index} onClick={() => { handleClick(true, item) }}>
                                    {item.title}
                                </DropdownItem>
                            </> :
                            <DropdownItem key={index}>{item.title}</DropdownItem>
                    );
                })}
            </DropdownBox> : null}
            {isDropdownChildrenActive ? <DropdownBox>
                {fatherElement.children.map((item, i) => {
                    return (
                        <DropdownItem key={i}>
                            {item.text}
                        </DropdownItem>
                    );
                })}
            </DropdownBox> : null}
        </>
    );
};

export default Dropdown;