import { useState } from "react";
import "./App.css";
import ButtonStyle from "./components/ButtonStyle";
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

  const btnStyles = {
    backgroundColor: "green",
    padding: "0.5rem",
    color: "red",
  };

  return (
    <div className="App">
      <h1>Style Props</h1>
      <ButtonStyle btnStyle={btnStyles} />
    </div>
  );
}

export default App;
