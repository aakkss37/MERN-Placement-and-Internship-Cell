import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Constants/UI/Header/Header';
import Home from './components/Home/Home';

function App () {
	return (
		<BrowserRouter>
			<Header />
			<Box>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Box>
		</BrowserRouter >
	);
}

export default App;
