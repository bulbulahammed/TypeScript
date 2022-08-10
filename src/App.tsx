import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<null | User>(null);

  type User = {
    id: number;
    name: string;
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleAddUser = () => {
    setUser({ id: 1, name: "Bulbul" });
  };

  return (
    <div className="App">
      <h1>Use State Hook</h1>
      <h2>Count: {count}</h2>
      <p>{user?.name}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default App;
