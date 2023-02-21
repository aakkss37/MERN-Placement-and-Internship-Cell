import React from 'react'
import './hiringPartner.css'
import {
	SiZoho, SiFacebook, SiPaytm, SiPhonepe, SiIntel, SiNvidia,
	SiAmd, SiSamsung, SiZomato, SiSwiggy, SiAcer, SiDell, SiFlipkart,
	SiAmazon, SiAmazonaws, SiNetflix, SiMercedes, SiEbay
} from 'react-icons/si';
import { AiOutlineGoogle } from 'react-icons/ai';
import { TfiMicrosoftAlt } from 'react-icons/tfi';



const HiringPartner = () => {
	return (
		<div className='hiring_partners section__padding' id='hiring-partners'>
			<div className='hiring_partners_heading'>
				<h1>OUR TOP CORPORATE PARTNERS</h1>
			</div>
			<div className='hiring_partners_icon'>
				<AiOutlineGoogle />
				<TfiMicrosoftAlt />
				<SiFacebook />
				<SiZoho />
				<SiPaytm />
				<SiPhonepe />
				<SiIntel />
				<SiNvidia />
				<SiAmd />
				<SiSamsung />
				<SiZomato />
				<SiSwiggy />
				<SiAcer />
				<SiDell />
				<SiFlipkart />
				<SiAmazon />
				<SiAmazonaws />
				<SiNetflix />
				<SiMercedes />
				<SiEbay />
			</div>
			<div className='hiring_partners_paragraph'>
				<p>The employment landscape can be challenging to navigate, but for students and job seekers, the future looks bright. At our institution, we take great pride in offering our students and alumni a plethora of job opportunities. We are pleased to share that over <b>500 companies</b> from various industries come to our campus for placements, bringing with them over <b>1500 unique opportunities</b>. Our team works closely with these organizations to ensure that each placement aligns with the skill set and career aspirations of our students. Our commitment to providing a diverse array of job opportunities not only helps our students to kickstart their careers, but it also strengthens our relationships with our industry partners. We firmly believe that our students are the workforce of tomorrow, and we are proud to provide them with the tools and resources they need to succeed in their chosen fields.</p>
			</div>
		</div>
	)
}

export default HiringPartner