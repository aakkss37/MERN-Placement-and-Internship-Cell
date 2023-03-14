import { styled, TableCell, tableCellClasses, TableRow, Typography } from "@mui/material";



export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#5badff5c',
		fontSize: 15,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: '#00000002',
		transition: '0.3s',
		':hover': {
			backgroundColor: '#3332321c'
		}
	},
	'&:nth-of-type(even)': {
		backgroundColor: '#00000008',
		transition: '0.3s',
		':hover': {
			backgroundColor: '#3332321c'
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

export const ActiveStatus = styled('span')(({theme})=>({
	width: '10px',
	height: '10px',
	borderRadius: '50%',
	background: 'green',
	display: 'flex',
	marginRight: '10px'
}))

export const Status = styled('div')(({ theme }) => ({
	display: 'flex',
	float: 'right',
	alignItems: 'center',
})) 