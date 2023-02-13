import { Box, styled, Typography, } from '@mui/material';


export const MainConatiner = styled(Box)`
	margin-top: 65px;
`

export const DriveContainer = styled(Box)(({ theme }) => ({
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


export const Drives = styled(Box)(({ theme }) => ({
	flexGrow: 4,
	maxWidth: '75%',
	margin: '5px',
	// border: '1px solid green',
	[theme.breakpoints.down('md')]: {
		maxWidth: '100%',
	}
}));

export const CurretPath = styled(Typography)(({theme})=>({
	margin: '20px', color: 'gray', fontWeight: 600,
	[theme.breakpoints.down('sm')]: {
		fontSize: 14,
	}
}));