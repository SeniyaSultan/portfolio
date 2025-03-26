import React from 'react';
import './index.css'; // Or the correct CSS file

 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Portfolio from './Main/Portfolio';  
 function App() {
   return ( 
    <Router>
      <Routes>
      <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
export default App;