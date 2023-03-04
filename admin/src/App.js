import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet, } from 'react-router-dom';

import './App.css'
import Home from './components/Home/Home';
import Navbar from './components/Navigation/Navbar'


const App = () => {
  return (
	<BrowserRouter>
		<Navbar/>
		<Routes>
			<Route path='/' element={<Home/>} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
