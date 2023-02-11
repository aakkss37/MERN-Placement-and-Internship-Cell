import React from 'react'
import MenuBox from '../Constants/UI/menu/MenuBox'
import { DriveContainer, Drives, LeftBoxDummy, MainConatiner } from './PlacementDriveStyle'

const PlacementDrive = () => {
	return (
		<MainConatiner>
			<DriveContainer>
				<MenuBox/>
				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu */}
				<Drives>
					DriveContainer
				</Drives>
			</DriveContainer>
		</MainConatiner>
	)
}

export default PlacementDrive