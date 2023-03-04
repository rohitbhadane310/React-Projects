import React from "react";
import '../App.css'

function SignupForm({ onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxvZPhT8EuVh3o1xbGnBJVfLmC42FvpFogogeKj4HnSGCHxiTi8c1kcEm_zqyO1Uqw4/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    onClose();
  };

  return (
    <div className="popup show">
      <div className="popup-content">
        <h2>Sign Up</h2>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="Name" placeholder="Enter your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="Email" placeholder="Enter you Email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="Password" placeholder="Enter the password" required />

          <button name="Name" type="submit">Sign Up</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
