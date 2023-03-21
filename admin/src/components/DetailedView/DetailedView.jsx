import { Box, Button, ButtonGroup } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DataContext } from '../../contextAPI/DataProvider';
import { API } from '../../services/api';
import Applicants from './Applicants/Applicants';
import DetailCard from './DetailCard/DetailCard';
import './detailedView.css'
import { CurretPath } from './detailedViewStyle';
import InterviewShortlist from './InterviewShortlist/InterviewShortlist';
import PlacedStudent from './Placed/PlacedStudent';
import TestShortlist from './TestShortlist/TestShortlist';

const DetailedView = () => {
	const [companyDetail, setCompanyDetail] = useState();
	const [searchParams] = useSearchParams();
	const [activeTab, setActiveTab] = useState('allApplicant')
	const companyId = searchParams.get('companyid');
	const context = useContext(DataContext);
	// console.log(companyId)
	useEffect(() => {
		const getDetails = async () => {
			try {
				const detail = await API.getCompanyDetails(companyId)
				// console.log("data from API call ===> ", detail.data)
				setCompanyDetail(detail.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		getDetails();
	}, [companyId])

	const changeTabHndler = (clickedOn)=> {

	}

	// console.log("Company detail ===> ", companyDetail)
	console.log("context.showTestList ===> ", context.showTestList)

	return (
		<div className='detailed_view'>
			<div className='detailed_view_container'>
				<CurretPath >Home &gt; Company Details &gt; {companyDetail?.companyName}</CurretPath>
				{
					companyDetail &&
					<>
						<DetailCard driveData={companyDetail} /> <br /><br /> <br />

						<ButtonGroup  aria-label="text button group">
							<Button variant='contained' onClick={()=> changeTabHndler("allApplicant")}>All Applicant</Button>
							<Button variant='outlined' onClick={()=> changeTabHndler("testShortlist")}>Test Shortlist</Button>
							<Button variant='outlined' onClick={()=> changeTabHndler("interwiewShortlist")}>Interview Shortlist</Button>
							<Button variant='outlined' onClick={()=> changeTabHndler("placeStudent")}>Placed Student</Button>
						</ButtonGroup>
						<br /> <br /> 

						<Applicants /> 
						<br /> <br /> <br /> <br />
						{
							context.showTestList && <TestShortlist />
						}
						<br /> <br /> <br /> <br />
						{
							context.showInterviewList && <InterviewShortlist />
						}
						<br /> <br /> <br /> <br />
						{
							context.showPlacementList && <PlacedStudent />
						}

					</>
				}
			</div>
		</div>
	)
}

export default DetailedView