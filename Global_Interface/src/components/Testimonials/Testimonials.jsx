import React from 'react'
import './testimonials.css'
import Carousel from "react-elastic-carousel";
import { testimonyData } from './TestimonailData';
import Testimony from './testimony/Testimony';


const breakPoints = [
	{ width: 550, itemsToShow: 1, },
	{ width: 768, itemsToShow: 2, },
	{ width: 1050, itemsToShow: 3, }
];


const Testimonials = () => {

	


	return (
		<div className='testimonials ' id='testimonials'>

			<div className='join_us_bar'>
				<div className="join_us_text">
					<h2>Hey Listen! </h2>
					<p>Isn't It grate! Our students are doing tremendously nice in there field.</p><br />
					<span><b>Come, Join our community of successful students! Reach out to us and learn more about how we're shaping the next generation of leaders.</b></span>
				</div>
				<div className="join_us_button">
					<a href='#home' >Join Us</a>
				</div>
			</div>

			<div className='testimony_container section__padding'>
				<div className="carousel-wrapper">
					<Carousel breakPoints={breakPoints}>
						{
							testimonyData.map( item => 
								<Testimony 
									key={item.name} 
									img={item.img}
									name={item.name}
									branch={item.branch}
									review={item.review}
									placedIn={item.placedIn}
								/>
							)
						}
					</Carousel>
				</div>
			</div>


		</div>
	)
}

export default Testimonials