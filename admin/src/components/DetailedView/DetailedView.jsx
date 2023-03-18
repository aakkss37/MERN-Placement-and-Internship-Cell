import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API } from '../../services/api';

const DetailedView = () => {
	const [searchParams] = useSearchParams();
	const companyId = searchParams.get('company_id');

	useEffect(() => {
		const getDetails = async () => {
			try {
				const companyDetail = await API.getCompanyDetails(companyId)
				console.log(companyDetail.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		getDetails();
	}, [companyId])
  return (
	<div>DetailedView</div>
  )
}

export default DetailedView