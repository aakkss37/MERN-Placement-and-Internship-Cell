import React, { useContext, useEffect, useState } from 'react';
import './home.css'
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, } from '@mui/material';
import { ActiveStatus, CurretPath, Status, StyledTableCell, StyledTableRow } from './homeStyle.js'
import { API } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import SuccessMsg from '../ui/SuccessMsg';
import { DataContext } from '../../contextAPI/DataProvider';




const Home = () => {
	const [companyList, setCompanyList] = useState([]);
	const navigate = useNavigate()
	const context = useContext(DataContext);

	useEffect(() => {
		const getCompanyList = async()=>{
			try {
				const list = await API.getListedCompanyList();
				// console.log(list)
				setCompanyList(list.data.info.reverse())
			} catch (error) {
				console.log(error.message)
			}
		}
		getCompanyList()
	}, []);


	const openCompanyDetail = (id)=> {
		navigate(`/home/company-detail?companyid=${id}`)
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		context.setOpenDeleteSucessSnakebar(false)
	};
	// console.log(companyList)
	return (
		<div className='home'>
			{/* Form sucessfull submit msg */}
			<SuccessMsg
				message="Document Deleted Sucessfully"
				open={context.openDeleteSucessSnakebar}
				onClose={handleClose}
			/>
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
							{companyList.map((company, index) => (

								<StyledTableRow
									key={company.id}
									onClick={() => openCompanyDetail(company.id)}
								>
									<StyledTableCell component="th" scope="row">  {index + 1}. </StyledTableCell>
									<StyledTableCell >{company.companyName}</StyledTableCell>
									<StyledTableCell align="right">{company.listingDate}</StyledTableCell>
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