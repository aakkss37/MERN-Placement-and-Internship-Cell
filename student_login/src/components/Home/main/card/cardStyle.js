import { styled, Box, Divider, Typography } from '@mui/material';


export const CardContainer = styled(Box)(({theme})=>({
	padding: 10,
	background: '#fff',
	marginBottom: 20,
	borderRadius: 5,
	border: '1px solid #a5a2a2',
	boxShadow: '1px 1px 5px 1px rgb(0, 0, 0, 0.2)',
	
}));



/* HEADER */

export const CardHead = styled(Box)(({theme})=>({
	display: 'flex',
	marginBottom: 5,
}));

export const UserImg = styled(Box)(({theme})=>({
	alignSelf: 'center',
}));

export const UserDetail = styled(Box)(({theme})=>({
	alignSelf: 'center',
	marginLeft: 10,
}));


export const ConpanyName = styled(Typography)(({theme})=>({
	fontWeight: 700,
	fontFamily: 'Ubuntu',
	color: '#367D43',
	[theme.breakpoints.down('sm')]: {
		fontSize: 14,
	}
}));


export const Author = styled(Typography)(({theme})=>({
	fontFamily: 'Ubuntu',
	fontSize: 13,
	color: '#a5a2a2',
	[theme.breakpoints.down('sm')]: {
		fontSize: 11,
	}
}));



/* BODY */

export const CardBody = styled(Box)(({theme})=>({
	
}));

export const Experience = styled(Box)(({theme})=>({
	fontFamily: 'Ubuntu',
	textAlign: 'justify',
	fontSize: 15,
	[theme.breakpoints.down('sm')]: {
		fontSize: 13,
	}
}));

