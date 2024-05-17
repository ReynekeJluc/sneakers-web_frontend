import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/';
import Header from './components/Header/';

import Home from './pages/Home';
import SneakersPage from './pages/SneakersPage';

import AddSneakers from './pages/AddSneakers/';
import Login from './pages/Login/';
import Register from './pages/Register/';

function App() {
	return (
		<div className='wrapper'>
			<Header></Header>
			<hr />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/sneakers/:id' element={<SneakersPage />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/register' element={<Register />}></Route>
				<Route path='/add-sneakers' element={<AddSneakers />}></Route>
			</Routes>
			<hr />
			<Footer></Footer>
		</div>
	);
}

export default App;
