import { Box, Button, styled, Typography } from '@mui/material';



export const GeneralText = styled(Typography)(({ theme }) => ({
	fontSize: 14,
	textAlign: 'justify',
	fontFamily: 'Ubuntu',
	[theme.breakpoints.down('sm')]: {
		fontSize: 12,
	}
}));

export const CompanyName = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	fontSize: 18,
	color: '#367d43',
	[theme.breakpoints.down('md')]: {
		fontSize: 16,
	}
}));

export const OpeningDate = styled(Typography)(({ theme }) => ({
	fontSize: 14,
	[theme.breakpoints.down('md')]: {
		fontSize: 12,
	}
}));

export const ApplyButton = styled(Button)(({ theme }) => ({
	paddingLeft: 15,
	paddingRight: 15,
	color: '#cadbc2',
	background: '#367d43',
	fontWeight: 600,
	transition: 0.3,
	':hover': {
		color: '#367d43',
		background: '#cadbc2',
	},
	[theme.breakpoints.down('md')]: {
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 12,
	}
}))

export const DetailHead = styled(Box)(({ theme }) => ({
	fontWeight: 600,
	lineHeight: 2,
	color: '#626262',
	[theme.breakpoints.down('sm')]: {
		fontSize: 14,
	}
}))