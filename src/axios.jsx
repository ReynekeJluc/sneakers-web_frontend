import axios from 'axios';

const con = process.env.REACT_APP_API_URL;
const instance = axios.create({
	baseURL: con,
});

instance.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token');
	return config;
});

export default instance;
