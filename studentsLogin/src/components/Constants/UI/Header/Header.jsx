import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../../asset/logo.png';

import { GeneralText, HeaderStyled, LogoConatiner, LogoutBox, LogoutIcon, MenuButton, ProfileContainer, ToolbarStyled, DrawerStyled } from './headerStyle.js';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,  } from '@mui/material';



// DRAWER
const menuList = [
	{ text: 'PLACEMENT DRIVES', icon: '' },
	{ text: 'MY RESUME', icon: '' },
	{ text: 'MY APPLICATION', icon: ''},
	{ text: 'CALENDAR', icon: ''},
	{ text: 'RESULTS', icon: ''},
	{ text: 'EXPERIENCES', icon: '' },
	{ text: 'SHARE EXPERIENCE', icon: '' },
	{ text: 'PLACEMENT HISTORY', icon: '' },
	{ text: 'CONTACT PIC', icon: '' },
]








const Header = () => {

	const navigate = useNavigate();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	
	const drawerItems = () => {
		return (
			<Box
				style={{ width: 150,  marginTop: 65 }}
				role="presentation"
				onClick={()=> setIsDrawerOpen(false)}
				onKeyDown={()=> setIsDrawerOpen(false)}
			>
				<List >
					{menuList.map((item) => (
						<>
							<ListItem key={item.text} disablePadding >
								<ListItemButton style={{ padding: 15, fontSize: 12 }}>
									<ListItemIcon>
										icon
									</ListItemIcon>
									<ListItemText primary={item.text} fontSize='12px'/>
								</ListItemButton>
							</ListItem>
							<Divider />
						</>
					))}
				</List>
			</Box>

		)
	}

	return (
		<HeaderStyled>
			<ToolbarStyled>
				<MenuButton
					size="large"
					edge="start"
					aria-label="menu"
					sx={{ mr: 2 }}
					onClick={()=> setIsDrawerOpen(true)}
				>
					<MenuIcon style={{ color: "rgb(202,219,194)" }} />
				</MenuButton>
				<DrawerStyled 
					anchor="left"
					open={isDrawerOpen}
					onClose={()=> setIsDrawerOpen(false) }
				>
					{drawerItems()}
				</DrawerStyled>




				<LogoConatiner
					variant="h6"
					component="div" sx={{ flexGrow: 1 }}
				>
					<img src={logo} alt="Logo" style={{ width: '55px' }} onClick={() => navigate('/')} />
				</LogoConatiner>

				<ProfileContainer>
					<GeneralText style={{ marginRight: '40px', cursor: 'pointer' }} onClick={() => navigate('/')}> HOME</GeneralText>
					<GeneralText style={{ marginRight: '40px', cursor: 'pointer' }} onClick={() => navigate('/about')}> ABOUT</GeneralText>
					<GeneralText style={{ marginRight: '40px', cursor: 'pointer' }} onClick={() => navigate('/profile')}> PROFILE</GeneralText>
				</ProfileContainer>
				<LogoutBox onClick={() => navigate('/login')}>
					<LogoutIcon />
				</LogoutBox>

			</ToolbarStyled>
		</HeaderStyled>
	)
}
export default Header;