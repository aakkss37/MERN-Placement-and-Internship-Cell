import React from 'react';
import './statistic.css';
import CountUp from 'react-countup';


const Statistic = () => {
	return (
		<div className='statistic' id='statistic'>
			<h1 className="gradient__text">STATISTICS</h1>
			<div>
				<div>
					<CountUp start={0} end={100} duration={5} useEasing={true}
					/>
				</div>
				<div>
					<CountUp start={0} end={321} duration={5} useEasing={true} />
				</div>
				<div>
					<CountUp start={0} end={321} duration={5} useEasing={true}/>
				</div>
				<div>
					<CountUp start={0} end={321} duration={5} useEasing={true}/>
				</div>
			</div>
			
		</div>
	)
}

export default Statistic