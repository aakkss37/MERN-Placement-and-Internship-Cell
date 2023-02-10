
import { styled, InputBase, Box, } from '@mui/material';


export const SearchContainer = styled(Box)(({ theme }) => ({
	borderBottom: '1px solid white',
	marginright: '10px',
	marginleft: '10px',
	width: '25%',
	display: 'flex',
	alignItems: 'center',
	paddingTop: '2px',
	[theme.breakpoints.down('md')]: {
		width: '50%',
		marginright: '15px',
	}
}))
export const InputSearchBase = styled(InputBase)(({ theme }) => ({
	width: '100%',
	paddingLeft: '10px',
	
	[theme.breakpoints.down('md')]: {
		'& > .MuiInputBase-input': {
			fontSize: 14,
		},
	},
	[theme.breakpoints.down('sm')]: {
		'& > .MuiInputBase-input': {
			fontSize: 12,
		},
	}
}))

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  padding: '5px',
  display: 'flex',
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	}
}))
