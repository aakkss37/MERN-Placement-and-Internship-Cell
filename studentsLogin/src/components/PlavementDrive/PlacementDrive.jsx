import React, { useEffect, useState } from 'react'
import { API } from '../../services/api';
import MenuBox from '../Constants/UI/menu/MenuBox'
import Cards from './Card/Card';
import { CurretPath, DriveContainer, Drives, LeftBoxDummy, MainConatiner } from './PlacementDriveStyle.js';


const PlacementDrive = () => {
	const [placementDriveList, setPlacementDriveList] = useState([]);

	useEffect(() => {
		const getDriveList = async()=>{
			const driveList = await API.getPlacementDriveList()
			console.log(driveList.data)
			setPlacementDriveList(driveList.data);
		}
		getDriveList()
	}, []);

	console.log(placementDriveList)
	return (
		<MainConatiner>
			<DriveContainer>

				<MenuBox style={{ boxShadow: '1px 1px 5px 4px rgb(0 0 0 / 30 %)' }} />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu */}

				<Drives>
					<CurretPath style={{margin: '20px', color: 'gray', fontWeight: 600,}}>PLACEMENT DRIVE</CurretPath>
					{
						placementDriveList.map((drive,index) => (
							<Cards key={index} driveData = {drive}/>
						))
					}
				</Drives>

			</DriveContainer>

		</MainConatiner>
	)
}

export default PlacementDrive