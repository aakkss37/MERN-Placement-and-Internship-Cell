import React from 'react'

export const NavbarMenu = (props) => {
	return (
		<>
			<p><a href='#home' onClick={props.onClick}>Home</a></p>
			<p><a href='#statistic' onClick={props.onClick}>Statistic</a></p>
			<p><a href='#news' onClick={props.onClick}>News</a></p>
			<p><a href='#hiring-partners' onClick={props.onClick}>Hiring Partners</a></p>
			<p><a href='#testimonials' onClick={props.onClick}>Testimonials</a></p>
		</>
	);
};
export default NavbarMenu;
