import React from 'react';
import { Container, HomeConatiner,  LeftBoxDummy,  } from './homeStyle';
import MainBox from './main/MainBox.jsx';
import MenuBox from './menu/MenuBox.jsx';


const Home = () => {
	return (
		<HomeConatiner >

			<Container >

				<MenuBox/>
				
				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu  */}

				<MainBox/>

			</Container>

		</HomeConatiner>
	)
}

export default Home