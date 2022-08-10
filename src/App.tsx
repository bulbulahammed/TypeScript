import "./App.css";
import DataFetch from "./components/DataFetch";

const users = [
  {
    id: 1,
    name: "Bulbul Ahammed",
    email: "mdbulbulahammed@gmail.com",
    age: 27,
  },
  {
    id: 1,
    name: "Rakibul Islam",
    email: "rakibulislam@gmail.com",
    age: 20,
  },
];

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <DataFetch status="loading" />
    </div>
  );
}

export default App;
