import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import '../placementData.css'
import { data, departments, } from '../data';

const DepartmentWise = () => {

	const [selectedDepartment, setSelectedDepartment] = useState(departments[7]);
	const filteredData = data.filter(datum => datum.department === selectedDepartment);

	// console.log(filteredData.map(datum => datum.count))
	const chartData = {
		labels: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
		datasets: [{
			label: `Number of students placed in ${selectedDepartment}`,
			data: filteredData.map(datum => datum.count),
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

	const handleDepartmentChange = event => {
		setSelectedDepartment(event.target.value);
	};


  return (
	  <div className="placement_data_graphs">
		  <h2>Placement Statistics</h2> <br />
		  <div>
			  <label htmlFor="department-select">Filter by department:</label>
			  <select id="department-select" value={selectedDepartment} onChange={handleDepartmentChange}>
				  {departments.map(department => (
					  <option key={department} value={department}>{department}</option>
				  ))}
			  </select>
		  </div>
		  <Line type='line' data={chartData} options={options} />
	  </div>
  )
}

export default DepartmentWise