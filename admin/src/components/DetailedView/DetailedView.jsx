import React, { useEffect, useState, useContext } from 'react'
import { Button, ButtonGroup, } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { DataContext } from '../../contextAPI/DataProvider';
import { API } from '../../services/api';
import Applicants from './Applicants/Applicants';
import DetailCard from './DetailCard/DetailCard';
import './detailedView.css'
import { CurretPath } from './detailedViewStyle';
import InterviewShortlist from './InterviewShortlist/InterviewShortlist';
import PlacedStudent from './Placed/PlacedStudent';
import TestShortlist from './TestShortlist/TestShortlist';
import FormDialog from '../ui/FormDialog';
import SuccessMsg from '../ui/SuccessMsg';

const DetailedView = () => {
	const [openFormDialog, setOpenFormDialog] = useState(false)
	const [companyDetail, setCompanyDetail] = useState();
	const [searchParams] = useSearchParams();
	const [activeTab, setActiveTab] = useState('allApplicant')
	const navigate = useNavigate()
	const companyId = searchParams.get('companyid');
	// console.log(companyId)
	useEffect(() => {
		const getDetails = async () => {
			try {
				const detail = await API.getCompanyDetails(companyId)
				console.log("data from API call ===> ", detail.data)
				setCompanyDetail(detail.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		getDetails();
	}, [companyId])


	const context = useContext(DataContext);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		context.setOpenSucessSnackbar(false)
		setOpenFormDialog(false)
	};

	const documentDelateHandler = async()=> {
		try {
			const responce = await API.deleteCompanyDetails(companyDetail._id)
			console.log(responce.date);
			navigate('/home')
		} catch (error) {
			console.log(error.message)
		}
	}


	// console.log("Company detail ===> ", companyDetail)

	return (
		<div className='detailed_view'>
			{/* Form sucessfull submit msg */}
			<SuccessMsg
				message="Applicant Sucessfully Added for Next Round."
				open={context.openSucessSnackbar}
				onClose={handleClose}
			/>


			{/* Form Dialog */}
			<FormDialog
				openFormDialog={openFormDialog}
				onClose={handleClose}
				onContinue={documentDelateHandler}
				companyName={companyDetail?.companyName}
				companyID={companyDetail?._id}
				date={companyDetail?.Date}
			/>


			<div className='detailed_view_container'>
				<CurretPath >Home &gt; Company Details &gt; {companyDetail?.companyName}</CurretPath>
				{
					companyDetail &&
					<>
						<DetailCard 
							driveData={companyDetail} 
							onDeleteIconClicked={()=> setOpenFormDialog(true)} 
						/> 
						<br /><br /> <br />

						<ButtonGroup aria-label="text button group" sx={{ marginLeft: '5%' }}>
							<Button variant={activeTab === "allApplicant" ? "contained" : "outlined"} onClick={() => setActiveTab("allApplicant")}>All Applicant</Button>
							<Button variant={activeTab === "testShortlist" ? "contained" : "outlined"} onClick={() => setActiveTab("testShortlist")}>Test Shortlist</Button>
							<Button variant={activeTab === "interwiewShortlist" ? "contained" : "outlined"} onClick={() => setActiveTab("interwiewShortlist")}>Interview Shortlist</Button>
							<Button variant={activeTab === "placeStudent" ? "contained" : "outlined"} onClick={() => setActiveTab("placeStudent")}>Placed Student</Button>
						</ButtonGroup>
						<br /> <br /> <br />

						{activeTab === "allApplicant" && <Applicants setActiveTab={setActiveTab}/>}
						{activeTab === "testShortlist" && <TestShortlist setActiveTab={setActiveTab} />}
						{activeTab === "interwiewShortlist" && <InterviewShortlist setActiveTab={setActiveTab}/>}
						{activeTab === "placeStudent" && <PlacedStudent setActiveTab={setActiveTab}/>}

					</>
				}
			</div>
		</div>
	)
}

export default DetailedView