import React from "react";
import '../App.css'

function SignupForm({ onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Sign Up</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
