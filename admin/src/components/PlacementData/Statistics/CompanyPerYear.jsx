import React from 'react'
import { Line } from 'react-chartjs-2';

const CompanyPerYear = () => {
	const chartData = {
		labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
		datasets: [{
			label: `Number of Company Visited in each Year`,
			fill: false,
			data: [121, 132, 183, 221, 168, 288, 341, 411, 517, 311, 382],
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
				text: 'Line Chart'
			}
		}
	};

	return (
		<div className="placement_data_graphs">
			<h2>Company Visited Per-Year </h2> <br />
			<Line type='line' data={chartData} options={options} />
		</div>
	)
}

export default CompanyPerYear