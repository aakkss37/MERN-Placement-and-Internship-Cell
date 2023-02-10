import { Box, styled, Typography } from '@mui/material';

export const MenuBoxContainer = styled(Box)(({ theme }) => ({
	position: 'fixed',
	top: 65,
	width: '15%',
	margin: '5px',
	// border: '1px solid green',
	borderRadius: 5,
	padding: '5px',
	background: '#cadbc2',
	boxShadow: '1px 1px 5px 4px rgb(0, 0, 0, 0.3)',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	}
}));

export const MenuCategory = styled(Box)(({ theme }) => ({

	margin: '5px',
	padding: '5px',
	[theme.breakpoints.down('md')]: {

	}
}));


export const  MenuItem= styled(Typography)`
	font-size: 12px;
	font-weight: 600;
	color: #367D43;
	font-family: Ubuntu;
	:hover {
		cursor: pointer;
		color: #fff;
	};
`