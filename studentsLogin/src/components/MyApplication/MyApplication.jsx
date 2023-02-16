import React, { useState } from 'react'
import { Box, Modal, Paper, Table, TableBody, TableContainer, TableHead, TableRow, } from '@mui/material';
import { CurretPath, MainConatiner, ModelBody, ModelBodyItem, ModelTextHead, ModelTextKey, ModelTextValue, MyApplicationContainer, StyledTableCell, StyledTableRow } from './myApplicationStyle.js'




const companyData = [
	{ companyName: 'Google', date: '12 Nov 2022', status: 'Selected', ctc: '3200000', jobRole: 'STD I', location: 'Banglore (IND)', jobType: 'Full Time' },
	{ companyName: 'Microsoft', date: '11 Oct 2022', status: 'Applied', ctc: '1800000', jobRole: 'SDE I', location: 'Banglore (IND)', jobType: 'Full Time' },
	{ companyName: 'Netflix', date: '12 Dec 2022', status: 'Selected', ctc: '1400000', jobRole: 'Full Stack Developer', location: 'Haydrabad (IND)', jobType: 'Full Time' },
	{ companyName: 'Adobe', date: '27 Nov 2022', status: 'Interview', ctc: '1750000', jobRole: 'Data scientist', location: 'Banglore (IND)', jobType: 'Full Time' },
	{ companyName: 'Starlink', date: '17 Dec 2022', status: 'Applied', ctc: '4400000', jobRole: 'Data scientist', location: 'New York (US)', jobType: 'Full Time' },
	{ companyName: 'Phonepe', date: '22 Jan 2023', status: 'Interview', ctc: '2200000', jobRole: 'DevOps Engg.', location: 'Pune (IND)', jobType: 'Full Time' },
]






const MyApplication = () => {

	const [isModelOpen, setIsModelOpen] = useState(false);
	const [dataInModdal, setdataInModdal] = useState({})

	const modelOpenHandler = (dataForModal) => {
		setdataInModdal(dataForModal)
		setIsModelOpen(true)
	};
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
							{companyData.map((company, index) => (
								
								<StyledTableRow 
									key={company.companyName} 
									onClick={() =>
										 modelOpenHandler({
											ctc: company.ctc, 
											jobRole: company.jobRole, 
											location: company.location, 
											jobType: company.jobType,
										})
									}
								>
									<StyledTableCell component="th" scope="row">  {index + 1}. </StyledTableCell>
									<StyledTableCell >{company.companyName}</StyledTableCell>
									<StyledTableCell align="right">{company.date}</StyledTableCell>
									<StyledTableCell align="right">{company.status}</StyledTableCell>
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
									<ModelTextValue>Rs. {dataInModdal.ctc} </ModelTextValue>
								</ModelBodyItem>
								<ModelBodyItem>
									<ModelTextKey>Job Role:</ModelTextKey>
									<ModelTextValue>{dataInModdal.jobRole}</ModelTextValue>
								</ModelBodyItem>
								<ModelBodyItem>
									<ModelTextKey>Location: </ModelTextKey>
									<ModelTextValue>{dataInModdal.location}</ModelTextValue>
								</ModelBodyItem>
								<ModelBodyItem>
									<ModelTextKey>Job Type: </ModelTextKey>
									<ModelTextValue>{dataInModdal.jobType}</ModelTextValue>
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