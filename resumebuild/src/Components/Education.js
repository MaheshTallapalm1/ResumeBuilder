import React, { useState } from 'react';

const Education = () => {
  const [educationList, setEducationList] = useState([{ institute: '', year: '', degree: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...educationList];
    list[index][name] = value;
    setEducationList(list);
  };

  const handleAddField = () => {
    setEducationList([...educationList, { institute: '', year: '', degree: '' }]);
  };

  const handleRemoveField = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  return (
    <div>
      <h2>Education</h2>
      {educationList.map((education, index) => (
        <div key={index}>
          <div className="form-group">
            <label>Institute</label>
            <input
              type="text"
              className="form-control"
              name="institute"
              value={education.institute}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              className="form-control"
              name="year"
              value={education.year}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
          <div className="form-group">
            <label>Degree</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              value={education.degree}
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

export default Education;