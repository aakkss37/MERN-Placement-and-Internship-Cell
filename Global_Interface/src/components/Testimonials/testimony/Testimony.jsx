import React from 'react'
import './testimony.css'

const Testimony = ({ img, name, branch, review, placedIn }) => {
	return (
		<div className='testimony'>
			<div className='testimony_image_container'>
				<img src={img} alt='img' />
			</div>
			<h3 className='gradient__text'>{name}</h3>
			<div className='review'>
				<p>{review}</p>
			</div>
			<p className='branch '>Branch: {branch}</p>
			<h6>Placed In: {placedIn}</h6>
		</div>
	)
}

export default Testimony