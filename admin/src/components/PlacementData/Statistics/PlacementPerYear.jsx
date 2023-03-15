import React from 'react'
import { Bar } from 'react-chartjs-2'
import { placementEveryYear } from '../data';


const PlacementPerYear = () => {

	const chartData = {
		labels: Object.keys(placementEveryYear),
		datasets: [{
			label: `Number of students placed in each Year`,
			fill: false,
			data: Object.values(placementEveryYear),
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgba(54, 162, 235, 1)',
			borderWidth: 1
		}]
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Bar Chart'
			}
		}
	};

  return (
	  <div className="placement_data_graphs">
		  <h2>Placement Per-Year</h2> <br />
		  <Bar  type='line' data={chartData} options={options} />
	  </div>
  )
}

export default PlacementPerYear