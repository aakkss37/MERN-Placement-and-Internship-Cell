import { Box, styled } from '@mui/material';


export const MainBoxContainer = styled(Box)(({ theme }) => ({
	flexGrow: 4,
	margin: '5px',
	border: '1px solid green',
	[theme.breakpoints.down('md')]: {

	}
}));