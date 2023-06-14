import React, { useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div>
      <h2>Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            {skill}
            <button onClick={() => handleDeleteSkill(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newSkill}
          onChange={handleInputChange}
          placeholder="Add skills"
        />
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default Skills;