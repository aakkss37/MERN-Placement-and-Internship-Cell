import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from '@mui/material';
import { useSearchParams } from 'react-router-dom'
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



	// console.log("Company detail ===> ", companyDetail)

	return (
		<div className='detailed_view'>
			<div className='detailed_view_container'>
				<CurretPath >Home &gt; Company Details &gt; {companyDetail?.companyName}</CurretPath>
				{
					companyDetail &&
					<>
						<DetailCard driveData={companyDetail} /> <br /><br /> <br />

						<ButtonGroup aria-label="text button group" sx={{ marginLeft: '5%' }}>
							<Button variant={activeTab === "allApplicant" ? "contained" : "outlined"} onClick={() => setActiveTab("allApplicant")}>All Applicant</Button>
							<Button variant={activeTab === "testShortlist" ? "contained" : "outlined"} onClick={() => setActiveTab("testShortlist")}>Test Shortlist</Button>
							<Button variant={activeTab === "interwiewShortlist" ? "contained" : "outlined"} onClick={() => setActiveTab("interwiewShortlist")}>Interview Shortlist</Button>
							<Button variant={activeTab === "placeStudent" ? "contained" : "outlined"} onClick={() => setActiveTab("placeStudent")}>Placed Student</Button>
						</ButtonGroup>
						<br /> <br /> <br />

						{activeTab === "allApplicant" && <Applicants setActiveTab={setActiveTab}/>}
						{activeTab === "testShortlist" && <TestShortlist />}
						{activeTab === "interwiewShortlist" && <InterviewShortlist />}
						{activeTab === "placeStudent" && <PlacedStudent />}

					</>
				}
			</div>
		</div>
	)
}

export default DetailedView