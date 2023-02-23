import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
import { data } from './chartData.js';
import './chart.css'



const LineChartComponent = () => {


	return (
		<div className='graph_container'>
			<h2>CTC Above 5, 10 & 15 Lacs p.a</h2>
			<ResponsiveContainer width="100%" height='80%' >
				<LineChart data={data} margin={{
					top: 5,
					right: 20,
					left: -20,
					bottom: 0,
				}}>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis dataKey="year" interval={'preserveStartEnd'} />
					<YAxis />
					<Tooltip contentStyle={{ background: '#FF8A71', border: 'none', borderRadius: '3px', fontSize: 12, fontWeight: 600,}} />
					<Legend />
					<Line dataKey="Above_5L" stroke="red" activeDot={{ r: 8 }} />
					<Line dataKey="Above_10L" stroke="green" activeDot={{ r: 8 }} />
					<Line dataKey="Above_15L" stroke="steelblue" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default LineChartComponent