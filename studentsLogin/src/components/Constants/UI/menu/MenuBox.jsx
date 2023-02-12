import { Divider, } from '@mui/material'
import React from 'react'
import { MenuItem, MenuBoxContainer, MenuCategory } from './menuBoxStyle.js'
import { useNavigate } from 'react-router-dom';

const MenuBox = () => {
	const navigate = useNavigate()


	
	return (
		<MenuBoxContainer>
			
			<MenuCategory onClick={() => navigate('/placement-drive')}>
				<MenuItem >PLACEMENT DRIVES</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory onClick={() => navigate('/profile')}>
				<MenuItem >MY RESUME</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory onClick={() => navigate('/my-application')}>
				<MenuItem >MY APPLICATION</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory onClick={() => navigate('/calendar')}>
				<MenuItem >CALENDAR</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory onClick={() => navigate('/results')}>
				<MenuItem >RESULTS</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory onClick={() => navigate('/experiences')}>
				<MenuItem >EXPERIENCES</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory onClick={() => navigate('/share-experience')}>
				<MenuItem >SHARE EXPERIENCE</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory onClick={() => navigate('/placement-history')}>
				<MenuItem >PLACEMENT HISTORY</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory onClick={() => navigate('/placement-support')}>
				<MenuItem >CONTACT PIC</MenuItem>
			</MenuCategory>
			
		</MenuBoxContainer>
	)
}

export default MenuBox