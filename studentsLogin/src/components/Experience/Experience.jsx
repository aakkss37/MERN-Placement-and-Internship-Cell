import React from 'react';
import { Container, ExperienceConatiner, LeftBoxDummy, MainCardContainer, } from './ExperienceStyle';
import MenuBox from '../Constants/UI/menu/MenuBox';
import Card from './card/Card';

const Home = () => {
	return (
		<ExperienceConatiner >

			<Container >

				<MenuBox />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu  */}

				<MainCardContainer>
					<Card />
					<Card />
					<Card />
				</MainCardContainer>

			</Container>

		</ExperienceConatiner>
	)
}

export default Home