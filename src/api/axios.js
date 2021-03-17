import axios from 'axios';

const baseUrl = 'https://reqres.in/api/users' ;
const instance = axios.create({
    baseURL : baseUrl
});

export default instance;