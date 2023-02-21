import React from 'react';
import './home.css'
import people from '../../Assets/people.png'

const Home = () => {
  return (
	  <div className="home section__padding" id="home">
		  <div className="home_text">
			  <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
			  <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

			  

			  <div className="home_people_visited">
				  <img src={people} alt="People using this." />
				  <p>1,600 people requested access a visit in last 24 hours</p>
			  </div>
		  </div>

		  <div className="gpt3__header-image">
			  Form area
		  </div>
	  </div>
  )
}

export default Home