import React, { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import MenuBox from '../Constants/UI/menu/MenuBox.jsx';
import { LeftBoxDummy, MainConatiner, ProfileConatiner, ProfileBox, ImageBox, ProfileBody, PersonalDetail, CollegeDetail, InfoKey, InfoValue, ShowResume, UploadResume, SaveResume, LongInfoValue, } from './profileStyle.js';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { FileUploader } from "react-drag-drop-files";
import BackupIcon from '@mui/icons-material/Backup';


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



	return (
		<MainConatiner>

			<ProfileConatiner>

				<MenuBox />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu  */}


				<ProfileBox>
					<ImageBox>
						<Box>
							<AccountCircleRoundedIcon style={{ fontSize: '7rem', color: '#367d43' }} />
							<Typography textAlign='center'>Amar kumar</Typography>
						</Box>
					</ImageBox>
					<ProfileBody>
						<PersonalDetail>
							<Typography textAlign='center' color='#367d43' fontWeight='600'>Personal Information</Typography>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey >Gender: </InfoKey>
								<InfoValue >Male </InfoValue>
							</Box>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey>Phone: </InfoKey>
								<InfoValue >9999999999 </InfoValue>
							</Box>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey>Email: </InfoKey>
								<LongInfoValue>amarfullstack.workspace.124@gmail.com</LongInfoValue>
							</Box>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey>LinkedIn: </InfoKey>
								<LongInfoValue >amar-kumar-sharma-44202a203</LongInfoValue>
							</Box>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey>Address: </InfoKey>
								<InfoValue >142 CFS mutthupalayam-Thekkalur Road Pelampatti, Tamil Nadu 555555, Gaudupatti, Bhoimbatore, Tamil Nadu - </InfoValue>
							</Box>
						</PersonalDetail>
						<Divider style={{ marginTop: 8, marginBottom: 16 }} />
						<CollegeDetail>
							<Typography textAlign='center' color='#367d43' fontWeight='600'>College Information</Typography>
							<Box>
								<InfoKey>Registeration no.: </InfoKey>
								<InfoValue >20CSU135 </InfoValue>
							</Box>
							<Box>
								<InfoKey>College email: </InfoKey>
								<InfoValue >20csu135@kahedu.edu.in </InfoValue>
							</Box>
							<Box>
								<InfoKey>Department.: </InfoKey>
								<InfoValue >B.Sc Computer Science </InfoValue>
							</Box>
							<Box>
								<InfoKey>Year: </InfoKey>
								<InfoValue >3rd </InfoValue>
							</Box>
							<Box>
								<InfoKey>CGPA: </InfoKey>
								<InfoValue >8.6 </InfoValue>
							</Box>
							<Box>
								<InfoKey>Backlog: </InfoKey>
								<InfoValue >Yes </InfoValue>
							</Box>
							<Box>
								<InfoKey>Active Backlog: </InfoKey>
								<InfoValue >Yes</InfoValue>
							</Box>
							<Box>
								<InfoKey>Year gap: </InfoKey>
								<InfoValue >Yes</InfoValue>
							</Box>

						</CollegeDetail>

						<Divider style={{ marginTop: 8, marginBottom: 16 }} />

						<Box >
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
						</Box>

					</ProfileBody>

				</ProfileBox>

			</ProfileConatiner>

		</MainConatiner>
	)
}


export default Profile;