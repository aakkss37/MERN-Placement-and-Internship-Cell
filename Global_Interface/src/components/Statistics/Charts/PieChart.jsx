import React from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { data } from './chartData'

const PieChartComponent = () => {
  return (
	  <div>
		  <h2 className="chart-heading">Bar Chart</h2>
		  <ResponsiveContainer width="100%" aspect={3}>
			  <PieChart width={1030} height={720}>
				  <Pie data={data} dataKey="highest" nameKey="year" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
				  <Tooltip />
			  </PieChart>
		  </ResponsiveContainer>
	  </div>
  )
}

export default PieChartComponent