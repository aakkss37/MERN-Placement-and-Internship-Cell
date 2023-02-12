import React from 'react';
import { Container, ExperienceConatiner, LeftBoxDummy, MainCardContainer, } from './ExperienceStyle';
import MenuBox from '../Constants/UI/menu/MenuBox';
import Card from './card/Card';
import Search from './Search/Search';

const Home = () => {
	return (
		<ExperienceConatiner >

			<Container >

				<MenuBox />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu  */}

				<MainCardContainer>
					<Search/>
					<Card />
					<Card />
					<Card />
				</MainCardContainer>

			</Container>

		</ExperienceConatiner>
	)
}

export default Home