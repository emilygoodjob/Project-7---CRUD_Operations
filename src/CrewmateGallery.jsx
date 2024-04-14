import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; 

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
        event.stopPropagation(); 
        navigate('/update-crewmate', { state: { crewmate } });
    };

    // Handles deletion of a crewmate and prevents click event propagation
    const handleDelete = (event, id) => {
        event.stopPropagation(); 
        if (typeof deleteCrewmate === 'function') {
            deleteCrewmate(id);
        } else {
            console.error('deleteCrewmate is not a function', deleteCrewmate);
        }
    };

    function calculateAverageSpeed(crewmates) {
        const totalSpeed = crewmates.reduce((total, crewmate) => total + parseFloat(crewmate.speed || 0), 0);
        return (crewmates.length > 0 ? (totalSpeed / crewmates.length).toFixed(2) : 0) + " mph";
    }
    
    function findMostCommonColor(crewmates) {
        const colorFrequency = crewmates.reduce((freq, crewmate) => {
            if (crewmate.color in freq) {
                freq[crewmate.color]++;
            } else {
                freq[crewmate.color] = 1;
            }
            return freq;
        }, {});
    
        let mostCommon = '';
        let maxCount = 0;
        for (let color in colorFrequency) {
            if (colorFrequency[color] > maxCount) {
                mostCommon = color;
                maxCount = colorFrequency[color];
            }
        }
        return mostCommon;
    }    

    const averageSpeed = calculateAverageSpeed(crewmates);
    const favoriteColor = findMostCommonColor(crewmates);
    return (
        <div className='gallery-container'>
            <h1>Crewmate Gallery</h1>
            <div className='statistics'>
                <p>Average Speed: {averageSpeed}</p>
                <p>Favorite Color: {favoriteColor}</p>
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
