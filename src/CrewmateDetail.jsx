import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

function CrewmateDetail() {
    const location = useLocation();
    const crewmate = location.state ? location.state.crewmate : null;

    if (!crewmate) {
        return <div>No Crewmate Data!</div>; // Or handle the missing data scenario appropriately
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Crewmate: {crewmate.name}</h1>
            <h2>Stats:</h2>
            <p>Color: {crewmate.color}</p>
            <p>Speed: {crewmate.speed} mph</p>
        </div>
    );
}

export default CrewmateDetail;
