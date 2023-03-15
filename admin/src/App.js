import React from 'react'
import { BrowserRouter, Routes, Route, Outlet, } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navigation/Navbar'
import NewCompany from './components/NewCompany/NewCompany';
import PlacementData from './components/PlacementData/PlacementData';


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
				<Route path='/new-company' element={<PrivateRoute isLogin={isLogin} />}>
					<Route path='/new-company' element={<NewCompany />} />
				</Route>
				<Route path='/placement-data' element={<PrivateRoute isLogin={isLogin} />}>
					<Route path='/placement-data' element={<PlacementData />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
