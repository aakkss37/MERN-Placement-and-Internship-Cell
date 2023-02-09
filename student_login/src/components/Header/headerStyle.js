import { AppBar, Toolbar, Typography, IconButton, styled, Box } from '@mui/material';



export const GeneralText = styled(Typography)`
	font-family: Ubuntu ;
	font-size: 16px;
	font-weight: 700;
	:hover {
		text-decoration: underline;
		color: #367D43
	}
`

export const HeaderStyled = styled(AppBar)`
	background: #CADBC2;
	width: 100%;
	justify-content: center;
	position: "static";
	height: 55px;
`;

export const ToolbarStyled = styled(Toolbar)(({theme})=>({
	width: '75%', 
	margin: '0 auto',
	fontSize: '18px',
	height: '55px',
	[theme.breakpoints.down('sm')]: {
		width: '98%', 
	}
}));

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.down('sm')]: {
		display: 'block',
	}
}));

export const LogoConatiner = styled(Typography)`
	margin-top: 5px;
`;
export const ProfileContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
    justifyContent: 'flex-end', 
    alignItems: 'center', 
	marginLeft: '10px',
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	}
}));

export const LogoutBox = styled('div')(({ theme }) => ({
	display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
	color: '#367D43',
	marginRight: '15px',
	'& :hover': {
		cursor: 'pointer',
	},
	[theme.breakpoints.down('sm')]: {
	'& > p': {
		display: 'none',
	}
}
}));


