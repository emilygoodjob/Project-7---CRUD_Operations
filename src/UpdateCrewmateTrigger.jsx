import React from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateCrewmateTrigger({ id, crewmates }) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    const crewmateToUpdate = crewmates.find(crewmate => crewmate.id === id);
    navigate('/update-crewmate', { state: { crewmate: crewmateToUpdate } });
  };

  return (
    <button onClick={handleUpdate}>Update</button>
  );
}

export default UpdateCrewmateTrigger;
