
import React from 'react';
import KaheLogo from '../../Assets/logo.png';
import './footer.css';

const Footer = () => (
	<div className="footer section__padding">
		<div className="footer-heading">
			<h1 className="gradient__text">Do you want to step in to the future before others</h1>
		</div>

		<div className="footer-btn">
			<p>JOIN US</p>
		</div>

		<div className="footer-links">
			<div className="footer-links_logo">
				<img src={KaheLogo} alt="gpt3_logo" />
				<p>Karpagam Academy of Higher Education, <br /> Coimbatore, Tamil Nadu</p>
			</div>
			<div className="footer-links_div">
				<h4>Links</h4>
				<p>Overons</p>
				<p>Social Media</p>
				<p>Counters</p>
				<p>Contact</p>
			</div>
			<div className="footer-links_div">
				<h4>Company</h4>
				<p>Terms & Conditions </p>
				<p>Privacy Policy</p>
				<p>Contact</p>
			</div>
			<div className="footer-links_div">
				<h4>Get in touch</h4>
				<p>Amar kumar</p>
				<p>7992442711</p>
				<p>amarkumar.sharma.124@gmail.com</p>
			</div>
		</div>

		<div className="footer-copyright">
			<p>@2023 KAHE. All rights reserved.</p>
		</div>
	</div>
);

export default Footer;