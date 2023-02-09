import { Box, styled } from '@mui/material';

export const HomeConatiner = styled(Box)`
	margin-top: 65px;
`

export const Container = styled(Box)(({ theme }) => ({
	width: '75%',
	margin: '0 auto',
	border: '1px solid red',
	minHeight: 'fit-content',
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		width: '98%',
	}
}));

export const LeftBox = styled(Box)(({ theme }) => ({

	[theme.breakpoints.down('md')]: {
		
	}
}));
export const MainBox = styled(Box)(({ theme }) => ({

	[theme.breakpoints.down('md')]: {
		
	}
}));
export const RightBox = styled(Box)(({ theme }) => ({

	[theme.breakpoints.down('md')]: {
		
	}
}));

