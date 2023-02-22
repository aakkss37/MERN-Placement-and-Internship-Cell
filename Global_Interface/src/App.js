import './App.css';
import HiringPartner from './components/HirtingPartners/HiringPartner';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Statistic from './components/Statistics/Statistic';

function App() {
  return (
    <>
		<Navbar/>
		<Home/>
		<HiringPartner/>
		<Statistic/>
	</>
  );
}

export default App;
