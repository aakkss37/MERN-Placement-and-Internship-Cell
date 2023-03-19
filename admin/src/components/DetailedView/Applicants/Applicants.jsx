import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import { generateFakeData } from '../../../utils/commonUtil';


const columns = [
	{ 
		field: 'id', 
		headerName: 'Roll no.', 
		width: 150 },
	{
		field: 'Name',
		headerName: 'Name',
		width: 150,
		editable: true,
	},
	{
		field: 'Department',
		headerName: 'Department',
		width: 200,
		editable: true,
	},
	{
		field: 'CGPA',
		headerName: 'CGPA',
		width: 90,
		editable: true,
	},
	{
		field: 'phone',
		headerName: 'Phone',
		width: 160,
		editable: true,
	},
];



const Applicants = () => {
	const [searchText, setSearchText] = useState('');

	const handleSearch = (event) => {
		setSearchText(event.target.value);
	};
	const rows = generateFakeData()
	const filteredRows = rows.filter((row) =>
		row.id.toString().startsWith(searchText)
	);
	return (
		<Box sx={{ height: 600, width: '90%', marginLeft: '5%' }}>
			<TextField
				label="Search Roll no"
				value={searchText}
				onChange={handleSearch}
				style={{ marginBottom: 10 }}
			/>
			<DataGrid
				rows={filteredRows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 20,
						},
					},
				}}
				pageSizeOptions={[20]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</Box>
	)
}

export default Applicants