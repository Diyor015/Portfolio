import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Nav from './Components/Nav';
import Discover from './Components/Discover'
import Marketplace from './Components/Marketplace';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div >
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discover' element={<Discover/>}/>
          <Route path='/marketplace' element={<Marketplace/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
