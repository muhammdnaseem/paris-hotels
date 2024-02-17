import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './pages/Home';
import Register from './Register';
import Stay from './pages/Stay';
import Dine from './pages/Dine';
import Explore from './pages/Explore';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/stay" element={<Stay />} />
             <Route path="/Dine" element={<Dine />} />
               <Route path="/Explore" element={<Explore />} />

                <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
