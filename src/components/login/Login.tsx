import React, { useState, useEffect } from 'react';
import homeImg from '../../img/Home.jpg';

import { Nav, Login, Form, Button } from './styled';

export default function Main() {
    return (
        <Login imgUrl={homeImg}>
            <Nav><a>Login</a></Nav>
            <Form>
                <h2>Login</h2>
                <p>User: </p>
                <input type="text" />
                <p>Password: </p>
                <input type="text" />
                <Button type="submit">Submit</Button>
            </Form>
        </Login>
    )
}