
import { styled, InputBase, Box, } from '@mui/material';


export const SearchContainer = styled(Box)(({ theme }) => ({
	borderBottom: '1px solid #367D43',
	width: '35%',
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
	'& > .MuiInputBase-input': {
		fontSize: 18,
	},
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
}))
