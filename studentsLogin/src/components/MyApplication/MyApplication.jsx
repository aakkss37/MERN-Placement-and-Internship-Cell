import React, { useState } from 'react'
import { Box, Modal, Paper, Table, TableBody, TableContainer, TableHead, TableRow, } from '@mui/material';
import { CurretPath, MainConatiner, ModelBody, ModelBodyItem, ModelTextHead, ModelTextKey, ModelTextValue, MyApplicationContainer, StyledTableCell, StyledTableRow } from './myApplicationStyle.js'




const rowsData = [
	{ companyName: 'Google', date: '12 Nov 2022', status: 'Selected' },
	{ companyName: 'Microsoft', date: '11 Oct 2022', status: 'Applied' },
	{ companyName: 'Netflix', date: '12 Dec 2022', status: 'Selected' },
	{ companyName: 'Adobe', date: '27 Nov 2022', status: 'Interview' },
	{ companyName: 'Starlink', date: '17 Dec 2022', status: 'Applied' },
	{ companyName: 'Phonepe', date: '22 Jan 2023', status: 'Interview' },
	{ companyName: 'Google', date: '12 Nov 2022', status: 'Selected' },
	{ companyName: 'Microsoft', date: '11 Oct 2022', status: 'Applied' },
	{ companyName: 'Netflix', date: '12 Dec 2022', status: 'Selected' },
	{ companyName: 'Adobe', date: '27 Nov 2022', status: 'Interview' },
	{ companyName: 'Starlink', date: '17 Dec 2022', status: 'Applied' },
	{ companyName: 'Phonepe', date: '22 Jan 2023', status: 'Interview' },
	{ companyName: 'Google', date: '12 Nov 2022', status: 'Selected' },
	{ companyName: 'Microsoft', date: '11 Oct 2022', status: 'Applied' },
	{ companyName: 'Netflix', date: '12 Dec 2022', status: 'Selected' },
	{ companyName: 'Adobe', date: '27 Nov 2022', status: 'Interview' },
	{ companyName: 'Starlink', date: '17 Dec 2022', status: 'Applied' },
	{ companyName: 'Phonepe', date: '22 Jan 2023', status: 'Interview' },
];






const MyApplication = () => {

	const [isModelOpen, setIsModelOpen] = useState(false);

	const handleOpen = () => setIsModelOpen(true);
	const handleClose = () => setIsModelOpen(false);



	return (
		<MainConatiner>
			<MyApplicationContainer>

				<CurretPath >My Application</CurretPath>

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
							{rowsData.map((row, index) => (
								<StyledTableRow key={row.name} onClick={handleOpen}>
									<StyledTableCell component="th" scope="row">  {index + 1}. </StyledTableCell>
									<StyledTableCell >{row.companyName}</StyledTableCell>
									<StyledTableCell align="right">{row.date}</StyledTableCell>
									<StyledTableCell align="right">{row.status}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>


				<Modal
					open={isModelOpen}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<ModelBody >
						<Box>
							<ModelTextHead>Company name</ModelTextHead>
							<Box>
								<ModelBodyItem>
									<ModelTextKey>CTC:</ModelTextKey>
									<ModelTextValue>1600000</ModelTextValue>
								</ModelBodyItem>
								<ModelBodyItem>
									<ModelTextKey>Job Role:</ModelTextKey>
									<ModelTextValue>Full stack Developer</ModelTextValue>
								</ModelBodyItem>
								<ModelBodyItem>
									<ModelTextKey>Location: </ModelTextKey>
									<ModelTextValue>Pune</ModelTextValue>
								</ModelBodyItem>
								<ModelBodyItem>
									<ModelTextKey>Job Type: </ModelTextKey>
									<ModelTextValue>Full Time</ModelTextValue>
								</ModelBodyItem>
							</Box>
						</Box>
					</ModelBody>
				</Modal>

			</MyApplicationContainer>
		</MainConatiner>
	)
}

export default MyApplication