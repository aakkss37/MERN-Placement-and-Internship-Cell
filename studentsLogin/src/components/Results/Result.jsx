import React, {  } from 'react'
import { Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow, } from '@mui/material';
import { CurretPath, MainConatiner,  MyApplicationContainer, StyledTableCell, StyledTableRow } from './resultStyle.js'



const allSelections = [
	{
		companyName: 'Google',
		selectedStudents: [
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
		]
	},
	{
		companyName: 'Microsoft',
		selectedStudents: [
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
		]
	},
	{
		companyName: 'Ubar',
		selectedStudents: [
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
		]
	},
	{
		companyName: 'PhonePe',
		selectedStudents: [
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kuamr',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
		]
	},
]




const Result = () => {



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
								<StyledTableCell align="right" style={{ fontWeight: 600 }}>Total Selection</StyledTableCell>
								<StyledTableCell align="right" style={{ fontWeight: 600 }}> </StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{allSelections.map((company, index) => (

								<StyledTableRow key={company.name}>
									<StyledTableCell component="th" scope="row">  {index + 1}. </StyledTableCell>
									<StyledTableCell >{company.companyName}</StyledTableCell>
									<StyledTableCell align="right">{company.selectedStudents.length}</StyledTableCell>
									<StyledTableCell align="right"><Button onClick={() => { }}>View</Button></StyledTableCell>
									
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>


			</MyApplicationContainer>
		</MainConatiner>
	)
}
export default Result