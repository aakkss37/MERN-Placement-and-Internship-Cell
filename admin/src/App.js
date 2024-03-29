import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet, } from 'react-router-dom';
import DetailedView from './components/DetailedView/DetailedView';
import EditDetail from './components/EditCompanyDetail/EditDetail';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navigation/Navbar'
import NewCompany from './components/NewCompany/NewCompany';
import PlacementData from './components/PlacementData/PlacementData';
import SuccessMsg from './components/ui/SuccessMsg';
import { DataContext } from './contextAPI/DataProvider';


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
	const context = useContext(DataContext);
	const isLogin = context.isLogin
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
				<Route path='/home/company-detail' element={<PrivateRoute isLogin={isLogin} />}>
					<Route path='/home/company-detail' element={<DetailedView />} />
				</Route>
				<Route path='/home/company-detail/:name/edit' element={<PrivateRoute isLogin={isLogin} />}>
					<Route path='/home/company-detail/:name/edit' element={<EditDetail />} />
				</Route>
			</Routes>
			<SuccessMsg 
				open={context.openPasswordChangeSucessSnakebar}
				onClose={()=> context.setOpenPasswordChangeSucessSnakebar(false)}
				message="Password changed successfully"
			/>
			<SuccessMsg 
				open={context.openLogoutSucessSnakebar}
				onClose={() => context.setOpenLogoutSucessSnakebar(false)}
				message="Logout successfully"
			/>
		</BrowserRouter>
	)
}

export default App
