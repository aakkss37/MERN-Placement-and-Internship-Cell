import React from 'react';
import './underConstruction.css'
import cunstruction from '../../../../asset/development.png'


const UnderConstruction = () => {
	return (
		<div className="underConstruction">
			<div className='error-404-container'>
				<h2>This Page is under Development!</h2>
				
				<img className='constructionImg' src={cunstruction} alt='demelopment' />
			</div>
		</div>
	);
};

export default UnderConstruction;