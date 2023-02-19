import React, { useState } from 'react'
import MenuBox from '../Constants/UI/menu/MenuBox';
import { Box, } from '@mui/material'
import { CompanyName, ExperienceTextField, ExperienceType, LeftBoxDummy, MainCardContainer, MainConatiner, Option, ShareExperienceConainer } from './shareExperiecneStyle'




const ShareExperience = () => {
	// const [experienceType, setExperienceType] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [yourExperience, setyourExperience] = useState("");







	return (
		<MainConatiner>
			<ShareExperienceConainer>

				<MenuBox style={{ boxShadow: '1px 1px 5px 4px rgb(0 0 0 / 30 %)' }} />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu */}

				<MainCardContainer>


					<CompanyName
						fullWidth
						id="standard-basic"
						label="Company Name"
						variant="standard"
						value={companyName}
						onChange={(event) => setCompanyName(event.target.value)}
					/>
					<Box>
						<form>
							<ExperienceType name="languages" id="lang" >
								<Option value="">--Select Experience Type--</Option>
								<Option value="Interview">Interview Experience</Option>
								<Option value="Internship">Internship Experience</Option>
								<Option value="Test">Test Experience</Option>
							</ExperienceType>
						</form>
					</Box>
					<ExperienceTextField 
						fullWidth label="Write Your Experience Here" 
						id="fullWidth" 
						multiline={true} 
						minRows={13} 
						value={yourExperience}
						onChange={(event) => setyourExperience(event.target.value)}
					/>


				</MainCardContainer>

			</ShareExperienceConainer>

		</MainConatiner>
	)
}

export default ShareExperience