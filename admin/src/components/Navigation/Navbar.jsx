import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
	<div className='navbar'>
		<div className='navbar_container' >
			<div className='navbar_logo'>
				  <img src={logo} alt='logo' />
			</div>		
			<div className='navbar_links'>
				<span>Home</span>
				<span>xyz</span>
				<span>xyz</span>
			</div>
			  <div className='navbar_logout'>
				<span>Logout</span>
			</div>
		</div>
	</div>
  )
}

export default Navbar