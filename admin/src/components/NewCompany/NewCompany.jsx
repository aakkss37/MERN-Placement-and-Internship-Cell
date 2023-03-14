import React, { useState } from 'react'
import './newCompany.css'
import {Button, Checkbox, FormControl, IconButton, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, } from '@mui/material';




const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const department = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder',
];


const NewCompany = () => {
	const [departmentName, setDepartmentName] = useState([]);


	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setDepartmentName(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
	};


	return (
		<div className='newCpmpany'>
			<div className='newCompany_container'>
				<div className='current_path'><h4 style={{ color: 'gray' }}>Add New Company</h4> </div>
				<div className='newCompnay_Form_Container'>
					<div className='left_Form_Container'>
						<div className='form_element'>
							<Button variant="contained" component="label" sx={{ color: 'white', backgroundColor: '#0b410e' }}>
								Upload Company Logo
								<input hidden accept="image/*" multiple type="file" />
							</Button>
						</div>
						<div className='form_element'>
							<p>CGPA:</p>
							<input type="number"  />
						</div>
						<div className='form_element'>
							<p>Active Back:</p>
							<input type="radio" name='active_back' value='no'  />
							<label htmlFor="active_back">Not Allowed</label>
							<input type="radio" name='active_back' value='yes'  />
							<label htmlFor="active_back">Allowed</label>
						</div>
						<div className='form_element'>
							<FormControl sx={{ m: 1, width: 300 }}>
								<InputLabel id="demo-multiple-checkbox-label">Allowed Department</InputLabel>
								<Select
									labelId="demo-multiple-checkbox-label"
									id="demo-multiple-checkbox"
									multiple
									value={departmentName}
									onChange={handleChange}
									input={<OutlinedInput label="Allowed Department" />}
									renderValue={(selected) => selected.join(', ')}
									MenuProps={MenuProps}
								>
									{department.map((name) => (
										<MenuItem key={name} value={name}>
											<Checkbox checked={departmentName.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
						<div className='form_element'>
							<p>Passout:</p>
							<input type="file"  />
						</div>
						<div className='form_element'>
							<p>Job Type:</p>
							<input type="file"  />
						</div>
						<div className='form_element'>
							<p>Passout:</p>
							<input type="file"  />
						</div>
					</div>
					<div className='right_Form_Container'>
						<div className='form_element'>
							<p>Company image:</p>
							<input type="file"  />
						</div>
						<div className='form_element'>
							<p>Company image:</p>
							<input type="file"  />
						</div>
						<div className='form_element'>
							<p>Company image:</p>
							<input type="file"  />
						</div>
						<div className='form_element'>
							<p>Company image:</p>
							<input type="file"  />
						</div>
						<div className='form_element'>
							<p>Company image:</p>
							<input type="file"  />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewCompany