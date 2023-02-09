import { Box, styled } from '@mui/material';

export const MenuBoxContainer = styled(Box)(({ theme }) => ({
	position: 'fixed',
	top: 65,
	width: '13%',
	margin: '5px',
	border: '1px solid green',
	padding: '5px',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	}
}));