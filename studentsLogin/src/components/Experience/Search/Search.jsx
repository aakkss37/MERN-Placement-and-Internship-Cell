import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputSearchBase, SearchContainer, SearchIconWrapper } from './searchStyle.js';

const Search = () => {
	

	return (
		<SearchContainer>
			<InputSearchBase
				placeholder='Search Company'
			/>
			<SearchIconWrapper>
				<SearchIcon style={{ color: '#367D43'}} />
			</SearchIconWrapper>
		</SearchContainer>
	)
}


export default Search