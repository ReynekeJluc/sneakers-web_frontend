import axios from 'axios';

const con = 'https://sneakers-web-backend.onrender.com/';
const instance = axios.create({
	baseURL: con,
});

instance.interceptors.request.use(config => {
	config.headers.authorization = window.localStorage.getItem('token');
	return config;
});

export default instance;
