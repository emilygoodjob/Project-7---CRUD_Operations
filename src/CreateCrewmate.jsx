import React, { useState } from 'react';
import './index.css';

function CreateCrewmate({ addCrewmate }) {
    // State to hold the form data
    const [crewmate, setCrewmate] = useState({
        name: '',
        speed: '',
        color: ''
    });

    // Handle form field changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate(prevCrewmate => ({
            ...prevCrewmate,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        addCrewmate(crewmate); 
        setCrewmate({ name: '', speed: '', color: '' });
    };

    return (
        <div className='create-crew'>
            <h1>Create a New Crewmate</h1>
            <form onSubmit={handleSubmit} className='form-container'>
                <label>
                    Name: 
                    <input
                        type="text"
                        name="name"
                        value={crewmate.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Speed (mph): 
                    <input
                        type="number"
                        name="speed"
                        value={crewmate.speed}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Color: 
                    <select name="color" value={crewmate.color} onChange={handleChange} required>
                        <option value="">--Select a Color--</option>
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
                <br />
                <button className='add-btn' type="submit">Add Crewmate</button>
            </form>
        </div>
    );
}

export default CreateCrewmate;
