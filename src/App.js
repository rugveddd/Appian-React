import "./App.css";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "./EmployeeDetails";
import { useState } from "react";

function App() {
  const [employee, setEmployee] = useState(null);

  const onSelectingEmployee = (index) => {
    setEmployee(index);
  };

  return (
    <div>
      <p> this is my react app </p>
      <EmployeeList onSelect={onSelectingEmployee}></EmployeeList>
      <EmployeeDetails selectedEmployee={employee}></EmployeeDetails>
<div> this is new change </div>
    </div>
  );
}

export default App;
