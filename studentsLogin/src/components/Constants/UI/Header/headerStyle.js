import { AppBar, Toolbar, Typography, IconButton, styled, Box, Drawer, ListItemText, } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



export const GeneralText = styled(Typography)`
	font-family: Ubuntu ;
	font-weight: 700;
	font-size: 16px;
	color: rgb(202,219,194);
	transition: 0.3s;
	:hover {
		color: #015411;
	}
`

export const HeaderStyled = styled(AppBar)`
	background: #CADBC2;
	width: 100%;
	justify-content: center;
	position: "static";
	height: 60px;
	background: #367D43;
`;

export const ToolbarStyled = styled(Toolbar)(({theme})=>({
	width: '75%', 
	margin: '0 auto',
	fontSize: '18px',
	height: '55px',
	[theme.breakpoints.down('md')]: {
		width: '98%', 
	}
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.down('md')]: {
		display: 'block',
	}
}));

export const LogoConatiner = styled(Typography)`
	margin-top: 15px;
`;

export const ProfileContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
    justifyContent: 'flex-end', 
    alignItems: 'center', 
	marginLeft: '10px',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	}
}));

export const LogoutBox = styled('div')(({ theme }) => ({
	display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
	marginRight: '40px',
	color: 'rgb(202,219,194);',
	transition: '0.3s',
	'& :hover': {
		cursor: 'pointer',
		color: '#015411',
	},
	[theme.breakpoints.down('md')]: {
	'& > p': {
		display: 'none',
	}
}
}));

export const LogoutIcon = styled(PowerSettingsNewIcon)(({ theme }) => ({
	fontSize: 22,
	[theme.breakpoints.down('md')]: {
		marginLeft: '10px',
	}
}));


// DRAWER
export const DrawerStyled = styled(Drawer)(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		'& > .css-1160xiw-MuiPaper-root-MuiDrawer-paper': {
			background: '#cadbc2',
			width: 250,
			marginTop: '60px',
			height: 'calc(100% - 390px)',
		}
	}
}));


export const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
	color: '#367d43',
	'& > .css-10hburv-MuiTypography-root': {
		fontSize: 12,
		fontWeight: 600,
	},
}));

