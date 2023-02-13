import { Box, styled, TableCell, tableCellClasses, TableRow, Typography } from "@mui/material";



export const MainConatiner = styled(Box)`
	margin-top: 85px;
`;

export const MyApplicationContainer = styled(Box)(({ theme }) => ({
	width: '75%',
	margin: '0 auto',
	// border: '1px solid red',
	minHeight: 'fit-content',
	[theme.breakpoints.down('md')]: {
		width: '98%',
	}
}));





export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#cbddc3ad',
		color: '#367D43',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: 'white',
	},
	'&:nth-of-type(even)': {
		backgroundColor: '#d4e1ce29',
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));



export const CurretPath = styled(Typography)(({ theme }) => ({
	margin: '20px', color: 'gray', fontWeight: 600,
	[theme.breakpoints.down('sm')]: {
		fontSize: 14,
	}
}));