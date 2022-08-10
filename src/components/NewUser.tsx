import { useState } from "react";

const NewUser = () => {
  // Set name by use State Hook
  const [name, setName] = useState("");

  //   Set Email by use State Hook
  const [email, setEmail] = useState("");

  //   Handle Change Name
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Handle Change Email
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Handle Submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = { name, email };
    console.log(newUser);
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChangeName}
              required
            />
          </label>
        </div>
        {/* Email Input */}
        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </label>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default NewUser;
