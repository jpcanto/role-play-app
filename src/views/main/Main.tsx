import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Messages from '../../data/messages.json';
import { } from './styled';

const Main: React.FC = () => {

    const history = useHistory();

    return (
        <>
            {
                localStorage.getItem('userInfo') ?
                    <>
                        <p>Olá</p>
                    </> : history.push('/login')
            }
        </>

    );
};

export default Main;