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
		transition: '0.3s',
		':hover': {
			backgroundColor: '#367d433b'
		}
	},
	'&:nth-of-type(even)': {
		backgroundColor: '#d4e1ce29',
		transition: '0.3s',
		':hover': {
			backgroundColor: '#367d433b'
		}
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


export const ModelBody = styled(Box)(({ theme }) => ({
	
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 250,
	minHeight: 250,
	background: '#cadbc2',
	borderRadius: 5,
	display: 'flex',
	justifyContent: 'center',
	':focus': {
		outline: 'none',
	}
}));

export const ModelTextHead = styled(Box)(({ theme }) => ({
	fontSize: 16,
	fontWeight: 600,
	color: "green",
	margin: 20,
}));

export const ModelBodyItem = styled(Box)(({theme})=>({
	marginTop: 10,
	marginBottom: 10,
}))

export const ModelTextKey = styled(Box)(({ theme }) => ({
	fontSize: 12,
	color: "gray",
}))
export const ModelTextValue = styled(Box)(({ theme }) => ({
	fontSize: 14,
	fontWeight: 400,
}))

