import React, { useState } from 'react';
import './statistic.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';



const Statistic = () => {
	const [counterOn, setcounterOn] = useState(false);



	return (
		<div className='statistic' id='statistic'>
			<h1 className="gradient__text">STATISTICS</h1>
			<ScrollTrigger onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(false)}>
				<div className='statistic_counter'>
					<div className='counter_box'>
						{counterOn && <CountUp start={0} end={320} duration={4} useEasing={true} />}<span>+</span>
						<p>Companies Chose KAHE students</p>
					</div>
					<div className='counter_box'>
						{counterOn && <CountUp start={0} end={150} duration={4} useEasing={true} />}<span>+</span>
						<p>Companies offering CTC 5 Lacs p.a. or above</p>
					</div>
					<div className='counter_box'>
						{counterOn && <CountUp start={0} end={750} duration={4} useEasing={true} />}<span>+</span>
						<p>Numbar of Offers(p.a) for KAHE Students</p>
					</div>
					<div className='counter_box'>
						<span>₹</span>{counterOn && <CountUp start={0} end={34} duration={4} useEasing={true} />}
						<p>Heighest CTC <b>(Lakh p.a)</b></p>
					</div>
				</div>
			</ScrollTrigger>

		</div>
	)
}

export default Statistic