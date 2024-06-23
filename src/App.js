import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  const pageSize = 8;
  const apiKey = "87acc4621d0843fa8a2bcf5fe7efd4c9";

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar height={2} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
