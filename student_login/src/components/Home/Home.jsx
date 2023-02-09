import React from 'react'
import {  } from '@mui/material';
import { Container, HomeConatiner, LeftBox, MainBox, RightBox } from './homeStyle'

const Home = () => {
	return (
		<HomeConatiner >
			<Container >
				<LeftBox>
					menu
				</LeftBox>
				<MainBox>
					blog
				</MainBox>
				<RightBox>
					something
				</RightBox>
			</Container>
		</HomeConatiner>
	)
}

export default Home