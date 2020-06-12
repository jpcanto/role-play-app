import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import userImage from '../../img/user.png';
import Messages from '../../data/messages.json';
import { Navigation, User } from './styled';

const Nav: React.FC = () => {

    const history = useHistory();

    const [handleUser, setHandleUser] = useState(false);

    return (
        <Navigation>
            <Link to="/main">Home</Link>
            <Link to="/">Tables</Link>
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