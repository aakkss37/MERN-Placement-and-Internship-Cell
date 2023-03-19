import React, { useContext, useState } from 'react';
import { DataContext } from '../../../contextAPI/DataProvider';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, } from '@mui/material';
import { generateFakeData } from '../../../utils/commonUtil';
import { ApplicantsAction, Search, SearchIconWrapper, StyledInputBase } from './ApplicantsStyle';
import SearchIcon from '@mui/icons-material/Search';


const columns = [
	{ 
		field: 'id', 
		headerName: 'Roll no.', 
		width: 150 
	},
	{
		field: 'Name',
		headerName: 'Name',
		width: 150,
	},
	{
		field: 'Department',
		headerName: 'Department',
		width: 200,
	},
	{
		field: 'CGPA',
		headerName: 'CGPA',
		width: 90,
	},
	{
		field: 'phone',
		headerName: 'Phone',
		width: 160,
	},
];



const Applicants = () => {
	const [searchText, setSearchText] = useState('');
	const context = useContext(DataContext);


	const handleSearch = (event) => {
		setSearchText(event.target.value);
	};
	const rows = generateFakeData()
	const filteredRows = rows.filter((row) =>
		row.id.toString().startsWith(searchText)
	);


	const selectedForTest = (event)=> {
		context.setStudentsForTest([...context.studentsForTest, event.row])
	}
	console.log(context.studentsForTest)
	return (
		<Box sx={{ height: 600, width: '90%', marginLeft: '5%' }}>
			<ApplicantsAction>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Searc Roll no."
						inputProps={{ 'aria-label': 'search' }}
						value={searchText}
						onChange={handleSearch}
					/>
				</Search>
				{
					context.studentsForTest.length ?
					<Button variant="contained" >Select For Test</Button>
					:
					<Button variant="contained" disabled>Select For Test</Button>
				}
			</ApplicantsAction>

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
				disableRowSelectionOnClick={true}
				onCellClick={(event)=>{selectedForTest(event)}}
			/>
		</Box>
	)
}

export default Applicants