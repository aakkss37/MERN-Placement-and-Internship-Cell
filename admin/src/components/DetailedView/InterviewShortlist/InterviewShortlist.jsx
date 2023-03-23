import React, { useContext, useState } from 'react';
import { DataContext } from '../../../contextAPI/DataProvider';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, } from '@mui/material';
import { ApplicantsAction, Search, SearchIconWrapper, StyledInputBase } from './InterviewShortlistStyle';
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



const InterviewShortlist = (props) => {
	const [searchText, setSearchText] = useState('');
	const [studentsChecked, setStudentsChecked] = useState([]);
	const context = useContext(DataContext);


	const handleSearch = (event) => {
		setSearchText(event.target.value);
	};
	const rows = context.studentsForInterview
	const filteredRows = rows.filter((row) =>
		row.id.toString().startsWith(searchText)
	);


	const handleCheck = (event) => {
		setStudentsChecked([...studentsChecked, event.row])
	}
	const handlePlacement = () => {
		context.setStudentsPlaced(studentsChecked)
		context.setOpenPlacedSucessSnackbar(true)
		props.setActiveTab("placeStudent")
	}
	// console.log(context.studentsForInterview)
	// console.log(studentsChecked)
	return (
		<Box sx={{ height: 400, width: '90%', marginLeft: '5%' }}>
			<ApplicantsAction>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search Roll no."
						inputProps={{ 'aria-label': 'search' }}
						value={searchText}
						onChange={handleSearch}
					/>
				</Search>
				<h2 style={{ fontSize: '1.5rem', }}>Short list for Interview</h2>
				{
					studentsChecked.length ?
						<Button variant="contained" onClick={handlePlacement}>Placed</Button>
						:
						<Button variant="contained" disabled>Places</Button>
				}
			</ApplicantsAction>

			<DataGrid
				rows={filteredRows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10,
						},
					},
				}}
				pageSizeOptions={[10]}
				checkboxSelection
				disableRowSelectionOnClick={true}
				onCellClick={(event) => { handleCheck(event) }}
			/>
		</Box>
	)
}

export default InterviewShortlist