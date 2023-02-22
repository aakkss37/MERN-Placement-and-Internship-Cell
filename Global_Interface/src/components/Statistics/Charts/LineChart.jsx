import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,  } from 'recharts';
import { data } from './chartData.js';
import './chart.css'



const LineChartComponent = () => {


	return (
			<div className='graph_container'>
				<h2>CTC Offered</h2>
			<ResponsiveContainer width="100%" height='90%' >
				<LineChart data={data} margin={{
					top: 5,
					right: 20,
					left: -30,
					bottom: 0,
				}}>
						{/* <CartesianGrid strokeDasharray="3 3" /> */}
						<XAxis dataKey="year" interval={'preserveStartEnd'} />
						<YAxis />
						<Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
						<Legend />
						<Line dataKey="highest" stroke="red" activeDot={{ r: 8 }} />
						<Line dataKey="lowest" stroke="green" activeDot={{ r: 8 }} />
						<Line dataKey="average" stroke="yellow" activeDot={{ r: 8 }} />
					</LineChart>
				</ResponsiveContainer>
			</div>
	)
}

export default LineChartComponent