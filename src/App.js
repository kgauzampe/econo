import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navigation/Navigation/Nav';
import Home from './Components/Home/home';
import Service1 from './Components/Service1/Service1';
import Service2 from './Components/Service2/Service2';
// import Service3 from './Components/Service3/Service3';
import Service4 from './Components/Service4/Service4';
import './App.css';
import Service3 from './Components/Service3/Service3';

function App() {
  
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service1" element={<Service1/>} />
        <Route path="/Service2" element={<Service2/>} />
        <Route path="/Service3" element={<Service3/>} />
        <Route path="/Service4" element={<Service4/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
