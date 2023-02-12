import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import MenuBox from '../Constants/UI/menu/MenuBox.jsx';
import { LeftBoxDummy, MainConatiner, ProfileConatiner, ProfileBox, ImageBox, ProfileBody, PersonalDetail, CollegeDetail, InfoKey, InfoValue, } from './profileStyle.js';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';



const Profile = () => {


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
								<InfoValue style={{overflow: 'scroll', }}>amarfullstack.workspace.124@gmail.com</InfoValue>
							</Box>
							<Box style={{ marginBottom: 5 }}>
								<InfoKey>Address: </InfoKey>
								<InfoValue >142 CFS mutthupalayam-Thekkalur Road Pelampatti, Tamil Nadu 555555, Gaudupatti, Bhoimbatore, Tamil Nadu - </InfoValue>
							</Box>
						</PersonalDetail>
						<Divider style={{ marginTop: 8, marginBottom: 16 }} />
						<CollegeDetail>
							<Box>
								<InfoKey>Registeration no.: </InfoKey>
								<InfoValue >20CSU135 </InfoValue>
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
						</CollegeDetail>
					</ProfileBody>
				</ProfileBox>

			</ProfileConatiner>

		</MainConatiner>
	)
}


export default Profile;