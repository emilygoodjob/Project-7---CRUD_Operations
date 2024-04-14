import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

function UpdateCrewmate({ updateCrewmate }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [crewmate, setCrewmate] = useState(location.state.crewmate);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate(prevCrewmate => ({
            ...prevCrewmate,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCrewmate(crewmate);  // Update crewmate in global state
        navigate('/crewmate-gallery');  // Navigate back to the gallery after update
    };

    return (
        <div>
            <h1>Update Crewmate</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={crewmate.name} onChange={handleChange} />
                </label>
                <label>
                    Speed (mph):
                    <input type="number" name="speed" value={crewmate.speed} onChange={handleChange} />
                </label>
                <label>
                    Color:
                    <select name="color" value={crewmate.color} onChange={handleChange}>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Orange">Orange</option>
                        <option value="Pink">Pink</option>
                        <option value="Rainbow">Rainbow</option>
                    </select>
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateCrewmate;
