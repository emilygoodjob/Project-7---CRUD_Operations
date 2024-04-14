import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function CrewmateGallery({ crewmates }) {
    const navigate = useNavigate();
    const [activeCrewmateId, setActiveCrewmateId] = useState(null);

    // Calculate average speed
    const calculateAverageSpeed = () => {
        const totalSpeed = crewmates.reduce((acc, crewmate) => acc + parseFloat(crewmate.speed), 0);
        return crewmates.length > 0 ? (totalSpeed / crewmates.length).toFixed(2) : 0;
    };

    // Calculate the most common color
    const findMostCommonColor = () => {
        const colorCounts = {};
        crewmates.forEach(crewmate => {
            colorCounts[crewmate.color] = (colorCounts[crewmate.color] || 0) + 1;
        });
        return Object.keys(colorCounts).reduce((a, b) => colorCounts[a] > colorCounts[b] ? a : b, '');
    };

    const handleCardClick = (crewmate) => {
        setActiveCrewmateId(crewmate.id);
        navigate('/crewmate-detail', { state: { crewmate } });
    };

    return (
        <div className='gallary-container'>
            <h1>Crewmate Gallery</h1>
            <div className='statistics'>
                <h2>Average Speed: {calculateAverageSpeed()} mph</h2>
                <h2>Favorite Color: {findMostCommonColor()}</h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {crewmates.map(crewmate => (
                    <div key={crewmate.id} 
                         className={`crewmate-card ${activeCrewmateId === crewmate.id ? 'active' : ''}`}
                         onClick={() => handleCardClick(crewmate)}>
                        <h2 className='font-color'>{crewmate.name}</h2>
                        <p className='font-color'>Speed: {crewmate.speed} mph</p>
                        <p className='font-color'>Color: {crewmate.color}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CrewmateGallery;
