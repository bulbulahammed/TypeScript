import "./App.css";
import User from "./components/User";

const user1 = {
  name: "Bulbul Ahammed",
  age: 27,
  isSmoker: false,
  lang: ["Bengali", "English"],
};
const user2 = {
  name: "Farhad Ahammed",
  age: 22,
  isSmoker: false,
  lang: ["Bengali", "English"],
};

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User user={user1} />
      <User user={user2} />
    </div>
  );
}

export default App;
