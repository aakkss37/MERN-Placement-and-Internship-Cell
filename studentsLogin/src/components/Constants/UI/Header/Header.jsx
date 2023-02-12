import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../../asset/logo.png';

import { GeneralText, HeaderStyled, IconButtonStyled, LogoConatiner, LogoutBox, LogoutIcon, ProfileContainer, ToolbarStyled } from './headerStyle.js';





const header = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const navigate = useNavigate();


	return (
		<HeaderStyled>
			<ToolbarStyled>
				<IconButtonStyled
					size="large"
					edge="start"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon style={{ color: "rgb(202,219,194)" }} />
				</IconButtonStyled>
				<LogoConatiner 
					variant="h6"
					component="div" sx={{ flexGrow: 1 }} 
				>
					<img src={logo} alt="Logo" style={{ width: '55px' }} onClick={()=> navigate('/')}/>
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
export default header;