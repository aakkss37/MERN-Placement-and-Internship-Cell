import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Constants/UI/Header/Header';
import Experience from './components/Experience/Experience';
import PlacementDrive from './components/PlavementDrive/PlacementDrive';
import Profile from './components/Profile/Profile';

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
				</Routes>
			</Box>
		</BrowserRouter >
	);
}

export default App;
