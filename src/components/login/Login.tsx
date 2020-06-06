import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import homeImg from '../../img/Home.jpg';
import { Nav, Login, Form, Line, Button } from './styled';
import APILogin from '../../services/loginApi';

export default function Main() {

    // interface Users {
    //     name: string,
    //     password: string
    // }

    const [userData, setUserData] = useState({
        name: '', password: '', email: ''
    });

    const [newUSer, setNewUser] = useState(false);

    async function handleForm() {
        setNewUser(!newUSer);
    }

    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault();
        const data = userData;

        await APILogin.post('users', data);
        alert('Usuário cadastrado com sucesso!');
    };

    async function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
        const { name, value } = ev.target;

        setUserData({ ...userData, [name]: value });
    };

    return (
        <Login>
            <Nav><a>Login</a></Nav>
            <Form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <p>User Name: </p>
                <input name="name" type="text" onChange={handleInputChange} />
                <p>Password: </p>
                <input name="password" type="password" onChange={handleInputChange} />
                {
                    newUSer === true ? (
                        <>
                            <p>Email: </p>
                            <input name="email" type="text" onChange={handleInputChange} />
                            <Line>
                                <Button type="submit" onClick={handleForm}>Login</Button>
                                <Button type="submit" onClick={handleForm}>Submit user</Button>
                            </Line>
                        </>
                    ) : (
                            <>
                                <Line>
                                    <Button type="submit">Login</Button>
                                    <Button type="submit" onClick={handleForm}>Create user</Button>
                                </Line>
                            </>
                        )
                }
            </Form>
        </Login>
    )
}