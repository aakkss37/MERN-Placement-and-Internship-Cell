import React from 'react';
import DepartmentWise from './Statistics/DepartmentWise';
import './placementData.css'
import { CurretPath } from './placementDataStyle'

// console.log(data, departments)
const PlacementData = () => {
	

	return (
		<div className='placement_data'>
			<div className="placement_data_container">
				<CurretPath >Add New Compnay</CurretPath>
				
				<DepartmentWise/>
			</div>
		</div>
	)
}

export default PlacementData