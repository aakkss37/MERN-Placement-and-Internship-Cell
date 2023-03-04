import React, { useState } from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from '@mui/material'
import { ApplyButton, CompanyName, DetailHead, GeneralText, OpeningDate } from './CardStyle';
import googleImage from '../../../asset/google_image.png'


const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));



const Cards = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleExpandClick = () => {
		setIsExpanded(!isExpanded);
	};



	return (
		<Card sx={{ maxWidth: '95%', borderRadius: 2, margin: 2}}>
			<CardHeader
				avatar={
					<ApartmentIcon style={{ color: '#367D43', fontSize: 30 }} />
				}
				title={<CompanyName>Google</CompanyName>}
				subheader={<OpeningDate>September 14, 2016</OpeningDate>}
				action={
					<ApplyButton>Apply</ApplyButton>
				}
			/>
			<CardMedia
				component="img"
				height="194"
				image="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
				// image={googleImage}
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary" style={{textAlign: 'justify'}}>
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the mussels,
					if you like.
				</Typography>
				<CardActions disableSpacing>
					<ExpandMore
						expand={isExpanded}
						onClick={handleExpandClick}
						aria-expanded={isExpanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
			</CardContent>
			<Collapse in={isExpanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Box>
						<DetailHead>Eligiblity:</DetailHead>
						<GeneralText>CGPA: 8.0</GeneralText>
						<GeneralText>Active Backlog: Not Allowed</GeneralText>
						<GeneralText>Department: B.Tech || BE || M.Tech || ME (CS/ECE/EE) || B.Sc cs || M.Sc cs || BCS || BCA || MCA || IT </GeneralText>
						<GeneralText>Pass out: 2023</GeneralText>

					</Box>
					<Divider style={{marginTop: 4, marginBottom: 4}} />
					<Box>
						<DetailHead>Job Detail:</DetailHead>
						<GeneralText>Job Type: Full time || Part time || Internship</GeneralText>
						<GeneralText>Job Role: Full stack developer</GeneralText>
						<GeneralText>CTC: INR 1600000</GeneralText>
						<GeneralText>Job Location: Pune</GeneralText>
					</Box>
					<Divider style={{ marginTop: 4, marginBottom: 4 }} />
					<Box>
						<DetailHead>Responsibilities:</DetailHead>
						<GeneralText>Creating a Web Framework | Prototype

							1. Analyze requirements, produce accurate, unambiguous technical design specifications to the appropriate detail

							2. Plans, designs, develops, integrates application components and tests software systems or applications for software enhancements and new

							products. Write, debug, and deploy code to production; deliver timely fixes.

							3. Deliver customer value in the form of high-quality software components and services in adherence with policies on security, performance, longevity and integration testing.

							4. Drives unit test automation. Be well versed in the latest development methodologies like Agile, Scrum, DevOps and test driven development.

							5. Adhere to DOD (story definition of done) as part of the sprint, including unit tests, functional testing, code reviews, no regressions, bug fixes,

							documentation and adhere to best coding practices.

							6. Perform peer code reviews in order to ensure quality standards

							7. Should also enable solutions that take into account APIs, security, scalability, manageability, usability, and other critical factors that contribute to

							complete solutions

							8. Master the domain knowledge in the area of assignment

							9. Take ownership of what the team builds after the release; consider customer adoption as success criteria

							10. Volunteer for work in the backlog and commit to quality delivery; Coordinate efforts across the team to ensure completion and effectiveness

							11. Participate and contribute to scrum meetings i.e. daily stand-up, sprint planning, readouts and retrospectives

							12. Work collaboratively across the Technology and Product organizations to ensure alignment towards business goals

							13. Should understand fundamentals of iterative product development.

							14. Should understand the value of commitments to delivery made by a development team

							15. As a member of technical staff you'll have the opportunity to grow as a software engineer in a culture of technical excellence, high team

							performance and impeccable work ethics.
						</GeneralText>
						
					</Box>
					<Divider style={{ marginTop: 4, marginBottom: 4 }} />
					<Box>
						<DetailHead>Requirements: </DetailHead>
						<GeneralText>
							Experience with developing frontend/backend applications. We require capabilities in Flutter.
							Knowledge of software design and standard development practices; programming techniques and systems; and language platforms.
							Ability to translate business requirements into scalable and extensible design.
							Ability to apply these skills to develop and deploy hybrid-mobile applications.
							Experience with SaaS products such as AWS and Flutter is also recommended.
							Must have good analytical skills; be able to identify key issues and information.
						</GeneralText>
					</Box>
					
				</CardContent>
			</Collapse>

		</Card>
	)
}

export default Cards