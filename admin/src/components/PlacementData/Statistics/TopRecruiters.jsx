import React, { useState } from 'react'
import { Doughnut, } from 'react-chartjs-2';
import { pieChartData } from '../data';


const TopRecruiters = () => {

	const [selectedYear, setSelectedYear] = useState("2022");

	const handleYearChange = (event) => {
		setSelectedYear(event.target.value);
		console.log(event.target.value)
	};

	// Extract data for the selected year
	const filteredData = pieChartData.filter(item => item.year.toString() === selectedYear);
	console.log(filteredData)
	console.log(filteredData[0].data.map(item => item.students))
	// Update chart data
	const chartData = {
		labels: filteredData[0].data.map(item => item.company),
		datasets: [
			{
				data: filteredData[0].data.map(item => item.students),
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
			<h2>Top Recruiters with Most Placements ({selectedYear})</h2> <br />
			<label htmlFor="pie-chart-filter">Filter by Year: </label>
			<select id='pie-chart-filter' value={selectedYear} onChange={handleYearChange}>
				{pieChartData.map((item, index) => (
					<option key={index} value={item.year}>
						{item.year}
					</option>
				))}
			</select>
			<div style={{width: '75%', marginLeft:"auto", marginTop: "2rem"}}>
				<Doughnut data={chartData} />
			</div>
		</div>
	)
}

export default TopRecruiters