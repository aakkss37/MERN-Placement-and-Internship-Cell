import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, CardHeader, Collapse, Divider, IconButton, styled, Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CompanyName, DetailHead, GeneralText, OpeningDate } from './DetailCardStyle';
import { formatDate } from '../../../utils/commonUtil';




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




const DetailCard = (props) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [eligibleDepartment, setEligibleDepartment] = useState("")
	// console.log(props.driveData)

	const handleExpandClick = () => {
		setIsExpanded(!isExpanded);
	};



	useEffect(() => {
		let department = ""
		props.driveData.department?.forEach(element => {
			department = department + "||" + element
		});
		setEligibleDepartment(department)
	}, [props.driveData.department]);

	return (
		<Card sx={{ maxWidth: '90%', marginLeft: '5%' }}>
			<CardHeader
				avatar={
					<ApartmentIcon style={{ color: '#1976d2', fontSize: 30 }} />
				}

				title={<CompanyName>{props.driveData.companyName}</CompanyName>}
				subheader={<OpeningDate>{formatDate(props.driveData.Date)}</OpeningDate>}
			/>

			<CardContent>
				<Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
					{props.driveData.aboutCompany}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="delete">
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="edit">
					<EditIcon />
				</IconButton>

				<ExpandMore
					expand={isExpanded}
					onClick={handleExpandClick}
					aria-expanded={isExpanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={isExpanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Box>
						<DetailHead>Eligiblity:</DetailHead>
						<GeneralText>CGPA: {props.driveData.cgpa}</GeneralText>
						<GeneralText>Active Backlog: {props.driveData.activeBack ? "ALLOWED" : "NOT ALLOWED"}</GeneralText>
						<GeneralText>Department: {eligibleDepartment} </GeneralText>
						<GeneralText>Pass out: {props.driveData.passoutYear}</GeneralText>

					</Box>
					<Divider style={{ marginTop: 4, marginBottom: 4 }} />
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

export default DetailCard