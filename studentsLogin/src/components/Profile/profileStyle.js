import { Box, styled, Typography } from "@mui/material";


export const MainConatiner = styled(Box)`
	margin-top: 65px;
`

export const ProfileConatiner = styled(Box)(({ theme }) => ({
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
	maxWidth: '30%',
	margin: '5px',
	// border: '1px solid green',
	alignSelf: 'flex-start',
	padding: '5px',
	[theme.breakpoints.down('md')]: {
		maxWidth: '7%',
	},
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	}
}));


export const ProfileBox = styled(Box)(({ theme }) => ({
	flexGrow: 4,
	maxWidth: '50%',
	margin: '5px',
	// border: '1px solid green',
	marginBottom: 20,
	borderRadius: 5,
	boxShadow: '1px 1px 5px 1px rgb(0, 0, 0, 0.2)',
	[theme.breakpoints.down('md')]: {
		maxWidth: '75%',
	},
	[theme.breakpoints.down('sm')]: {
		maxWidth: '100%',
	}
}));

export const ImageBox = styled(Box)(({theme})=> ({
	margin: 0,
	padding: 0,
	width: '100%',
	background: '#cadbc2',
	height: 200,
	display: 'flex',
	justifyContent: "center",
	alignItems: "center",
}))


export  const ProfileBody = styled(Box)(({theme})=>({
	padding: 10,
}))
export  const PersonalDetail = styled(Box)(({theme})=>({
	
}))
export  const CollegeDetail = styled(Box)(({theme})=>({

}))

export const InfoKey = styled(Typography)(({theme})=> ({
	fontSize: 14,
	color: "gray",
	[theme.breakpoints.down('sm')]: {
		fontSize: 12
	}
}))
export const InfoValue = styled(Typography)(({theme})=> ({
	fontSize: 16,
	marginBottom: 10,
	padding: 4,
	[theme.breakpoints.down('sm')]: {
		fontSize: 14
	}
}))

export const Email = styled(Typography)`
	overflow-x: scroll;
	&::-webkit-scrollbar {
		width: 4;
		background: transparent;
	}
`