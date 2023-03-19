import React, { useContext } from 'react'
import { DataContext } from '../../../contextAPI/DataProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const PlacedStudent = () => {
	const context = useContext(DataContext);

	const rows = context.studentsPlaced
	console.log(context.studentsPlaced)

	return (
		<>
			<Typography sx={{ fontSize: '26px', margin: "20px", marginLeft: '5%', fontWeight: 600, color: '#1976d2' }}>Placed Student</Typography>
			<TableContainer component={Paper} sx={{ height: 300, width: '90%', marginLeft: '5%', marginBottom: '2rem'}}>
				<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell >Roll No.</TableCell>
							<TableCell >Name</TableCell>
							<TableCell align="right">Department</TableCell>
							<TableCell align="right">CGPA</TableCell>
							<TableCell align="right">Phone</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.id}
								</TableCell>
								<TableCell >{row.Name}</TableCell>
								<TableCell align="right">{row.Department}</TableCell>
								<TableCell align="right">{row.CGPA}</TableCell>
								<TableCell align="right">{row.phone}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default PlacedStudent