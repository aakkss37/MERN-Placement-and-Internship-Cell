import React, { useState } from 'react'
import { Snackbar, IconButton, Box, Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { CurretPath, SectionHeading } from './newCompanyStyle';
import CloseIcon from '@mui/icons-material/Close';
import './newCompany.css'
import { API } from '../../services/api';

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
	aboutCompany: '',
	companyLogo: '',
	department: '',
}




const NewCompany = () => {
	const [formData, setFormData] = useState(initialFormData)
	const [imageName, setImageName] = useState();

	// Error message
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenSnackbar(false);
	};
	const action = (
		<>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</>
	);



	// image upload
	const handleChangeImage = async(file)=>{
		setImageName(file.name)
		const data = new FormData();
		data.append("name", file.name);
		data.append("file", file);
		// API CALL
		console.log(data)
		try {
			const responce = await API.uploadCompanyLogo(data); //return a url of the pic
			// console.log("responce ===> ", responce.data);
			// postData.companyLogo = responce.data;
			setFormData((prevFormData) => {
				return {
					...prevFormData,
					companyLogo: responce.data,
				}
			});
		} catch (error) {
			console.log(error)
		}
	}


	// form controller
	const formChangeHandler = (event) => {
		const { value, name } = event.target;
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
		}))
	}
	

	// Submit and add new Company
	const formSubmitHandler = async()=> {
		console.log("clicked")
		console.log(formData)
		if(
			formData.cgpa && 
			formData.activeBack &&
			formData.passoutYear &&
			formData.jobType &&
			formData.jobRole &&
			formData.responsibilities &&
			formData.requirement &&
			formData.aboutCompany &&
			formData.companyLogo &&
			formData.department
		){
			try {
				const responce = await API.addNewCompany(formData);
				console.log(responce.data)
			} catch (error) {
				console.log(error)
			}
		}else{
			setOpenSnackbar(true)
		}
	}
	
	
	console.log(formData)
	
	return (
		<div className='new_company'>
			<div className='new_company_container'>
				<CurretPath >Add New Compnay</CurretPath>
				<Snackbar
					open={openSnackbar}
					autoHideDuration={4000}
					onClose={handleClose}
					message="Error! Can not submit empty field."
					action={action}
				/>
				<div className='company_detail'>
					<SectionHeading>Company Detail</SectionHeading>
					<div className='form_container_company_detail'>
						<div className="right">
							<Box sx={{ minWidth: 250, height: '350' }}>
								<TextField
									fullWidth
									sx={{ width: '600px' }}
									id="outlined-multiline-static"
									label="Responsibilities"
									multiline
									rows={13}
									variant="outlined"
									required value={formData.responsibilities}
									name="responsibilities"
									onChange={(e) => { formChangeHandler(e) }} />
							</Box>
						</div>
						<div className="left">
							<Box sx={{ minWidth: 250, height: '150' }}>
								<TextField
									fullWidth id="outlined-multiline-static"
									sx={{ width: "500px" }}
									label="Requirement"
									multiline
									rows={4}
									variant="outlined"
									required value={formData.requirement}
									name="requirement"
									onChange={(e) => { formChangeHandler(e) }} />
							</Box>
							<Box sx={{ minWidth: 250, height: '150' }}>
								<TextField
									fullWidth
									sx={{ width: "500px" }}
									id="outlined-multiline-static"
									label="About Company"
									rows={4}
									multiline
									variant="outlined"
									required
									value={formData.aboutCompany}
									name="aboutCompany"
									onChange={(e) => { formChangeHandler(e) }} />
							</Box>
							<Button variant="outlined" component="label">
								Upload Company Logo
								<input hidden accept="image/*" type="file" onChange={(e) => handleChangeImage(e.target.files[0])} />
							</Button>
							{imageName && <span style={{color: "gray", overflow: "hidden"}}> {imageName}</span>}
						</div>

					</div>
				</div>
				<div className='eligibility_and_detail'>
					<SectionHeading>Eligibility and Job Details</SectionHeading>
					<div className='form_container_eligibility'>
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
							<TextField fullWidth id="standard-basic" label="Job Role" variant="standard" required value={formData.jobRole} name="jobRole" onChange={(e) => { formChangeHandler(e) }} />
						</Box>
						<Box sx={{ minWidth: 250 }}>
							<TextField fullWidth id="standard-basic" label="CTC (Package)" variant="standard" required value={formData.CTC} name="CTC" onChange={(e) => { formChangeHandler(e) }} />
						</Box>
						<Box sx={{ minWidth: 250 }}>
							<TextField fullWidth id="standard-basic" label="Job Location" variant="standard" required value={formData.jobLocation} name="jobLocation" onChange={(e) => { formChangeHandler(e) }} />
						</Box>
						<Box sx={{ minWidth: 250 }}>
							<FormControl sx={{ m: 1, width: 250 }}>
								<InputLabel id="demo-multiple-checkbox-label">Departments</InputLabel>
								<Select
									labelId="demo-multiple-checkbox-label"
									id="demo-multiple-checkbox"
									multiple
									value={formData.department}
									name="department"
									onChange={(e) => { formChangeHandler(e) }}
									input={<OutlinedInput label="Tag" />}
									renderValue={(selected) => selected.join(', ')}
									MenuProps={MenuProps}
								>
									{departmentList.map((name, index) => (
										<MenuItem key={index} value={name}>
											<Checkbox checked={formData.department.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>

					</div>
				</div>
				<Button 
					variant="contained" 
					style={{
						margin: "2rem", 
						marginLeft: "47%", 
						paddingLeft: "3rem", 
						paddingRight: "3rem", 
						fontWeight: 600
					}}
					onClick={formSubmitHandler}
				>
					Submit
				</Button>
			</div>
		</div>
	)
}

export default NewCompany