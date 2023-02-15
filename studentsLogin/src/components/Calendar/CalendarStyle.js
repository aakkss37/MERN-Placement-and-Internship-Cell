import { Box, styled, Typography, } from '@mui/material';


export const MainConatiner = styled(Box)`
	margin-top: 65px;
`

export const CalendarContainer = styled(Box)(({ theme }) => ({
	width: '75%',
	margin: '0 auto',
	// border: '1px solid red',
	minHeight: 'fit-content',
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		width: '98%',
	}
}));

export const LeftBoxDummy = styled(Box)(({ theme }) => ({
	flexGrow: 1,
	width: '13%',
	margin: '10px',
	// border: '1px solid green',
	alignSelf: 'flex-start',
	padding: '5px',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	}
}));

export const CurretPath = styled(Typography)(({ theme }) => ({
	margin: '20px', color: 'gray', fontWeight: 600,
	[theme.breakpoints.down('sm')]: {
		fontSize: 14,
	}
}));


export const CalendarBody =  styled(Box)(({theme})=>({
	marginTop: 25,
	// border: '1px solid red',
	width: '70%',
	background: 'white',
	boxShadow: '1px 1px 5px 4px rgb(0, 0, 0, 0.3)',
	[theme.breakpoints.down('md')]: {
	width: '100%',
}
}))

export const ModelBody = styled(Box)(({ theme }) => ({

	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 250,
	minHeight: 250,
	background: '#cadbc2',
	borderRadius: 5,
	padding: '10px',
	':focus': {
		outline: 'none',
	}
}));