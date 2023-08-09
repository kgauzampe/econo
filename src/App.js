import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navigation/Navigation/Nav';
import Home from './Components/Home/home';
import Service1 from './Components/Service1/Service1'
import './App.css';

function App() {
  
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service1" element={<Service1/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
