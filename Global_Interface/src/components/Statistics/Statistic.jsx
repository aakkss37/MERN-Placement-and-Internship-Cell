import React, { useState } from 'react';
import './statistic.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import LineChartComponent from './Charts/LineChart';
import AreaChartComponent from './Charts/AreaChart';
import BarChartComponent from './Charts/BarChart';
import PieChartComponent from './Charts/PieChart';



const counterData = {
	totalCompany: 600,
	offerAbove5: 400,
	totalOffer: 1750,
	heighestCTC: 62,
}




const Statistic = () => {
	const [countOn, setCountOn] = useState(false);



	return (
		<div className='statistic' id='statistic'>

			<h1 className="gradient__text">STATISTICS</h1>
			<ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
				<div className='statistic_counter'>
					<div className='counter_box'>
						{countOn && <CountUp start={0} end={counterData.totalCompany} duration={4} useEasing={true} />}<span>+</span>
						<p>Companies Chose KAHE students</p>
					</div>
					<div className='counter_box'>
						{countOn && <CountUp start={0} end={counterData.offerAbove5} duration={4} useEasing={true} />}<span>+</span>
						<p>Companies offering CTC 5 Lacs p.a. or above</p>
					</div>
					<div className='counter_box'>
						{countOn && <CountUp start={0} end={counterData.totalOffer} duration={4} useEasing={true} />}<span>+</span>
						<p>Numbar of Offers(p.a) for KAHE Students</p>
					</div>
					<div className='counter_box'>
						<span>₹</span>{countOn && <CountUp start={0} end={counterData.heighestCTC} duration={4} useEasing={true} />}
						<p>Heighest CTC <b>(Lakh p.a)</b></p>
					</div>
				</div>
			</ScrollTrigger>


			<div className='statistic_graph' >
				<LineChartComponent />
				<AreaChartComponent />
				<BarChartComponent />
				<PieChartComponent />
			</div>
		
		</div>
	)
}

export default Statistic