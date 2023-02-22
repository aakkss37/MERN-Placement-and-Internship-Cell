import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from './chartData'

const BarChartComponent = () => {
  return (
	  <div className='graph_container'>
		  <h2 className="chart-heading">Bar Chart</h2>
		  <ResponsiveContainer width="100%" height='90%'>
			  <BarChart
				  data={data}
				  margin={{
					  top: 5,
					  right: 20,
					  left: -30,
					  bottom: 0,
				  }}
			  >
				  {/* <CartesianGrid strokeDasharray="3 3" /> */}
				  <XAxis dataKey="year" />
				  <YAxis />
				  <Tooltip />
				  <Legend />
				  <Bar dataKey="highest" fill="#8884d8" />
				  <Bar dataKey="lowest" fill="#82ca9d" />
				  <Bar dataKey="average" fill="#FF8A71" />
			  </BarChart>
		  </ResponsiveContainer>
	  </div>
  )
}

export default BarChartComponent