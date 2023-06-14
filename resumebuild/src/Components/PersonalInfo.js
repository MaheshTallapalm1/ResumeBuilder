import React, { useState } from 'react';

const PersonalInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          className="form-control"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;