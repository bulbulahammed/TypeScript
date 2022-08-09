import "./App.css";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User name="Bulbul Ahammed" age={27} isSmoker={false} />
    </div>
  );
}

export default App;
