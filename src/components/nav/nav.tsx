import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import userImage from '../../img/user.png';
import Messages from '../../data/messages.json';
import { Navigation, User } from './styled';
import Dropdown from '../dropdown/dropdown';

const Nav: React.FC = () => {

    const history = useHistory();

    const [handleUser, setHandleUser] = useState(false);

    const dropDownItens = [
        {
            'title': 'Language',
            'type': 'dropdown',
            'children': [
                { 'text': 'PORTUGUESE' },
                { 'text': 'ENGLISH' }
            ]
        },
        {
            'title': 'View mode',
            'type': 'default'
        }
    ];

    return (
        <Navigation>
            <Link to="/main">Home</Link>
            <Link to="/">Tables</Link>
            <Dropdown default='Settings' itens={dropDownItens} />
            <Link to="/">About</Link>
            <User image={userImage}>
                <div onClick={() => { setHandleUser(!handleUser) }}></div>
                {handleUser ?
                    <select>
                        <option value="manage">Manage account</option>
                        <option value="logout">Logout</option>
                    </select>
                    : null}
            </User>
        </Navigation>
    );
};

export default Nav;