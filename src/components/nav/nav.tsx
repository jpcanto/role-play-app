import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import userImage from '../../img/user.png';
import Messages from '../../data/messages.json';
import { Navigation, User } from './styled';

const Nav: React.FC = () => {

    const history = useHistory();

    return (
        <Navigation>
            <Link to="/main">Home</Link>
            <User image={userImage}>
                <div></div>
            </User>
        </Navigation>
    );
};

export default Nav;