import React from 'react'
import { BrowserRouter, Routes, Route, Outlet, } from 'react-router-dom';

import './App.css'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navigation/Navbar'


const PrivateRoute = (props) => {
	return (
		props.isLogin
			?
			<>
				<Navbar />
				<Outlet />
			</>
			:
			<Login />
	)
}

const App = () => {
	// const [isLogin, setisLogin] = useState(true);
	const isLogin = true
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />

				<Route path='/home' element={<PrivateRoute isLogin={isLogin} />}>
					<Route path='/home' element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
