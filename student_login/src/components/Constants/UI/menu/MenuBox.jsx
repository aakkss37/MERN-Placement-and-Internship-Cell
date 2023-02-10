import { Divider, } from '@mui/material'
import React from 'react'
import { MenuItem, MenuBoxContainer, MenuCategory } from './menuBoxStyle.js'

const MenuBox = () => {
	return (
		<MenuBoxContainer>
			
			<MenuCategory>
				<MenuItem >PLACEMENT DRIVES</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory>
				<MenuItem >MY APPLICATION</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory>
				<MenuItem >CALANDER</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory>
				<MenuItem >SHARE EXPERIENCE</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory>
				<MenuItem >PLACEMENT HISTORY</MenuItem>
			</MenuCategory>
			
		</MenuBoxContainer>
	)
}

export default MenuBox