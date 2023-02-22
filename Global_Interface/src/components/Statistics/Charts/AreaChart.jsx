import React from 'react'
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from './chartData'

const AreaChartComponent = () => {
  return (
	  <div className='graph_container'>
		  <h2 className="chart-heading">Area Chart</h2>
		  <ResponsiveContainer width="100%" height='90%'>
			  <AreaChart data={data}>
				  <XAxis dataKey="year" />
				  <YAxis />
				  <Tooltip />
				  <Legend />
				  <Area dataKey="highest" stroke="#8884d8" fill="#8884d8" />
			  </AreaChart>
		  </ResponsiveContainer>
	  </div>

  )
}

export default AreaChartComponent