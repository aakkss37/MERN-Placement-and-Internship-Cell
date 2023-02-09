import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../asset/logo.svg';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { GeneralText, HeaderStyled, IconButtonStyled, LogoConatiner, LogoutBox,  ProfileContainer, ToolbarStyled } from './headerStyle.js';
import { Typography } from '@mui/material';
 

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
				<ProfileContainer>
					<GeneralText style={{ marginRight: '40px', cursor: 'pointer' }}> Home</GeneralText>
					<GeneralText style={{ marginRight: '40px', cursor: 'pointer' }}> About</GeneralText>
					<GeneralText style={{ marginRight: '40px', cursor: 'pointer' }}> Applications</GeneralText>
				</ProfileContainer>
				<LogoutBox>
					<PowerSettingsNewIcon style={{fontSize: 20}}/>
					<Typography>&nbsp;Username</Typography>
				</LogoutBox>

			</ToolbarStyled>
		</HeaderStyled>
	)
}
export default header