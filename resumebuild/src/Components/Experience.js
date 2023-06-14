import React, { useState } from 'react';

const Experience = () => {
  const [experienceList, setExperienceList] = useState([{ company: '', year: '', designation: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...experienceList];
    list[index][name] = value;
    setExperienceList(list);
  };

  const handleAddField = () => {
    setExperienceList([...experienceList, { company: '', year: '', designation: '' }]);
  };

  const handleRemoveField = (index) => {
    const list = [...experienceList];
    list.splice(index, 1);
    setExperienceList(list);
  };

  return (
    <div>
      <h2>Experience</h2>
      {experienceList.map((experience, index) => (
        <div key={index}>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              className="form-control"
              name="company"
              value={experience.company}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              className="form-control"
              name="year"
              value={experience.year}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              className="form-control"
              name="designation"
              value={experience.designation}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
          {index !== 0 && (
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={handleAddField}>
        Add More
      </button>
    </div>
  );
};

export default Experience;