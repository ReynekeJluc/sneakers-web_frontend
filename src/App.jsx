import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { fetchAuthMe } from './redux/slices/auth.jsx';

import Footer from './components/Footer/';
import Header from './components/Header/';

import Admin from './pages/Admin';
import Home from './pages/Home';
import SneakersPage from './pages/SneakersPage';

import AddSneakers from './pages/AddSneakers/';
import BrandPage from './pages/BrandPage/index.jsx';
import Login from './pages/Login/';
import Register from './pages/Register/';

function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<div className='wrapper'>
			<Header></Header>
			<hr />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/admin' element={<Admin />}></Route>
				<Route path='/sneakers/:id' element={<SneakersPage />}></Route>
				<Route path='/sneakers/:id/edit' element={<AddSneakers />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/register' element={<Register />}></Route>
				<Route path='/add-sneakers' element={<AddSneakers />}></Route>
				<Route path='/brand/:id' element={<BrandPage />}></Route>
			</Routes>
			<hr />
			<Footer></Footer>
		</div>
	);
}

export default App;
