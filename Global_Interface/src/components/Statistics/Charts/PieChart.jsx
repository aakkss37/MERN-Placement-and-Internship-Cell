import React from 'react'
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { pieData } from './chartData'

const PieChartComponent = () => {
  return (
	  <div className='graph_container'>
		  <h2 className="chart-heading">Recruiters of the Year.</h2>
		  <ResponsiveContainer width="100%" height='90%'>
			  <PieChart width={1030} height={720} >
				  <Pie data={pieData} dataKey="offered" nameKey="company" cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#8884d8" label />
				  <Tooltip contentStyle={{ background: '#FF8A71', border: 'none', borderRadius: '3px', fontSize: 12, fontWeight: 600, }} />
				  <Legend payload={[{value: 2023, type: 'line'},]}/>
			  </PieChart>
		  </ResponsiveContainer>
	  </div>
  )
}

export default PieChartComponent