import React from 'react';
import './home.css'
import people from '../../Assets/people.png'

const Home = () => {
	return (
		<div className="home section__padding" id="home">
			<div className="home_text">
				<h1 className="gradient__text">Let's Explore one of the top Institution Karpagam Academy of Higher Education</h1>
				<p>Karpagam Academy of Higher Education (KAHE) is a top institution located in Coimbatore, Tamil Nadu. KAHE offers high-quality education in a variety of fields, with a highly qualified faculty, modern facilities, and a commitment to producing well-rounded graduates. The institution also offers a wide range of extracurricular activities and social service initiatives.</p>


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