import React from 'react';
import { Container, HomeConatiner,  LeftBoxDummy,  } from './homeStyle';
import MainBox from './main/MainBox';
import MenuBox from './menu/MenuBox';


const Home = () => {
	return (
		<HomeConatiner >

			<Container >

				<MenuBox style={{ boxShadow: '1px 1px 5px 4px rgb(0 0 0 / 30 %)' }}/>
				
				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu  */}

				<MainBox/>

			</Container>

		</HomeConatiner>
	)
}

export default Home