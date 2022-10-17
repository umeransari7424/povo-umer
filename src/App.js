import './App.scss';
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './Components/Elements/Work';
import Stakingplatform from './Components/Elements/Stakingplatform';
import Mission from './Components/Elements/Mission';
import Vision from './Components/Elements/Vision';
import Roadmap from './Components/Elements/Roadmap';
import Rugpul from './Components/Elements/Rugpul';
import Benefit from './Components/Elements/Benefit';
import Platform from './Components/Elements/Platform';
import Yahoo from './Components/Elements/Yahoo';
import Friends from './Components/Elements/Friends';
import Tokenomics from './Components/Elements/Tokenomics';
import Video from './Components/Elements/Video';
import Features from './Components/Elements/Features';
import Faqs from './Components/Utils/Faqs';
import Nft from './Components/Elements/Nft';
import Hero from './Components/Elements/Hero';


// import 'bootstrap/dist/js/bootstrap.bundle';



function App() {
  return (
    <div >
        <Header/>
        <Hero/>
        <Yahoo/>
        <Stakingplatform/>
        <Nft/>
        <Features/>
        <Video/>
        <Mission/>
        <Vision/>
        <Tokenomics/>
        <Benefit/>
        <Platform/>
        <Roadmap/>
        <Rugpul/>
        <Work/>
        <Faqs/>
        <Friends/>       
        <Footer/>      
    </div>
  );
}

export default App;
