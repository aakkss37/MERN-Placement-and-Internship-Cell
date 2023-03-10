import './App.css';
import ScrollToTop from "react-scroll-to-top";
import HiringPartner from './components/HirtingPartners/HiringPartner';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Statistic from './components/Statistics/Statistic';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
		<Navbar/>
		<Home/>
		<HiringPartner/>
		<Statistic/>
		<Testimonials/>
		<Footer/>
		
		  <ScrollToTop 
		  	smooth 
			color="#fff" 
			style={{ background: '#ff4820cf', color: 'white'}}  
		/>
		
	</>
  );
}

export default App;
