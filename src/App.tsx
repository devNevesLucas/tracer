import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import General from './components/General';
import Form from './components/Form';
import Historic from './components/Historic';
import Graph from './components/Graph';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/form" element={<Form />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/graph" element={<Graph />}/>
        <Route path="/calendar" element={<Calendar />}/>
      </Routes>
    </div>
  );
}

export default App;
