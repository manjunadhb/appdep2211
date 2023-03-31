import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  let [employees, setEmployees] = useState([]);

  useEffect(() => {
    getDataFromServer();
  }, []);

  let getDataFromServer = async () => {
    let response = await axios.get("/getEmployees");

    console.log(response.data);
    setEmployees(response.data);
  };

  return (
    <div className="App">
      <h1>This is our application</h1>
      {employees.map((employee) => {
        return <h1>{employee.name}</h1>;
      })}
    </div>
  );
}

export default App;
