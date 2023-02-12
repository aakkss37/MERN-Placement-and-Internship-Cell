import React from 'react'


import MenuBox from '../Constants/UI/menu/MenuBox'
import Cards from './Card/Card';
import { DriveContainer, Drives, LeftBoxDummy, MainConatiner } from './PlacementDriveStyle.js';


const PlacementDrive = () => {
	return (
		<MainConatiner>

			<DriveContainer>

				<MenuBox style={{ boxShadow: '1px 1px 5px 4px rgb(0 0 0 / 30 %)' }} />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu */}

				<Drives>
					<Cards/>
					<Cards/>
					<Cards/>
				</Drives>

			</DriveContainer>

		</MainConatiner>
	)
}

export default PlacementDrive