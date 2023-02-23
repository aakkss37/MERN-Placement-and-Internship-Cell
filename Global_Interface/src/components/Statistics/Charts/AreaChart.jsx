import React from 'react'
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from './chartData'

const AreaChartComponent = () => {
  return (
	  <div className='graph_container'>
		  <h2 className="chart-heading">Area Chart</h2>
		  <ResponsiveContainer width="100%" height='90%'>
			  <AreaChart data={data} margin={{
				  top: 5,
				  right: 20,
				  left: -30,
				  bottom: 0,
			  }}>
				  <XAxis dataKey="year" />
				  <YAxis />
				  <Tooltip />
				  <Legend  />
				  <Area dataKey="max" stroke="#8884d8" fill="#8884d8" />
			  </AreaChart>
		  </ResponsiveContainer>
	  </div>

  )
}

export default AreaChartComponent