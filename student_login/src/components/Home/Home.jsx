import React from 'react';
import { Container, HomeConatiner, LeftBox, LeftBoxDummy, MainBox, } from './homeStyle';


const Home = () => {
	return (
		<HomeConatiner >

			<Container >
				<LeftBox>
					<div>Menu</div>
					<div>Menu</div>
					<div>Menu</div>
					<div>Menu</div>
					<div>Menu</div>
					<div>Menu</div>
					<div>Menu</div>
					<div>Menu</div>
				</LeftBox>
				<LeftBoxDummy />


				<MainBox>
					<div>Blog</div>
					<div>Blog</div>
					<div>Blog</div>
					<div>Blog</div>
					<div>Blog</div>
					<div>Blog</div>
					<div>Blog</div>
					<div>Blog</div>
					<div>Blog</div>
					<div>Blog</div>
					<div>Blog</div>
				</MainBox>
			</Container>

		</HomeConatiner>
	)
}

export default Home