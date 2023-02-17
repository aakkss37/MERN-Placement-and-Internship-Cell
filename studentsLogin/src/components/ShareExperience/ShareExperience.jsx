import React, { useState } from 'react'
import MenuBox from '../Constants/UI/menu/MenuBox';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { CompanyName, ExperienceTextField, LeftBoxDummy, MainCardContainer, MainConatiner, ShareExperienceConainer } from './shareExperiecneStyle'



const ShareExperience = () => {
	const [experienceType, setExperienceType] = useState("");
	const [companyName, setCompanyName] = useState("");







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
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Age</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={experienceType}
								label="Age"
								onChange={(event) => setExperienceType(event.target.value)}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<ExperienceTextField fullWidth label="fullWidth" id="fullWidth" multiline={true} minRows={10} />


				</MainCardContainer>

			</ShareExperienceConainer>

		</MainConatiner>
	)
}

export default ShareExperience