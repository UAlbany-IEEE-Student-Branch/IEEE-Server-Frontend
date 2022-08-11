//Server imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './server/pages/home';
import Dashboard from './server/pages/dashboard'; 
import PageNotFound from './server/pages/pagenotfound';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/server/*" element={<PageNotFound/>} />
          <Route path="/server" element={<Home/>} />
          <Route path="/server/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
