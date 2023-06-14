import React from 'react';
import Education from './Components/Education';
import Experience from './Components/Experience';
import PersonalInfo from './Components/PersonalInfo';
import Skills from './Components/Skills';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <div className="container">
      <h1>Resume Builder</h1>
      <div className="row">
        <div className="col-md-6">
          <PersonalInfo />
        </div>
        <div className="col-md-6">
          <Education />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Experience />
        </div>
        <div className="col-md-6">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default App;