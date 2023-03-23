import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import { Menu, MenuItem } from '@mui/material';
import ChangePassword from './Modal/ChangePassword';


const Navbar = () => {
	const navigate = useNavigate()
	const [openModal, setOpenModal] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className='navbar'>
			<ChangePassword
				open={openModal}
				onClose={() => setOpenModal(false)}
			/>
			<div className='navbar_container' >
				<div className='navbar_logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='navbar_links'>
					<span onClick={() => navigate('/home')}>Home</span>
					<span onClick={() => navigate('/new-company')}>New Company</span>
					<span onClick={() => navigate('/placement-data')}>Placement Data</span>
					<span onClick={() => navigate('/home')}>Students</span>
				</div>
				<div className='navbar_logout'>
					<span>Logout</span>
				</div>
				<div>
					<button
						className='setting_icon_button'
						id="basic-button"
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						<SettingsIcon sx={{ color: 'white' }} />
					</button>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<MenuItem onClick={handleClose} >Profile</MenuItem>
						<MenuItem onClick={handleClose} >My account</MenuItem>
						<MenuItem onClick={handleClose} >Logout</MenuItem>
						<MenuItem onClick={() => {setOpenModal(true); handleClose()}} >Change Password</MenuItem>
					</Menu>
				</div>
			</div>
		</div>
	)
}

export default Navbar