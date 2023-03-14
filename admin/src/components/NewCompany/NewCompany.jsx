import React from 'react'
import { Button, Container, TextField, Typography } from "@mui/material";
import { CurretPath, SectionHeading } from './newCompanyStyle';
import './newCompany.css'


const NewCompany = () => {
	return (
		<div className='new_company'>
			<div className='new_company_container'>
				<CurretPath >Add New Compnay</CurretPath>
				<div className='eligibility_and_detail'>
					<SectionHeading>Eligibility and Job Details</SectionHeading>
					<div className='form_container'>
						
					</div>
				</div>
				{/* <Button variant="contained" component="label">
					Upload Company Logo
					<input hidden accept="image/*" type="file" />
				</Button> */}
			</div>
		</div>
	)
}

export default NewCompany