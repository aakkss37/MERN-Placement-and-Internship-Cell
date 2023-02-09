import { Box, styled } from '@mui/material';

export const HomeConatiner = styled(Box)`
	margin-top: 65px;
`

export const Container = styled(Box)(({ theme }) => ({
	width: '75%',
	margin: '0 auto',
	border: '1px solid red',
	minHeight: 'fit-content',
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		width: '98%',
	}
}));

export const LeftBoxDummy = styled(Box)(({ theme }) => ({
	flexGrow: 1,
	margin: '5px',
	border: '1px solid green',
	alignSelf: 'flex-start',
	padding: '5px',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	}
}));

export const LeftBox= styled(Box)(({ theme }) => ({
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

export const MainBox = styled(Box)(({ theme }) => ({
	flexGrow: 4,
	margin: '5px',
	border: '1px solid green',
	[theme.breakpoints.down('md')]: {
		
	}
}));


