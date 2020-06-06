import axios from 'axios';

const APILogin = axios.create({
    baseURL: 'http://localhost:3333'
});

export default APILogin;