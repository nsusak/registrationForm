import React from "react";

const SuccessDisplay = ({ userData }) => {
  const { firstName, lastName, username, email, password } = userData;

  return (
    <div>
      <h2>Success!</h2>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Password:</strong> {password}
      </p>
    </div>
  );
};

export default SuccessDisplay;
