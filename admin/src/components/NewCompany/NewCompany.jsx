import React, { useState } from 'react'
import { Box, Checkbox,  FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { CurretPath, SectionHeading } from './newCompanyStyle';
import './newCompany.css'

const CGPA = [6, 6.5, 7, 7.5, 8, 8.5, 9]
const passoutYear = [2022, 2023, 2024, 2025, 2026]
const departmentList = ["All", "Anthropology", "Biology", "Business", "Chemical Engineering", "Chemistry", "Civil Engineering", "Communications", "Computer Science", "Economics", "Education", "Electrical Engineering", "English", "Environmental Science", "Foreign Languages", "Geography", "History", "Law", "Mathematics", "Mechanical Engineering", "Philosophy", "Physics", "Political Science", "Psychology", "Sociology", "Bachelor of Arts", "Bachelor of Science", "Master of Arts", "Master of Business Administration", "Master of Education", "Master of Engineering", "Master of Science"]
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const initialFormData = {
	cgpa: '',
	activeBack: '',
	passoutYear: '',
	jobType: '',
	jobRole: '',
	CTC: '',
	jobLocation: '',
	responsibilities: '',
	requirement: '',
	aboutCompany: ''
}

const NewCompany = () => {
	const [formData, setFormData] = useState(initialFormData)
	const [department, setDepartment] = useState([]);
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setDepartment(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
	};

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
				<div className='Company Detail'>
					<SectionHeading>Company Detail</SectionHeading>
					<div className='form_container'>
						<div className="right">
							<Box sx={{ minWidth: 250, height: '350'}}>
								<TextField 
									fullWidth 
									sx={{width: '600px'}}
									id="outlined-multiline-static" 
									label="Responsibilities" 
									multiline
									rows={13}
									variant="outlined" 
									required value={formData.responsibilities} 
									name="responsibilities" 
									onChange={(e) => { formChangeHandler(e) }}/>
							</Box>
						</div>
						<div className="left">
							<Box sx={{ minWidth: 250, height: '150' }}>
								<TextField 
									fullWidth id="outlined-multiline-static" 
									sx={{width: "500px"}}
									label="Requirement" 
									multiline
									rows={4}
									variant="outlined" 
									required value={formData.requirement} 
									name="requirement" 
									onChange={(e) => { formChangeHandler(e) }}/>
							</Box>
							<Box sx={{ minWidth: 250, height: '150' }}>
								<TextField 
									fullWidth 
									sx={{width: "500px"}}
									id="outlined-multiline-static" 
									label="About Company" 
									rows={4}
									multiline
									variant="outlined" 
									required 
									value={formData.aboutCompany} 
									name="aboutCompany" 
									onChange={(e) => { formChangeHandler(e) }}/>
							</Box>
						</div>
						
					</div>
				</div>
				<div className='eligibility_and_detail'>
					<SectionHeading>Eligibility and Job Details</SectionHeading>
					<div className='form_container'>
						<Box sx={{ minWidth: 250 }}>
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
						<Box sx={{ minWidth: 250 }}>
							<FormControl fullWidth required variant='standard'>
								<InputLabel id="demo-simple-select-label">Passout Year</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={formData.passoutYear}
									name='passoutYear'
									label="Passout Year"
									onChange={(e) => { formChangeHandler(e) }}
								>
									<MenuItem value={0}>All</MenuItem>
									{
										passoutYear.map((year, index) => (
											<MenuItem key={index} value={year}>{year}</MenuItem>
										))
									}
								</Select>
							</FormControl>
						</Box>
						<Box sx={{ minWidth: 250 }}>
							<FormControl fullWidth required variant='standard'>
								<InputLabel id="demo-simple-select-label">Active Backlog</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={formData.activeBack}
									name='activeBack'
									label="Active Backlog"
									onChange={(e) => { formChangeHandler(e) }}
								>
									<MenuItem value={true}>Allowed</MenuItem>
									<MenuItem value={false}>Not Allowed</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Box sx={{ minWidth: 250 }}>
							<FormControl fullWidth required variant='standard'>
								<InputLabel id="demo-simple-select-label">Job Type</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={formData.jobType}
									name='jobType'
									label="Job Type"
									onChange={(e) => { formChangeHandler(e) }}
								>
									<MenuItem value={"Full-Time Internship"}>Full-Time Internship</MenuItem>
									<MenuItem value={"Part-Time Internship"}>Part-Time Internship</MenuItem>
									<MenuItem value={"Full-Time Job"}>Full-Time Job</MenuItem>
									<MenuItem value={"Part-Time Job"}>Part-Time Job</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Box sx={{ minWidth: 250 }}>
							<TextField fullWidth id="standard-basic" label="Job Role" variant="standard" required value={formData.jobRole} name="jobRole" onChange={(e) => { formChangeHandler(e) }}/>
						</Box>
						<Box sx={{ minWidth: 250 }}>
							<TextField fullWidth id="standard-basic" label="CTC (Package)" variant="standard" required value={formData.CTC} name="CTC" onChange={(e) => { formChangeHandler(e) }}/>
						</Box>
						<Box sx={{ minWidth: 250 }}>
							<TextField fullWidth id="standard-basic" label="Job Location" variant="standard" required value={formData.jobLocation} name="jobLocation" onChange={(e) => { formChangeHandler(e) }}/>
						</Box>
						<Box sx={{ minWidth: 250 }}>
							<FormControl sx={{ m: 1, width: 250 }}>
								<InputLabel id="demo-multiple-checkbox-label">Departments</InputLabel>
								<Select
									labelId="demo-multiple-checkbox-label"
									id="demo-multiple-checkbox"
									multiple
									value={department}
									onChange={handleChange}
									input={<OutlinedInput label="Tag" />}
									renderValue={(selected) => selected.join(', ')}
									MenuProps={MenuProps}
								>
									{departmentList.map((name) => (
										<MenuItem key={name} value={name}>
											<Checkbox checked={department.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
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