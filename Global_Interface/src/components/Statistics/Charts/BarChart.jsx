import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from './chartData'

const BarChartComponent = () => {
  return (
	  <div className='graph_container'>
		  <h2 className="chart-heading">Heighest, Lowest & Average CTC (Lacs p.a)</h2>
		  <ResponsiveContainer width="100%" height='80%'>
			  <BarChart
				  data={data}
				  margin={{
					  top: 5,
					  right: 20,
					  left: -20,
					  bottom: 0,
				  }}
			  >
				  {/* <CartesianGrid strokeDasharray="3 3" /> */}
				  <XAxis dataKey="year" />
				  <YAxis />
				  <Tooltip contentStyle={{ background: '#FF8A71', border: 'none', borderRadius: '3px', fontSize: 12, fontWeight: 600, }} />
				  <Legend  />
				  <Bar dataKey="Lowest" fill="red" />
				  <Bar dataKey="Heighest" fill="green" />
				  <Bar dataKey="Avrage" fill="steelblue" />
			  </BarChart>
		  </ResponsiveContainer>
	  </div>
  )
}

export default BarChartComponent