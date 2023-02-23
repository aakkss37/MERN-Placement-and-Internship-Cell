import React from 'react'
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from './chartData'

const AreaChartComponent = () => {
  return (
	  <div className='graph_container'>
		  <h2 className="chart-heading">Total Recruiters at KAHE</h2>
		  <ResponsiveContainer width="100%" height='80%'>
			  <AreaChart data={data} margin={{
				  top: 5,
				  right: 20,
				  left: -20,
				  bottom: 0,
			  }}>
				  <XAxis dataKey="year" />
				  <YAxis />
				  <Tooltip contentStyle={{ background: '#FF8A71', border: 'none', borderRadius: '3px', fontSize: 12, fontWeight: 600, }} />
				  <Legend  />
				  <Area dataKey="Recruiters" stroke="#8884d8" fill="#8884d8" />
			  </AreaChart>
		  </ResponsiveContainer>
	  </div>

  )
}

export default AreaChartComponent