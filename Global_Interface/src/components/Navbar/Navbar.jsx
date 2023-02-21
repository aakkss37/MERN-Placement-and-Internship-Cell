import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Assets/logo.png'
// Import icons -> inbuilt in react
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BiLogIn } from 'react-icons/bi';
import NavbarMenu from './NavbarMenu';
const Navbar = () => {

	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<div className='navbar '>
			<div className='navbar-links'>
				<div className='navbar-links_logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='navbar-links_container'>
					<NavbarMenu />
				</div>
			</div>
			<div className='navbar-sign'>
				<a href='http://localhost:3000/'>
					Student Login
					<BiLogIn style={{color: '#fff', fontSize: 24}}/>
				</a>
			</div>

			{/* Navbar hamburger */}
			<div className='navbar-menu'>
				{
					toggleMenu
						?
						<RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
						:
						<RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
				}
				{
					toggleMenu
					&&
					(
						<div className='navbar-menu_container scale-up-center'>
							<NavbarMenu onClick={() => setToggleMenu(false)} />
							<div className='navbar-menu_container-links-sign'>
								<a href='http://localhost:3000/'>
									Student login
									<BiLogIn style={{ color: '#fff', fontSize: 24 }} />
								</a>
							</div>
						</div>

					)
				}
			</div>
		</div>
	)
}

export default Navbar 