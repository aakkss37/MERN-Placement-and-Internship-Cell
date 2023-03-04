import React, { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import MenuBox from '../Constants/UI/menu/MenuBox.jsx';
import { LeftBoxDummy, MainConatiner, ProfileConatiner, ProfileBox, ImageBox, ProfileBody, PersonalDetail, CollegeDetail, InfoKey, InfoValue, ShowResume, UploadResume, SaveResume, LongInfoValue, } from './profileStyle.js';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { FileUploader } from "react-drag-drop-files";
import BackupIcon from '@mui/icons-material/Backup';
import { useSelector } from 'react-redux';


const fileTypes = ['PDF'];
const dropMessageStyle = {
	backgroundColor: 'white',
	fontSize: 24,
	color: 'green',
	fontWeight: 600,
}


const Profile = () => {
	const [file, setFile] = useState(null);
	const handleChange = (file) => {
		setFile(file);
	};

	const student = useSelector(state => state.logedinStudent)
	// console.log(student.admission)
	console.log(student.picture)
	const admission = new Date(student.admission)
	const passout = new Date(student.passout)
	const admissionYear = admission.getFullYear()
	const passoutYear = passout.getFullYear()


	return (
		<MainConatiner>

			<ProfileConatiner>

				<MenuBox />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu  */}


				<ProfileBox>
					<ImageBox>
						<Box>
							{/* <AccountCircleRoundedIcon style={{ fontSize: '7rem', color: '#367d43' }} /> */}
							<img src={student.picture} alt="img" style={{borderRadius: "50%", width: '100px'}}/>
							<Typography textAlign='center'>{student.name}</Typography>
						</Box>
					</ImageBox>
					<ProfileBody>
						<PersonalDetail>
							<Typography textAlign='center' color='#367d43' fontWeight='600'>Personal Information</Typography>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey >Gender: </InfoKey>
								<InfoValue >{student.gender} </InfoValue>
							</Box>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey>Phone: </InfoKey>
								<InfoValue >{student.phone} </InfoValue>
							</Box>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey>Email: </InfoKey>
								<LongInfoValue>{student.personalEmail}</LongInfoValue>
							</Box>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey>LinkedIn: </InfoKey>
								<LongInfoValue >{student.linkedIn}</LongInfoValue>
							</Box>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey>Address: </InfoKey>
								<InfoValue >{student.address}</InfoValue>
							</Box>
						</PersonalDetail>
						<Divider style={{ marginTop: 8, marginBottom: 16 }} />
						<CollegeDetail>
							<Typography textAlign='center' color='#367d43' fontWeight='600'>College Information</Typography>
							<Box>
								<InfoKey>Registeration no.: </InfoKey>
								<InfoValue >{student.studentId} </InfoValue>
							</Box>
							<Box>
								<InfoKey>College email: </InfoKey>
								<InfoValue >{student.email} </InfoValue>
							</Box>
							<Box>
								<InfoKey>Department.: </InfoKey>
								<InfoValue >{student.department} </InfoValue>
							</Box>
							<Box>
								<InfoKey>Batch: </InfoKey>
								<InfoValue >{admissionYear} - {passoutYear} </InfoValue>
							</Box>
							<Box>
								<InfoKey>CGPA: </InfoKey>
								<InfoValue >{student.cgpa} </InfoValue>
							</Box>
							<Box>
								<InfoKey>Active Backlog: </InfoKey>
								<InfoValue >{student.activeBack}</InfoValue>
							</Box>
							

						</CollegeDetail>

						<Divider style={{ marginTop: 8, marginBottom: 16 }} />

						<div className='resume' id='resume'>
							<ShowResume >Show My Resume</ShowResume>
							<Typography marginTop='20px' marginLeft='20px' lineHeight='1' color='gray'>{file ? `Selected File: ${file.name}` : 'No file Selected'}</Typography>
							<FileUploader handleChange={handleChange} name="file" types={fileTypes} dropMessageStyle={dropMessageStyle}>
								<UploadResume>
									<Box>
										<BackupIcon style={{ fontSize: '4rem', color: '#cadbc2', marginLeft: '10%', }} />
										<Typography style={{ fontSize: '12px', color: '#cadbc2', fontWeight: 600, textAlign: 'center', }}>Upload Resume</Typography>
										<Typography style={{ fontSize: '10px', color: '#cadbc2', textAlign: 'center', }}>OR</Typography>
										<Typography style={{ fontSize: '12px', color: '#cadbc2', fontWeight: 600, textAlign: 'center', }}>Drag & Drop</Typography>
									</Box>
								</UploadResume>
							</FileUploader>
							<Box textAlign='center'>
								<SaveResume >Save</SaveResume>
							</Box>
						</div>

					</ProfileBody>

				</ProfileBox>

			</ProfileConatiner>

		</MainConatiner>
	)
}


export default Profile;