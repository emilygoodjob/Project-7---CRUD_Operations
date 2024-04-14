import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Ensure your styles are correctly imported

function CrewmateGallery({ crewmates, updateCrewmate, deleteCrewmate }) {
    const navigate = useNavigate();
    const [activeCrewmateId, setActiveCrewmateId] = useState(null);

    // Handles navigation to the detail view of a crewmate
    const handleCardClick = (crewmate) => {
        setActiveCrewmateId(crewmate.id);
        navigate('/crewmate-detail', { state: { crewmate } });
    };

    // Handles navigation to the update page and prevents click event propagation
    const handleUpdate = (event, crewmate) => {
        event.stopPropagation(); // Prevents the click from triggering the card click handler
        navigate('/update-crewmate', { state: { crewmate } });
    };

    // Handles deletion of a crewmate and prevents click event propagation
    const handleDelete = (event, id) => {
        event.stopPropagation(); // Prevents the click from triggering the card click handler
        if (typeof deleteCrewmate === 'function') {
            deleteCrewmate(id);
        } else {
            console.error('deleteCrewmate is not a function', deleteCrewmate);
        }
    };

    return (
        <div className='gallery-container'>
            <h1>Crewmate Gallery</h1>
            <div className='statistics'>
                {/* Placeholder for statistics - implement if needed */}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {crewmates.map(crewmate => (
                    <div key={crewmate.id} className={`crewmate-card ${activeCrewmateId === crewmate.id ? 'active' : ''}`} onClick={() => handleCardClick(crewmate)}>
                        <h2 className='font-color'>{crewmate.name}</h2>
                        <p className='font-color'>Speed: {crewmate.speed} mph</p>
                        <p className='font-color'>Color: {crewmate.color}</p>
                        <button onClick={(event) => handleUpdate(event, crewmate)}>Update</button>
                        <button onClick={(event) => handleDelete(event, crewmate.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CrewmateGallery;
