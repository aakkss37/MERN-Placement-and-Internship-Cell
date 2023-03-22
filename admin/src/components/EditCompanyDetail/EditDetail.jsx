import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Snackbar, IconButton, Box, Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField,} from "@mui/material";
import { CurretPath, SectionHeading } from './editDetailStyle';
import CloseIcon from '@mui/icons-material/Close';
import './editDetail.css'
import { API } from '../../services/api';
import ConformationDialog from '../ui/ConformationDialog';

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

let initialFormData = {
	companyName: '',
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
	department: [],
}






const EditDetail = () => {
	const [formData, setFormData] = useState(initialFormData)
	const navigate = useNavigate()
	const [searchParams] = useSearchParams();
	const companyId = searchParams.get('id');

	useEffect(() => {
		const getCompanyDetail = async () => {
			try {
				let responce = await API.getCompanyDetails(companyId)
				// console.log(responce.data)
				delete responce.data.companyLogo
				// console.log("after delete", responce.data)
				setFormData(responce.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		getCompanyDetail()
	}, [companyId]);




	// FeedBack message
	const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
	const [openConformation, setOpenConformation] = useState(false)
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenErrorSnackbar(false);
		setOpenConformation(false);
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


	// form controller
	const formChangeHandler = (event) => {
		const { value, name } = event.target;
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
		}))
	}


	// Submit and add new Company
	const formSubmitHandler = async () => {
		setOpenConformation(false);
		console.log(formData)
		if (
			formData.companyName &&
			formData.cgpa &&
			formData.jobType &&
			formData.jobRole &&
			formData.responsibilities &&
			formData.requirement &&
			formData.aboutCompany &&
			formData.department.length
		) {
			try {
				const responce = await API.updateCompanyDetails(formData);
				console.log(responce.data)
				setFormData(initialFormData)
				navigate(`/home/company-detail/?companyid=${responce.data._id}`)
			} catch (error) {
				console.log(error)
			}
		} else {
			setOpenErrorSnackbar(true)
		}
	}


	console.log(formData)

	return (
		<div className='new_company'>
			<div className='new_company_container'>
				<CurretPath >Home &gt; {formData?.companyName} &gt; Update </CurretPath>
				{/* Comformation Dialog */}
				<ConformationDialog
					openConformation={ openConformation }
					onClose={handleClose}
					onContinue={formSubmitHandler}
					companyName={formData?.companyName}
				/>
				{/* Form field empty error msg */}
				<Snackbar
					open={openErrorSnackbar}
					autoHideDuration={4000}
					onClose={handleClose}
					message="Error! Required Field(*) can not be empty."
					action={action}
				/>


				<div className='company_detail'>
					<SectionHeading>Company Detail</SectionHeading>
					<div className='form_container_company_detail'>
						<div className="form_container_company_detail_right">
							<Box >
								<TextField
									fullWidth
									id="outlined-multiline-static"
									label="Company Name"
									variant="outlined"
									required
									value={formData.companyName}
									name="companyName"
									onChange={(e) => { formChangeHandler(e) }} />
							</Box> <br />
							<Box >
								<TextField
									fullWidth
									id="outlined-multiline-static"
									label="Responsibilities"
									multiline
									rows={12}
									variant="outlined"
									required
									value={formData.responsibilities}
									name="responsibilities"
									onChange={(e) => { formChangeHandler(e) }} />
							</Box>
						</div>
						<div className="form_container_company_detail_left">
							<Box >
								<TextField
									fullWidth id="outlined-multiline-static"
									label="Requirement"
									multiline
									rows={5}
									variant="outlined"
									required
									value={formData.requirement}
									name="requirement"
									onChange={(e) => { formChangeHandler(e) }} />
							</Box> <br />
							<Box >
								<TextField
									fullWidth
									id="outlined-multiline-static"
									label="About Company"
									rows={5}
									multiline
									variant="outlined"
									required
									value={formData.aboutCompany}
									name="aboutCompany"
									onChange={(e) => { formChangeHandler(e) }} />
							</Box>

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
							<FormControl fullWidth variant='standard'>
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
						marginLeft: "45%",
						paddingLeft: "4rem",
						paddingRight: "4rem",
						fontWeight: 600
					}}
					onClick={() => setOpenConformation(true)}
				>
					Update
				</Button>
			</div>
		</div>
	)
}

export default EditDetail