import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API } from '../../services/api';
import Applicants from './Applicants/Applicants';
import DetailCard from './DetailCard/DetailCard';
import './detailedView.css'
import { CurretPath } from './detailedViewStyle';

const DetailedView = () => {
	const [companyDetail, setCompanyDetail] = useState();
	const [searchParams] = useSearchParams();
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


	console.log("Company detail ===> ", companyDetail)

	return (
		<div className='detailed_view'>
			<div className='detailed_view_container'>
				<CurretPath >Home &gt; Company Details &gt; {companyDetail?.companyName}</CurretPath>
				{
					companyDetail &&
					<>
						<DetailCard driveData={companyDetail} /> <br />
						<Applicants />
					</>
				}
			</div>
		</div>
	)
}

export default DetailedView