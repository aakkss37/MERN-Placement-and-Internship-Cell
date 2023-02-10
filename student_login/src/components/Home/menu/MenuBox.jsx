import { Divider, } from '@mui/material'
import React from 'react'
import { CategoryHead, MenuBoxContainer, MenuCategory, MenuItem } from './menuBox.js'

const MenuBox = () => {
	return (
		<MenuBoxContainer>
			
			<MenuCategory>
				<CategoryHead >Menu</CategoryHead>
				<MenuItem >Menu Item 1</MenuItem>
				<MenuItem >Menu Item 2</MenuItem>
				<MenuItem >Menu Item 3</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory>
				<CategoryHead >Menu</CategoryHead>
				<MenuItem >Menu Item 1</MenuItem>
				<MenuItem >Menu Item 2</MenuItem>
				<MenuItem >Menu Item 3</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory>
				<CategoryHead >Menu</CategoryHead>
				<MenuItem >Menu Item 1</MenuItem>
				<MenuItem >Menu Item 2</MenuItem>
				<MenuItem >Menu Item 3</MenuItem>
			</MenuCategory>
			<Divider />
			<MenuCategory>
				<CategoryHead >Menu</CategoryHead>
				<MenuItem >Menu Item 1</MenuItem>
				<MenuItem >Menu Item 2</MenuItem>
				<MenuItem >Menu Item 3</MenuItem>
			</MenuCategory>
			
		</MenuBoxContainer>
	)
}

export default MenuBox