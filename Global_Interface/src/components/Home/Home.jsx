import React from 'react';
import './home.css'
import people from '../../Assets/people.png'

const Home = () => {
	return (
		<div className="home section__padding" id="home">
			<div className="home_text">
				<h1 className="gradient__text">Let's Explore one of the top Institution Karpagam Academy of Higher Education</h1>
				<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>


				<div className="home_people_visited">
					<img src={people} alt="People using this." />
					<p>1,600 people requested access a visit in last 24 hours</p>
				</div>
			</div>

			<div className="home_enquiry_form">
					<input type='text' name='name' value='' placeholder='Name' />
					<input type='email' name='email' value='' placeholder='E-mail' />
					<input type='numbar' name='phone' value='' placeholder='Phone numbar' />
					<textarea placeholder='What is your query' rows='5' name='query' value='' />
					<button>Submit</button>
			</div>
		</div>
	)
}

export default Home