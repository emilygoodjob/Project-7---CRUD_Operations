import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import CreateCrewmate from './CreateCrewmate';
import CrewmateGallery from './CrewmateGallery';
import UpdateCrewmate from './UpdateCrewmate';
import CrewmateDetail from './CrewmateDetail';

function App() {
    const [crewmates, setCrewmates] = useState([]);

    // Function to add a new crewmate
    const addCrewmate = (newCrewmate) => {
        setCrewmates(prevCrewmates => [...prevCrewmates, { ...newCrewmate, id: Date.now() }]);
    };

    // Function to delete a crewmate
    const deleteCrewmate = (id) => {
        setCrewmates(prevCrewmates => prevCrewmates.filter(crewmate => crewmate.id !== id));
    };

    // Function to update an existing crewmate
    const updateCrewmate = (updatedCrewmate) => {
        setCrewmates(prevCrewmates =>
            prevCrewmates.map(crewmate =>
                crewmate.id === updatedCrewmate.id ? { ...crewmate, ...updatedCrewmate } : crewmate
            )
        );
    };

    return (
      <Router>
          <div className="App">
              <Sidebar />
              <div className="App-content">
                <div className='content-wrapper'>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create-crewmate" element={<CreateCrewmate addCrewmate={addCrewmate} />} />
                        <Route path="/crewmate-gallery" element={<CrewmateGallery crewmates={crewmates} deleteCrewmate={deleteCrewmate} updateCrewmate={updateCrewmate} />} />
                        <Route path="/crewmate-detail" element={<CrewmateDetail />} />
                        <Route path="/update-crewmate" element={<UpdateCrewmate updateCrewmate={updateCrewmate} />} />
                    </Routes>
                </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
