import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Employees from "./Employees";
import Popup from "./Popup";

export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(Employees);
  const [order, setOrder] = useState("ASC");
  const EditId = (id, empoloyeeID, name, designation, salary) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("EmpoloyeeID", empoloyeeID);
    localStorage.setItem("Name", name);
    localStorage.setItem("Designation", designation);
    localStorage.setItem("Salary", salary);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const removeUser = (id) => {
    setPopupOpen(true);
  };

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <>
      <button>
        <Link className="btn btn-primary" to="/add">
          Add User
        </Link>
      </button>
      <div class="rounded-box">
        <header class="headerClass">
          <h4>Employee List</h4>
        </header>
        <div class="content">
          <div class="table-container">
            <div class="search-container">
              <p class="filterClass">Filter By:</p>
              <div class="custom-select">
                <select>
                  <option selected disabled>
                    Designation
                  </option>
                  <option>Designer</option>
                  <option>Manager</option>
                  <option>Tester</option>
                </select>
                <div class="arrow"></div>
              </div>
              <div class="custom-select">
                <select>
                  <option selected disabled>
                    Salary
                  </option>
                  <option>Less than 50,000</option>
                  <option>50,000-1,00,000</option>
                  <option>Greater than 1,00,000</option>
                </select>
                <div class="arrow"></div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th onClick={() => sorting("empoloyeeID")}>
                    Employee ID <div class="triangle_down1"></div>
                    <div class="triangle_up1"></div>
                  </th>
                  <th>Employee Name</th>
                  <th onClick={() => sorting("designation")}>
                    Employee Designation <div class="triangle_down2"></div>
                    <div class="triangle_up2"></div>
                  </th>
                  <th onClick={() => sorting("salary")}>
                    Salary <div class="triangle_down"></div>
                    <div class="triangle_up"></div>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.empoloyeeID}</td>
                      <td>{item.name}</td>
                      <td>{item.designation}</td>
                      <td>{item.salary}</td>
                      <td>
                        {" "}
                        <Link
                          to={`/edit`}
                          color="warning"
                          className="btn btn-warning mr-1"
                        >
                          <i
                            class="fa fa-pencil"
                            onClick={() =>
                              EditId(
                                item.id,
                                item.empoloyeeID,
                                item.name,
                                item.designation,
                                item.salary
                              )
                            }
                          ></i>
                        </Link>
                        &nbsp;
                        <i
                          class="fa fa-close"
                          onClick={() => removeUser(item.id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </div>
    </>
  );
};
