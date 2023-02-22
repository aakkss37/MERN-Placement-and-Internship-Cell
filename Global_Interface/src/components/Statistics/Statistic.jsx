import React, { useState } from 'react';
import './statistic.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';



const Statistic = () => {
	const [counterOn, setcounterOn] = useState(false);



	return (
		<div className='statistic' id='statistic'>
			<h1 className="gradient__text">STATISTICS</h1>
			<div>
				<ScrollTrigger onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(false)}>
					<div>
						{counterOn && <CountUp start={0} end={100} duration={4} useEasing={true} />}
					</div>
					<div>
						{counterOn && <CountUp start={0} end={100} duration={4} useEasing={true} />}
					</div>
					<div>
						{counterOn && <CountUp start={0} end={100} duration={4} useEasing={true} />}
					</div>
					<div>
						{counterOn && <CountUp start={0} end={100} duration={4} useEasing={true} />}
					</div>
				</ScrollTrigger>
			</div>

		</div>
	)
}

export default Statistic