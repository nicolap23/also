import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import Home from './pages/home/Home.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Shop from './pages/shop/Shop.js'
import Contact from './pages/contact/Contact.js';


function App() {
  return (
    <div className="App">

     <Router>
        
        
        <Navbar/>
        <Routes>
            <Route path='/Home' exact Component={Home}/>
            <Route path='/Shop' exact Component={Shop}/>
            <Route path='/Contact' exact Component={Contact}/>

        </Routes>
        <Footer/>
     
     
     
     </Router> 
      
     
    </div>
  );
}

export default App;
