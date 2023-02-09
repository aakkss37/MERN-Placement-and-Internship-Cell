
import { styled, InputBase, Box, } from '@mui/material';


export const SearchContainer = styled(Box)(({ theme }) => ({
	borderRadius: '2px',
	marginright: '10px',
	marginleft: '10px',
	width: '25%',
	background: '#fff',
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

	}
}))

export const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: green;
`;
