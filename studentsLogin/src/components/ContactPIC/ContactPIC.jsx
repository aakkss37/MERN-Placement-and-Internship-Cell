import { Box } from '@mui/material';
import React from 'react'
import MenuBox from '../Constants/UI/menu/MenuBox';
import { ContactPICContainer, LeftBoxDummy, MainConatiner } from './contactPICStyle';


const ContactPIC = () => {
	return (
		<MainConatiner>
			<ContactPICContainer	Container>

				<MenuBox style={{ boxShadow: '1px 1px 5px 4px rgb(0 0 0 / 30 %)' }} />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu */}

				<Box>
					Hello
				</Box>

			</ContactPICContainer>

		</MainConatiner>
	)
}


export default ContactPIC