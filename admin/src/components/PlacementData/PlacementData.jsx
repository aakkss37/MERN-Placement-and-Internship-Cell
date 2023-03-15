import React from 'react';
import DepartmentWise from './Statistics/DepartmentWise';
import PlacementPerYear from './Statistics/PlacementPerYear';
import './placementData.css'
import { CurretPath } from './placementDataStyle'
import { Divider } from '@mui/material';
import CompanyPerYear from './Statistics/CompanyPerYear';
import TopRecruiters from './Statistics/TopRecruiters';

// console.log(data, departments)
const PlacementData = () => {
	

	return (
		<div className='placement_data'>
			<div className="placement_data_container">
				<CurretPath >Placement Report</CurretPath>
				
				<DepartmentWise/>
				<Divider/>
				<PlacementPerYear/>
				<Divider/>
				<CompanyPerYear/>
				<Divider/>
				<TopRecruiters/>
			</div>
		</div>
	)
}

export default PlacementData