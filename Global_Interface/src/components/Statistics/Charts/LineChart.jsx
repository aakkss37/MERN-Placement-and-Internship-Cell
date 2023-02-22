import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,  } from 'recharts';
import { data } from './chartData.js';




const LineChartComponent = () => {
	return (
		<>
			<div>
				<h2>Offered package for KAHE Students (L.P.A)</h2>
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