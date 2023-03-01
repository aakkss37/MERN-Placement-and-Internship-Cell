import React, { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet, } from 'react-router-dom';
import './App.css';
import Header from './components/Constants/UI/Header/Header';
import Experience from './components/Experience/Experience';
import PlacementDrive from './components/PlavementDrive/PlacementDrive';
import Profile from './components/Profile/Profile';
import MyApplication from './components/MyApplication/MyApplication';
import Error404 from './components/Constants/UI/Error404/Error404';
import UnderConstruction from './components/Constants/UI/UnderConstruction/UnderConstruction';
import PlacementCalendar from './components/Calendar/Calendar';
import Result from './components/Results/Result';
import SelectedStudents from './components/Results-selectedStudents/SelectedStudents';
import ShareExperience from './components/ShareExperience/ShareExperience';
import ContactPIC from './components/ContactPIC/ContactPIC';
import Login from './LoginPage/Login';

const PrivateRoute = (props) => (
	props.isUser
		?
		<>
			<Header />
			<Outlet />
		</>
		:
		<Navigate replace to='/' />
)

function App () {

	const [user, setUser] = useState();

	return (
		<BrowserRouter>
			
			<Box>
				<Routes>
					<Route path='/' element={<Login setUser={setUser} />} />

					<Route path='/placement-drive' element={<PrivateRoute isUser={user} />}>
						<Route path='/placement-drive' element={<PlacementDrive />} />
					</Route>
					<Route path='/experiences' element={<PrivateRoute isUser={user} />}>
						<Route path='/experiences' element={<Experience />} />
					</Route>
					<Route path='/profile' element={<PrivateRoute isUser={user} />}>
						<Route path='/profile' element={<Profile />} />
					</Route>
					<Route path='/profile/#resume' element={<PrivateRoute isUser={user} />}>
						<Route path='/profile/#resume' element={<Profile />} />
					</Route>
					<Route path='/my-application' element={<PrivateRoute isUser={user} />}>
						<Route path='/my-application' element={<MyApplication />} />
					</Route>
					<Route path='/calendar' element={<PrivateRoute isUser={user} />}>
						<Route path='/calendar' element={<PlacementCalendar />} />
					</Route>
					<Route path='/results' element={<PrivateRoute isUser={user} />}>
						<Route path='/results' element={<Result />} />
					</Route>
					<Route path='/results/selected-students' element={<PrivateRoute isUser={user} />}>
						<Route path='/results/selected-students' element={<SelectedStudents />} />
					</Route>
					<Route path='/share-experience' element={<PrivateRoute isUser={user} />}>
						<Route path='/share-experience' element={<ShareExperience />} />
					</Route>
					<Route path='/placement-history' element={<PrivateRoute isUser={user} />}>
						<Route path='/placement-history' element={<UnderConstruction />} />
					</Route>
					<Route path='/placement-support' element={<PrivateRoute isUser={user} />}>
						<Route path='/placement-support' element={<ContactPIC />} />
					</Route>


					<Route path='*' element={<Error404 />} />
					
				</Routes>
			</Box>
		</BrowserRouter >
	);
}

export default App;
