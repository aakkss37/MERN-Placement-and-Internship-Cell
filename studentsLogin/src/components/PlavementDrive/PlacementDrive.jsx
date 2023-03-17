import React, { useEffect } from 'react'
import { API } from '../../../../admin/src/services/api';
import MenuBox from '../Constants/UI/menu/MenuBox'
import Cards from './Card/Card';
import { CurretPath, DriveContainer, Drives, LeftBoxDummy, MainConatiner } from './PlacementDriveStyle.js';


const PlacementDrive = () => {

	useEffect(() => {
		const getDriveList = async()=>{
			const driveList = await API.getPlacementDriveList()
			console.log(driveList.data)
		}
		getDriveList()
	}, []);


	return (
		<MainConatiner>
			<DriveContainer>

				<MenuBox style={{ boxShadow: '1px 1px 5px 4px rgb(0 0 0 / 30 %)' }} />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu */}

				<Drives>
					<CurretPath style={{margin: '20px', color: 'gray', fontWeight: 600,}}>PLACEMENT DRIVE</CurretPath>
					<Cards />
					<Cards />
					<Cards />
				</Drives>

			</DriveContainer>

		</MainConatiner>
	)
}

export default PlacementDrive