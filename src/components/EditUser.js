import React, { useState, useContext, useEffect } from "react";
// import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import Employees from "./Employees";

function EditUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [empoloyeeID, setEmpoloyeeID] = useState("");
  const [salary, setSalary] = useState("");
  //const [designation, setDesignation] = useState(options[0].value);
  const [designation, setDesignation] = useState("");

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const onSubmit = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.empoloyeeID = empoloyeeID;
    a.name = name;
    a.designation = designation;
    a.salary = salary;

    navigate("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setEmpoloyeeID(localStorage.getItem("EmpoloyeeID"));
    setName(localStorage.getItem("Name"));
    setDesignation(localStorage.getItem("Designation"));
    setSalary(localStorage.getItem("Salary"));
  }, []);

  const options = [
    { value: "", text: "Select designation" },
    { value: "Designer", text: "Designer" },
    { value: "Manager", text: "Manager" },
    { value: "Tester", text: "Tester" },
  ];
  return (
    <div>
      <p className="headerText">Edit User Here</p>
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
                value={empoloyeeID}
                onChange={(e) => setEmpoloyeeID(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="email">Employee Name</label>
              <input
                type="text"
                id="name"
                placeholder="Employee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="name">Designation</label>
              <div class="custom-sel">
                <select
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                >
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
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="editbtn" onClick={(e) => onSubmit(e)}>
              Submit Details
            </button>
            <button type="cancel" class="bttnclass">
              <Link className="btn btn-primary" to="/">
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
