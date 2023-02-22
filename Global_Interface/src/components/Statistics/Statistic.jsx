import React from 'react';
import './statistic.css';
import CountUp from 'react-countup';
import Bar from './Charts/Bar';
import Column from './Charts/Column';
import Line from './Charts/Line';
import Pie from './Charts/Pie';

const Statistic = () => {
	return (
		<div className='statistic'>
			<h1 className="gradient__text">STATISTICS</h1>
			<div>
				<div>
					<CountUp start={0}
						end={100}
						duration={5}
						useEasing={true}
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
			<div>
				<div><Bar/></div>
				<div><Column /></div>
				<div><Line /></div>
				<div><Pie /></div>
			</div>
		</div>
	)
}

export default Statistic