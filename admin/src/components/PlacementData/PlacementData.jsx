import React from 'react';
import DepartmentWise from './Statistics/DepartmentWise';
import PlacementPerYear from './Statistics/PlacementPerYear';
import './placementData.css'
import { CurretPath } from './placementDataStyle'
import { Divider } from '@mui/material';

// console.log(data, departments)
const PlacementData = () => {
	

	return (
		<div className='placement_data'>
			<div className="placement_data_container">
				<CurretPath >Add New Compnay</CurretPath>
				
				<DepartmentWise/>
				<Divider/>
				<PlacementPerYear/>
			</div>
		</div>
	)
}

export default PlacementData