import React, { useState, useEffect } from 'react';
import homeImg from '../../img/Home.jpg';

import { Nav, Home } from './styled';

export default function Main() {
    return (
        <Home imgUrl={homeImg}>
            <Nav><a>Home</a></Nav>
        </Home>
    )
}