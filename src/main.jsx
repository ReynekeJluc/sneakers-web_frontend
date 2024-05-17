import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './assets/style.css';

import store from './redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</>
);
