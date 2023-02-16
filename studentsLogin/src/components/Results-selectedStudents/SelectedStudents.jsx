import React, { useState, useEffect } from 'react';
import { useSearchParams, } from 'react-router-dom';
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, } from '@mui/material';
import { CurretPath, MainConatiner, MyApplicationContainer, StyledTableCell, StyledTableRow } from './selectedStudentsStyle.js'



const allSelections = [
	{
		companyName: 'Google',
		selectedStudents: [
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
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
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
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
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
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
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
			{
				regno: '20csu135',
				name: 'Amar kumar',
				department: 'B.Sc Computer Science',
				phone: '9999999999',
				emailPersonal: 'amarfullstack.workspace.124@gmail.com',
			},
		]
	},
]



const initialCompayState = {
	companyName: '',
	selectedStudents: [
		{
			regno: '',
			name: '',
			department: '',
			phone: '',
			emailPersonal: '',
		},
	],
}



const SelectedStudents = () => {
	const [company, setCompany] = useState( initialCompayState );
	const [searchParams] = useSearchParams();
	const companyName = searchParams.get('companyName');
	console.log('companyName ==> ', companyName)
	useEffect(() => {
		const find = async ()=> {
			var found = await allSelections.find((element) => {
				if(element.companyName === companyName) 
				{
					return element;
				}else{
					return null;
				}
	
			});
			console.log("found company ====>>>>>>>>>>>  ",found)
			found && setCompany(found)
		}
		find();
	}, [companyName,]);

	return (
		<MainConatiner>
			<MyApplicationContainer>

				<CurretPath >Selected Students in <b>{companyName}</b></CurretPath>

				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow >
								<StyledTableCell style={{ fontWeight: 600 }}>S No.</StyledTableCell>
								<StyledTableCell style={{ fontWeight: 600 }}>Reg No.</StyledTableCell>
								<StyledTableCell style={{ fontWeight: 600 }}>Name</StyledTableCell>
								<StyledTableCell align="right" style={{ fontWeight: 600 }}>Department</StyledTableCell>
								<StyledTableCell align="right" style={{ fontWeight: 600 }}>Phone</StyledTableCell>
								<StyledTableCell align="right" style={{ fontWeight: 600 }}>E-mail</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{company.selectedStudents.map((student, index) => (
								
								<StyledTableRow key={index}>
									<StyledTableCell component="th" scope="row">  {index + 1}. </StyledTableCell>
									<StyledTableCell component="th" scope="row">  {student.regno} </StyledTableCell>
									<StyledTableCell component="th" scope="row">  {student.name}. </StyledTableCell>
									<StyledTableCell align="right">{student.department}</StyledTableCell>
									<StyledTableCell align="right">{student.phone}</StyledTableCell>
									<StyledTableCell align="right">{student.emailPersonal}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>


			</MyApplicationContainer>
		</MainConatiner>
	)
}
export default SelectedStudents