import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import classes from "./Personaldetail.module.css";

const Personaldetail = () => {
  const [off, setOff] = useState(true);

  const deleteSide = (value) => {
    setOff(value);
  };
  return (
    <>
      <Header deleteSide={deleteSide} value={off} />
      <Sidebar value={off} />
      <div className={`${classes.personladetailwrapper}`}>
        <div className={`${classes.first}`}>
          <div
            onClick={() => {
              empPage(1);
            }}
          >
            <h4>Basic info</h4>
          </div>
          <div
            onClick={() => {
              empPage(2);
            }}
          >
            <h4>Work</h4>
          </div>
          <div
            onClick={() => {
              empPage(3);
            }}
            style={{ backgroundColor: "white" }}
          >
            {" "}
            <h4>Personal Details</h4>
          </div>
        </div>
        <div className={`${classes.second}`}>
          <div className={`${classes.second1}`}>
            <h4>Mobile</h4>
            <input type="tel" />
            <h4>Other Email</h4>
            <input type="email" />
            <h4>Nationality</h4>
            <input type="text" />
            <h4>Address 1</h4>
            <input type="text" />
            <h4>Country</h4>
            <input type="text" />
            <h4>Biography</h4>
            <textarea
              name="biography"
              id="biography"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className={`${classes.second2}`}>
            <h4>Phone</h4>
            <input type="tel" />
            <h4>Date of Birth</h4>
            <input type="date" />
            <h4>Gender</h4>
            <select name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <h4>City</h4>
            <input type="text" />
            <button>Create Employee</button>
            <button onClick={() => empPage(0)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personaldetail;
