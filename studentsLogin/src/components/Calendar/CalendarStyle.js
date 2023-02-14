import { Box, styled, } from '@mui/material';


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


export const CalendarBody =  styled(Box)(({theme})=>({
	marginTop: 25,
	border: '1px solid red',
	width: '65%',
	background: 'white',
	[theme.breakpoints.down('md')]: {
	width: '100%',
}
}))

export const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};