import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../../asset/logo.png';

import { GeneralText, HeaderStyled, LogoConatiner, LogoutBox, LogoutIcon, MenuButton, ProfileContainer, ToolbarStyled, DrawerStyled, ListItemTextStyled } from './headerStyle.js';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, } from '@mui/material';


import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded'
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';


// DRAWER
const menuList = [
	{ text: 'PLACEMENT DRIVES', icon: <SchoolRoundedIcon style={{ color: '#367d43' }} />, route: '/placement-drive' },
	{ text: 'MY RESUME', icon: <ArticleRoundedIcon style={{ color: '#367d43' }} />, route: '/profile/#resume' },
	{ text: 'MY APPLICATION', icon: <LinkRoundedIcon style={{ color: '#367d43' }} />, route: '/my-application'  },
	{ text: 'CALENDAR', icon: <DateRangeRoundedIcon style={{ color: '#367d43' }} />, route: '/calendar'  },
	{ text: 'RESULTS', icon: <LocalFireDepartmentRoundedIcon style={{ color: '#367d43' }} />, route: '/results'  },
	{ text: 'EXPERIENCES', icon: <AttachFileRoundedIcon style={{ color: '#367d43' }} />, route: '/experiences'  },
	{ text: 'SHARE EXPERIENCE', icon: <EditRoundedIcon style={{ color: '#367d43' }} />, route: '/share-experience'  },
	{ text: 'PLACEMENT HISTORY', icon: <RestoreRoundedIcon style={{ color: '#367d43' }} />, route: '/placement-history'  },
	{ text: 'CONTACT PIC', icon: <ContactSupportRoundedIcon style={{ color: '#367d43' }} />, route: '/contact-placement-and-internship-cell' }
]




const Header = () => {

	const navigate = useNavigate();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const drawerItems = () => {
		return (
			<Box
				role="presentation"
				onClick={() => setIsDrawerOpen(false)}
				onKeyDown={() => setIsDrawerOpen(false)}
			>
				<List >
					{menuList.map((item, index) => (
						<>
							<ListItem key={item.text} disablePadding >
								<ListItemButton style={{ padding: 15, fontSize: 12 }} onClick={()=> navigate(item.route)}>
									<ListItemIcon>
										{item.icon}
									</ListItemIcon>
									<ListItemTextStyled primary={item.text} />
								</ListItemButton>
							</ListItem>
							{index < menuList.length - 1 && <Divider />}
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
					onClick={() => setIsDrawerOpen(true)}
				>
					<MenuIcon style={{ color: "rgb(202,219,194)" }} />
				</MenuButton>
				<DrawerStyled
					anchor="right"
					open={isDrawerOpen}
					onClose={() => setIsDrawerOpen(false)}
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