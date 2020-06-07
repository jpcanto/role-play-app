import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import loginImage from '../../img/login.png';
import Messages from '../../data/messages.json';
import { Nav, Login, Form, Line, Button } from './styled';
import APILogin from '../../services/loginApi';

export default function Main() {

    interface Users {
        name: string,
        password: string,
        email: string
    }

    const history = useHistory();
    const [userData, setUserData] = useState<Users>({
        name: '', password: '', email: ''
    });

    const [newUser, setNewUser] = useState(false);

    async function handleNewUser(ev: FormEvent) {
        if (!newUser) {
            setNewUser(!newUser);
            return;
        };
        setNewUser(!newUser);
    };

    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault();
        const data = userData;

        await APILogin.post('users', data);
        alert(Messages.PORTUGUESE.messages.create_user);
        // history.push('/');
    };

    async function handleLogin(ev: FormEvent) {
        ev.preventDefault();
        const data = Object(userData);

        console.log(await APILogin.get('users', data))
        // history.push('/');
    };

    async function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
        const { name, value } = ev.target;

        setUserData({ ...userData, [name]: value });
    };

    return (
        <Login image={loginImage}>
            <Nav><a>Login</a></Nav>
            <Form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <p>User Name: </p>
                <input name="name" type="text" onChange={handleInputChange} />
                <p>Password: </p>
                <input name="password" type="password" onChange={handleInputChange} />
                {
                    newUser === true ? (
                        <>
                            <p>Email: </p>
                            <input name="email" type="text" onChange={handleInputChange} />
                            <Line>
                                <Button type="submit" onClick={handleSubmit}>Submit user</Button>
                                <Button type="submit" mode="cancel" onClick={handleNewUser}>Go back</Button>
                            </Line>
                        </>
                    ) : (
                            <>
                                <Line>
                                    <Button type="submit" onClick={handleLogin}>Login</Button>
                                    <Button type="submit" onClick={handleNewUser}>Create user</Button>
                                </Line>
                            </>
                        )
                }
            </Form>
        </Login >
    )
}