import React from 'react';
import { Container, CurretPath, ExperienceConatiner, LeftBoxDummy, MainCardContainer, } from './ExperienceStyle';
import MenuBox from '../Constants/UI/menu/MenuBox';
import Card from './card/Card';
import Search from './Search/Search';
import { Box } from '@mui/material';

const Home = () => {
	return (
		<ExperienceConatiner >

			<Container >

				<MenuBox />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu  */}

				<MainCardContainer>
					<Box style={{display: 'flex', justifyContent: 'space-between', marginTop: 30, marginBottom: 30}}>
						<CurretPath>EXPERIENCE</CurretPath>
						<Search />
					</Box>
					<Card />
					<Card />
					<Card />
				</MainCardContainer>

			</Container>

		</ExperienceConatiner>
	)
}

export default Home