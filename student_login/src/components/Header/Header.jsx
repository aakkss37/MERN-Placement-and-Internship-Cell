import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../asset/logo.svg';

import { GeneralText, HeaderStyled, IconButtonStyled, LogoConatiner, LogoutBox,  LogoutIcon,  ProfileContainer, ToolbarStyled } from './headerStyle.js';
import { Typography } from '@mui/material';
import Search from './Search';
 

const header = () => {
	return (
		<HeaderStyled>
			<ToolbarStyled>
				<IconButtonStyled
					size="large"
					edge="start"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon style={{color: "#367D43"}} />
				</IconButtonStyled>
				<LogoConatiner variant="h6"
					component="div" sx={{ flexGrow: 1 }} >
					<img src={logo} alt="Logo" style={{ width: '45px' }} />
				</LogoConatiner>
				
				<Search/>

				<ProfileContainer>
					<GeneralText style={{ marginRight: '40px', cursor: 'pointer' }}> Home</GeneralText>
					<GeneralText style={{ marginRight: '40px', cursor: 'pointer' }}> About</GeneralText>
					<GeneralText style={{ marginRight: '40px', cursor: 'pointer' }}> Applications</GeneralText>
				</ProfileContainer>
				<LogoutBox>
					<LogoutIcon />
					<Typography>&nbsp;Username</Typography>
				</LogoutBox>

			</ToolbarStyled>
		</HeaderStyled>
	)
}
export default header