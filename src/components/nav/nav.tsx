import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Messages from '../../data/messages.json';
import { Navigation } from './styled';

const Nav: React.FC = () => {

    const history = useHistory();

    return (
        <Navigation>
            <Link to="/main">Home</Link>
        </Navigation>
    );
};

export default Nav;