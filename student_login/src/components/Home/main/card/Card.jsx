import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Card = () => {
	return (
		<Box>
			<Box>
				<Box>User pic</Box>
				<Box>
					<Typography>Company Name</Typography>
					<Typography>User name || Department</Typography>
				</Box>
			</Box>
			<Divider/>
			<Box>
				<Typography>
					To insert an icon, add the name of the icon class to any inline HTML element.

					The  and  elements are widely used to add icons.

					All the icons in the icon libraries below, are scalable vector icons that can be customized with CSS (size, color, shadow, etc.)

					Font Awesome 5 Icons
					To use the Free Font Awesome 5 icons, go to fontawesome.com and sign in to get a code to use in your web pages.

					Read more about how to get started with Font Awesome in our Font Awesome 5 chapter.

					Note: No downloading or installation is required!
					The App Bar displays information and actions relating to the current screen. Material UI for React has this component available for us and it is very easy to integrate. We can use the AppBar Component in ReactJS using the following approach.

					Creating React Application And Installing Module:

					Step 1: Create a React application using the following command:

					npx create-react-app foldername
					Step 2: After creating your project folder i.e. foldername, move to it using the following command:


					cd foldername
					Step 3: After creating the ReactJS application, Install the MUI modules using the following command:

					npm install @mui/material
					npm install @mui/icons-material
					Project Structure: It will look like the following.
				</Typography>
			</Box>
		</Box>
	)
}

export default Card