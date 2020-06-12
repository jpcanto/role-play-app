import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import loginImage from '../../img/login.png';
import Messages from '../../data/messages.json';
import { Nav, Form, LoginForm, Line, Button } from './styled';
import APILogin from '../../services/loginApi';

const Login: React.FC = () => {

    interface Users {
        name: string,
        password: string,
        email?: string
    };

    const history = useHistory();
    const [userData, setUserData] = useState<Users>(
        { name: '', password: '' }
    );

    const [newUser, setNewUser] = useState(false);

    async function handleNewUser(ev: FormEvent) {
        if (!newUser) {
            setNewUser(!newUser);
            return;
        };
        setNewUser(!newUser);
    };

    async function handleSubmit(ev: FormEvent, mode: string) {
        ev.preventDefault();
        const data = userData;
        if (mode === 'create user') {
            await APILogin.post('users', data);
            alert(Messages.PORTUGUESE.messages.create_user);
            return;
        };
    };

    async function handleLogin(ev: FormEvent) {
        ev.preventDefault();
        if (userData.name === '' || userData.name === null) {
            return;
        };
        if (userData.password === '' || userData.password === null) {
            return;
        };

        await APILogin.get(`users/${userData.name}/${userData.password}`).then(response => {
            setUserData(response.data);
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            history.push('/');
        });
    };

    async function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
        const { name, value } = ev.target;

        setUserData({ ...userData, [name]: value });
    };

    return (
        <LoginForm image={loginImage}>
            <Nav><Link to="/main">Login</Link></Nav>
            <Form onSubmit={(ev: FormEvent) => { handleSubmit(ev, '') }}>
                <h2>Login</h2>
                <p>{Messages.ENGLISH.labels.userNameLabel} *</p>
                <input name="name" type="text" onChange={handleInputChange} />
                <p>Password: *</p>
                <input name="password" type="password" onChange={handleInputChange} />
                {
                    newUser === true ? (
                        <>
                            <p>Email: </p>
                            <input name="email" type="text" onChange={handleInputChange} />
                            <Line>
                                <Button type="submit" onClick={(ev: FormEvent) => { handleSubmit(ev, 'create user') }}>Submit user</Button>
                                <Button mode="cancel" onClick={handleNewUser}>Go back</Button>
                            </Line>
                        </>
                    ) : (
                            <>
                                <Line>
                                    <Button type="submit" onClick={handleLogin}>Login</Button>
                                    <Button onClick={handleNewUser}>Create user</Button>
                                </Line>
                            </>
                        )
                }
            </Form>
        </LoginForm >
    )
};

export default Login;