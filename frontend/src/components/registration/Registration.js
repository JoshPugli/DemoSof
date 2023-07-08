import React, { useState } from "react";
import "./Registration.css";
import ReactDOM from "react-dom";

export default function Modal({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFirstNameError("");
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setLastNameError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let hasError = false;

    if (firstName.trim() === "") {
      setFirstNameError("First Name cannot be empty");
      hasError = true;
    }

    if (lastName.trim() === "") {
      setLastNameError("Last Name cannot be empty");
      hasError = true;
    }

    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("message", message);

    // Make the API request
    fetch("http://127.0.0.1:8000/register/send-email/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email sent successfully!");
          // Perform any additional actions or show success message
        } else {
          console.error("Failed to send email.");
          // Handle the error case
        }
      })
      .catch((error) => {
        console.error("Error occurred while sending email:", error);
        // Handle the error case
      });

    // Close the modal
    onClose();
  };

  const modal = (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Your info will be sent to the course instructors</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            {firstNameError && (
              <p className="error-message">{firstNameError}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
            {lastNameError && <p className="error-message">{lastNameError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <div className="button-group">
            <button type="submit">Register</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
}
