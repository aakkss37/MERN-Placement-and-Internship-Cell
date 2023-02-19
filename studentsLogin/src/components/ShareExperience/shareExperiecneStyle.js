import { Box, styled, TextField, } from '@mui/material';


export const MainConatiner = styled(Box)`
	margin-top: 65px;
`

export const ShareExperienceConainer = styled(Box)(({ theme }) => ({
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


export const MainCardContainer = styled(Box)(({ theme }) => ({
	flexGrow: 4,
	maxWidth: '75%',
	margin: '5px',
	marginTop: 20,
	// border: '1px solid green',
	[theme.breakpoints.down('md')]: {
		maxWidth: '100%',
	}
}));

export const CompanyName = styled(TextField)(({ theme }) => ({
	marginBottom: 20,
	'& label.Mui-focused': {
		color: 'green',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'green',
	},
}));

export const ExperienceType = styled('select')(({ theme }) => ({
	width: '100%',
	height: 40,
	borderRadius: 5,
	padding: 5,
	borderColor: 'gray',
	fontSize: '16px',
	outline: 0,
	border: '1cdpx solid #000000',
	background: 'rgb(224, 230, 225)',
	color: '#7b7b7b',
	appearance: 'none',
	
}));

// Not working =================>
export const Option = styled('option')`
	& :hover {
		background-color: red;
  	}

`


export const ExperienceTextField = styled(TextField)(({ theme }) => ({
	marginTop: 20,
	'& label.Mui-focused': {
		color: 'green',
	},
	'& .MuiOutlinedInput-root': {
		// '& fieldset': {
		// 	borderColor: 'red',
		// },
		// '&:hover fieldset': {
		// 	borderColor: 'yellow',
		// },
		'&.Mui-focused fieldset': {
			borderColor: 'green',
		},
	},
}));

