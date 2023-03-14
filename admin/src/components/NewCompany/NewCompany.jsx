import React, { useState } from 'react'
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { CurretPath, SectionHeading } from './newCompanyStyle';
import './newCompany.css'

const CGPA = [6, 6.5, 7, 7.5, 8, 8.5, 9]


const initialFormData = {
	cgpa: '',
	activeBack: '',
	department: [],
	passoutYear: '',
	jobType: '',
	jobRole: '',
	CTC: '',
	jobLocation: '',
	responsibility: '',
	requirement: ''
}

const NewCompany = () => {
	const [formData, setFormData] = useState(initialFormData)

	const formChangeHandler = (event) => {
		const { value, name } = event.target;
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
		}))
	}
	console.log(formData)
	return (
		<div className='new_company'>
			<div className='new_company_container'>
				<CurretPath >Add New Compnay</CurretPath>
				<div className='eligibility_and_detail'>
					<SectionHeading>Eligibility and Job Details</SectionHeading>
					<div className='form_container'>
						<Box sx={{ minWidth: 220 }}>
							<FormControl fullWidth required variant='standard'>
								<InputLabel id="demo-simple-select-label">CGPA</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={formData.cgpa}
									name='cgpa'
									label="CGPA"
									onChange={(e) => { formChangeHandler(e) }}
								>
									<MenuItem value={0}>All</MenuItem>
									{
										CGPA.map((cgpa, index) => (
											<MenuItem key={index} value={cgpa}>Above {cgpa}</MenuItem>
										))
									}
								</Select>
							</FormControl>
						</Box>
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