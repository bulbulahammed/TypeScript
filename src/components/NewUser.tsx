import React, { useState } from "react";
const NewUser = () => {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(userName);
  };
  return (
    <div>
      <h2>Create New User</h2>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={userName}
        onChange={handleUserNameChange}
      />
      <button onClick={handleClick}>Show Name</button>
      <h3>{userName}</h3>
    </div>
  );
};

export default NewUser;
