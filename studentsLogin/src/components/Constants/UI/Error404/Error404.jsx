import React from 'react';
import './error404.css'
import { Link } from 'react-router-dom';


const Error404 = () => {
	return (
		<div className="error-404">
			<div className='error-404-container'>
				<p>We searched the entire universe and couldn't find the page you're looking for...but we did find this cool rocket on Mars though. See....!!!</p>
				<img src='https://cdn.dribbble.com/users/189524/screenshots/1857223/media/88afbe2833dbf8fbaf66a01ebe26f378.gif' alt='gif'/>
				<br/>
				<h1>404</h1>
				<span>Error</span>
				<h2>Page Not Found</h2>
				<p>Go to <b><Link to='/'>Home page</Link></b> </p>
			</div>
		</div>
	);
};

export default Error404;