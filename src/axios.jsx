import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL || 5173,
});

export default instance;
