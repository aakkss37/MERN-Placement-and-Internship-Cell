import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, } from 'recharts';
import { data } from './chartData.js';



const LineChartComponent = () => {
	return (
		<>
			<div>
				<h1>Offered package for KAHE Students (L.P.A)</h1>
				<ResponsiveContainer width="100%" aspect={3}>
					<LineChart data={data} >
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
			
		</>
	)
}

export default LineChartComponent