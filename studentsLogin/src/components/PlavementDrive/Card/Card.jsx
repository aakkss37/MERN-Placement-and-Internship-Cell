import React, { useState } from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from '@mui/material'
import { ApplyButton, CompanyName, DetailHead, GeneralText, OpeningDate } from './CardStyle';
// import { formatDate } from '../../../utils/commonUtil';



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



const Cards = (props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleExpandClick = () => {
		setIsExpanded(!isExpanded);
	};

	let eligibleDepartment = "";
	props.driveData.department?.forEach(element => {
		eligibleDepartment = eligibleDepartment + "||" + element
	});
	// console.log(props.)
	return (
		<Card sx={{ maxWidth: '95%', borderRadius: 2, margin: 2}}>
			<CardHeader
				avatar={
					<ApartmentIcon style={{ color: '#367D43', fontSize: 30 }} />
				}
				title={<CompanyName>{props.driveData.companyName}</CompanyName>}
				subheader={<OpeningDate>Nov/12/2023</OpeningDate>}
				action={
					<ApplyButton>Apply</ApplyButton>
				}
			/>
			<CardMedia
				component="img"
				height="194"
				image={props.driveData.companyLogo}
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary" style={{textAlign: 'justify'}}>
					{props.driveData.aboutCompany}
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
						<GeneralText>{props.driveData.cgpa}</GeneralText>
						<GeneralText>Active Backlog: {props.driveData.activeBack ? "ALLOWED" : "NOT ALLOWED"}</GeneralText>
						<GeneralText>Department: {eligibleDepartment} </GeneralText>
						<GeneralText>Pass out: {props.driveData.passoutYear}</GeneralText>

					</Box>
					<Divider style={{marginTop: 4, marginBottom: 4}} />
					<Box>
						<DetailHead>Job Detail:</DetailHead>
						<GeneralText>Job Type: {props.driveData.jobType}</GeneralText>
						<GeneralText>Job Role: {props.driveData.jobRole}</GeneralText>
						<GeneralText>CTC: INR {props.driveData.CTC}</GeneralText>
						<GeneralText>Job Location: {props.driveData.jobLocation}</GeneralText>
					</Box>
					<Divider style={{ marginTop: 4, marginBottom: 4 }} />
					<Box>
						<DetailHead>Responsibilities:</DetailHead>
						<GeneralText>
							{props.driveData.responsibilities}
						</GeneralText>
						
					</Box>
					<Divider style={{ marginTop: 4, marginBottom: 4 }} />
					<Box>
						<DetailHead>Requirements: </DetailHead>
						<GeneralText>
							{props.driveData.requirement}
						</GeneralText>
					</Box>
					
				</CardContent>
			</Collapse>

		</Card>
	)
}

export default Cards