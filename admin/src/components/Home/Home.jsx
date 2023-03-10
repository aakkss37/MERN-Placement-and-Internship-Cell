import React from 'react';
import './home.css'
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, } from '@mui/material';
import { ActiveStatus, CurretPath, Status, StyledTableCell, StyledTableRow } from './homeStyle.js'




const companyData = [
	{ id: "1", companyName: 'Google', date: '12 Nov 2022', status: 'Active', },
	{ id: "2", companyName: 'Netflix', date: '12 Dec 2022', status: 'Active', },
	{ id: "3", companyName: 'Microsoft', date: '11 Oct 2022', status: 'completed', },
	{ id: "4", companyName: 'Adobe', date: '27 Nov 2022', status: 'completed', },
	{ id: "5", companyName: 'Starlink', date: '17 Dec 2022', status: 'completed', },
	{ id: "6", companyName: 'Phonepe', date: '22 Jan 2023', status: 'completed', },
]

const Home = () => {

	return (
		<div className='home'>
			<div className='homa_container'>
				<CurretPath >Company List</CurretPath>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow >
								<StyledTableCell style={{ fontWeight: 600 }}>S No.</StyledTableCell>
								<StyledTableCell style={{ fontWeight: 600 }}>Company Name</StyledTableCell>
								<StyledTableCell align="right" style={{ fontWeight: 600 }}>Date</StyledTableCell>
								<StyledTableCell align="right" style={{ fontWeight: 600 }}>Status</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{companyData.map((company, index) => (

								<StyledTableRow
									key={company.id}
									onClick={() => console.log('clicked')}
								>
									<StyledTableCell component="th" scope="row">  {index + 1}. </StyledTableCell>
									<StyledTableCell >{company.companyName}</StyledTableCell>
									<StyledTableCell align="right">{company.date}</StyledTableCell>
									<StyledTableCell align="right">
										{
											company.status === "Active" ?
											<Status><ActiveStatus /> {company.status}</Status> :
											company.status
										}
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	)
}

export default Home