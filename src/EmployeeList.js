import React from "react";

const Employees = ["Rugved", "Swapnil", "Umesh", "Mahesh"];

const EmployeeList = (props) => {
  const buttonHandler = (employee) => {
    props.onSelect(employee.target.id);
  };

  return (
    <div>
      <ul>
        {Employees.map((employee, index) => (
          <li key={index}>
            {employee}
            <button id={index} onClick={buttonHandler}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EmployeeList;
