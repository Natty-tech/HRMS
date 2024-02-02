import React, { useState } from "react";
import classes from "./Workinfo.module.css";
import { blue } from "@mui/material/colors";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Personaldetail from "./Personaldetail";

export default function Workinfo({ empPage }) {
  const [off, setOff] = useState(true);

  const deleteSide = (value) => {
    setOff(value);
  };
  return (
    <>
      <Header deleteSide={deleteSide} value={off} />
      <Sidebar value={off} />
      <div className={`${classes.workwrapper}`}>
        <div className={`${classes.firstPart}`}>
          <div
            onClick={() => {
              empPage(1);
            }}
          >
            <h4>Basic info</h4>
          </div>
          <div
            style={{ backgroundColor: "white" }}
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
          >
            <h4>Personal Details</h4>
          </div>
        </div>
        <div className={`${classes.secondPart}`}>
          <div className={`${classes.secondpart1}`}>
            <h4>Department</h4>
            <select name="dept" id="dept">
              <option value="it">IT</option>
              <option value="marketing">Marketing</option>
            </select>
            <h4>Location</h4>
            <select name="location" id="location">
              <option value="summit">Summit</option>
              <option value="Kasanchis">Kasanchis</option>
            </select>
            <h4>Source of Hire</h4>
            <select name="soh" id="soh">
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
            <h4>Pay Rate</h4>
            <input type="number" placeholder="1000" />
            <h4>Work Phone</h4>
            <input type="tel" />
            <h4>Job Title</h4>
            <select name="jobtitle" id="jobtitle">
              <option value="developer">Developer</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className={`${classes.secondpart2}`}>
            <h4>Reporting To</h4>
            <select name="reportto" id="reportto">
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
            <h4>Employee Status</h4>
            <select name="empstatus" id="empststus">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <h4>Date of Hire</h4>
            <input type="date" />
            <h4>Pay Type</h4>
            <select name="paytype" id="paytype">
              <option value="awash">Awash</option>
              <option value="Commercialbank">Commercial Bank</option>
            </select>
            <Link to="/Personaldetail">
              <button>Next</button>
            </Link>
            <button onClick={() => empPage(0)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
