import React, { useState } from 'react'
import { Typography } from '@mui/material';
import MenuBox from '../Constants/UI/menu/MenuBox';
import { AskQuery, ContactPICContainer, LeftBoxDummy, MainConatiner, Query, Subject } from './contactPICStyle';


const ContactPIC = () => {
	const [subject, setSubject] = useState("");
	const [query, setQuery] = useState("");



	return (
		<MainConatiner>
			<ContactPICContainer Container>

				<MenuBox style={{ boxShadow: '1px 1px 5px 4px rgb(0 0 0 / 30 %)' }} />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu */}

				<AskQuery>
					<Typography style={{ marginBottom: 20, color: '#367D43', fontSize: 14, fontWeight: 600}}>
						Let us know if any of your detail is incorrect or if you are facing any trou
						ble in thia application. Our team will get in touch with you as soon as possible.
					</Typography>
						<Subject
							fullWidth
							id="standard-basic"
							label="Subject"
						variant="outlined"
							value={subject}
							onChange={(event) => setSubject(event.target.value)}
						/>
						<Query
							fullWidth label="Write Your Query Here"
							id="fullWidth"
							multiline={true}
							minRows={13}
							value={query}
							onChange={(event) => setQuery(event.target.value)}
						/>
				</AskQuery>

			</ContactPICContainer>

		</MainConatiner>
	)
}


export default ContactPIC