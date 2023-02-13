import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Constants/UI/Header/Header';
import Experience from './components/Experience/Experience';
import PlacementDrive from './components/PlavementDrive/PlacementDrive';
import Profile from './components/Profile/Profile';
import MyApplication from './components/MyApplication/MyApplication';

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
				</Routes>
			</Box>
		</BrowserRouter >
	);
}

export default App;
