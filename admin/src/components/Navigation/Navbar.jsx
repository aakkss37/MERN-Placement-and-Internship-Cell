import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'


const Navbar = () => {
	const navigate = useNavigate()
	return (
		<div className='navbar'>
			<div className='navbar_container' >
				<div className='navbar_logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='navbar_links'>
					<span onClick={()=> navigate('/home')}>Home</span>
					<span onClick={() => navigate('/new-company')}>New Company</span>
					<span onClick={() => navigate('/placement-data')}>Placement Data</span>
					<span onClick={() => navigate('/home')}>Students</span>
				</div>
				<div className='navbar_logout'>
					<span>Logout</span>
				</div>
			</div>
		</div>
	)
}

export default Navbar