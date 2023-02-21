import React from 'react'
import './hiringPartner.css'
import {
	SiZoho, SiFacebook, SiPaytm, SiPhonepe, SiIntel, SiNvidia,
	SiAmd, SiSamsung, SiZomato, SiSwiggy, SiAcer, SiDell, SiFlipkart,
	SiAmazon, SiAmazonaws, SiNetflix, SiMercedes, SiEbay
} from 'react-icons/si';
import { AiOutlineGoogle } from 'react-icons/ai';
import { TfiMicrosoftAlt } from 'react-icons/tfi';


const companyStyle = {
	margin: 25
}


const HiringPartner = () => {
	return (
		<div className='hiring_partners section__padding' id='hiring-partners'>
			<div className='hiring_partners_heading'>
				<h1>OUR &nbsp; TOP &nbsp; CORPORATE &nbsp; PARTNERS</h1>
			</div>
			<div className='hiring_partners_icon'>
				<AiOutlineGoogle style={companyStyle} />
				<TfiMicrosoftAlt style={companyStyle} />
				<SiFacebook style={companyStyle} />
				<SiZoho style={companyStyle} />
				<SiPaytm style={companyStyle} />
				<SiPhonepe style={companyStyle} />
				<SiIntel style={companyStyle} />
				<SiNvidia style={companyStyle} />
				<SiAmd style={companyStyle} />
				<SiSamsung style={companyStyle} />
				<SiZomato style={companyStyle} />
				<SiSwiggy style={companyStyle} />
				<SiAcer style={companyStyle} />
				<SiDell style={companyStyle} />
				<SiFlipkart style={companyStyle} />
				<SiAmazon style={companyStyle} />
				<SiAmazonaws style={companyStyle} />
				<SiNetflix style={companyStyle} />
				<SiMercedes style={companyStyle} />
				<SiEbay style={companyStyle} />
			</div>
		</div>
	)
}

export default HiringPartner