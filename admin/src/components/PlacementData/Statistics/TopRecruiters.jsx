import React, { useState } from 'react'
import { Doughnut, Pie } from 'react-chartjs-2';
import { pieChartData } from '../data';


// const initialData = {
// 	labels: [],
// 	datasets: [
// 		{
// 			data: [],
// 			backgroundColor: [],
// 			hoverBackgroundColor: [],
// 		},
// 	],
// };


const TopRecruiters = () => {

	// const [data, setData] = useState(initialData);
	const [selectedYear, setSelectedYear] = useState("2022");

	const handleYearChange = (event) => {
		setSelectedYear(event.target.value);
		console.log(event.target.value)
	};

	// Extract data for the selected year
	const filteredData = pieChartData.filter(item => item.year.toString() === selectedYear);
	console.log(filteredData)
	// Update chart data
	const chartData = {
		labels: ["Critical case", "Urgent case", "Errors", "Reviewed", "Success"],
		datasets: [
			{
				data: [30, 30, 5, 15, 20],
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#CCE5FF",
					"#FF7F50",
					"#90EE90",
					"#20B2AA",
					"#BA55D3",
					"#00FFFF",
					"#FFD700",
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#CCE5FF",
					"#FF7F50",
					"#90EE90",
					"#20B2AA",
					"#BA55D3",
					"#00FFFF",
					"#FFD700",
				],
			},
		],
	};


	return (
		<div className="placement_data_graphs">
			<h2>Top Recruiters with Most Placements ({selectedYear})</h2>
			<label htmlFor="pie-chart-filter">Filter by Year: </label>
			<select id='pie-chart-filter' value={selectedYear} onChange={handleYearChange}>
				{pieChartData.map((item, index) => (
					<option key={index} value={item.year}>
						{item.year}
					</option>
				))}
			</select>
			<Doughnut data={chartData} />
		</div>
	)
}

export default TopRecruiters