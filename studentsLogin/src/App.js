import React from 'react';
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



function App () {
	return (
		<BrowserRouter>
			<Header />
			<Box>
				<Routes>
					<Route path='/' element={<PlacementDrive />} />
					<Route path='/placement-drive' element={<PlacementDrive />} />
					<Route path='/experiences' element={<Experience />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/profile/#resume' element={<Profile />} />
					<Route path='/my-application' element={<MyApplication />} />
					<Route path='/calendar' element={<PlacementCalendar />} />
					<Route path='/results' element={<Result />} />
					<Route path='/results/selected-students/' element={<SelectedStudents />} />
					<Route path='/share-experience' element={<ShareExperience />} />
					<Route path='/placement-history' element={<UnderConstruction />} />
					<Route path='/placement-support' element={<ContactPIC />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</Box>
		</BrowserRouter >
	);
}

export default App;
