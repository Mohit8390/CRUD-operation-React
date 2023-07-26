import React, { useState, useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import Employees from "./Employees";

function AddUser() {
  const options = [
    { value: "", text: "Select designation" },
    { value: "Designer", text: "Designer" },
    { value: "Manager", text: "Manager" },
    { value: "Tester", text: "Tester" },
  ];
  const [name, setName] = useState("");
  const [empoloyeeID, setEmpoloyeeID] = useState("");
  const [salary, setSalary] = useState("");
  //const [designation, setDesignation] = useState(options[0].value);
  const [designation, setDesignation] = useState("");
  //   const { addUser, users } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueid = ids.slice(0, 8);

    let a = empoloyeeID,
      b = name,
      c = designation,
      d = salary;

    Employees.push({
      id: uniqueid,
      empoloyeeID: a,
      name: b,
      designation: c,
      salary: d,
    });

    navigate("/");
  };
  return (
    <div>
      <p className="headerText">Add User Here</p>
      <div class="form-container">
        <header class="headerClass">
          <h4>Employee Form</h4>
        </header>
        <form style={{ padding: "14px" }}>
          <div class="form-row">
            <div class="form-group">
              <label for="name">Employee ID</label>
              <input
                type="text"
                id="id"
                placeholder="Employee ID"
                onChange={(e) => setEmpoloyeeID(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="email">Employee Name</label>
              <input
                type="text"
                id="name"
                placeholder="Employee Name"
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="name">Designation</label>
              <div class="custom-sel">
                <select onChange={(e) => setDesignation(e.target.value)}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
                <div class="arrowAdd"></div>
              </div>
            </div>
            <div class="form-group">
              <label for="text">Salary</label>
              <input
                type="text"
                id="text"
                placeholder="Salary"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btnadd" onClick={(e) => onSubmit(e)}>
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
