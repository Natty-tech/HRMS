import React, { useState } from "react";
import classes from "./AddEmp.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmployeePage from "./EmployeePage";
import { Link } from "react-router-dom";

const AddEmp = ({ whiteMode, mode }) => {
  const [off, setOff] = useState(true);
  const [toSide, setToSide] = useState(0);

  const deleteSide = (value) => {
    setOff(value);
  };
  const nextPage = () => {
    setToSide(toSide + 1);
    console.log("im working");
  };
  const previousPage = () => {
    setToSide(toSide - 1);
  };

  return (
    <>
      <div style={mode == true ? { backgroundColor: "white" } : {}}>
        <Header
          whiteMode={whiteMode}
          mode={mode}
          deleteSide={deleteSide}
          value={off}
        />
        <Sidebar mode={mode} deleteSide={deleteSide} value={off} />
        <div
          className={
            mode == false
              ? `${classes.AddEmpWrapper}`
              : `${classes.wrapwhitemode}`
          }
        >
          <form action="">
            <div
              className={
                toSide == 0 ? `${classes.body}` : `${classes.basicscroll}`
              }
            >
              <h2>Basic info</h2>
              <div className={`${classes.basicbody}`}>
                <div>
                  <p>Employee Name</p>
                  <input type="text" placeholder="First Name" />
                </div>
                <div id={`${classes.secondname}`}>
                  <input type="text" placeholder="Second Name" />
                </div>
                <div className={`${classes.eidemail}`}>
                  <p>Employee ID</p>
                  <input type="number" placeholder="12332" />
                </div>
                <div>
                  <p>Email</p>

                  <input type="email" placeholder="info@example.com" />
                </div>
              </div>
              <div className={`${classes.basicbtn}`}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    nextPage();
                  }}
                >
                  Next
                </button>
                <Link to="/Employee">
                  <button>Cancel</button>
                </Link>
              </div>
            </div>
            <div
              className={
                (toSide == 0 && `${classes.Work}`) ||
                (toSide == 1 && `${classes.Workscroll}`) ||
                (toSide == 2 && `${classes.basicscroll}`)
              }
            >
              <h2>Work info</h2>
              <div className={`${classes.Workbody}`}>
                <div>
                  <p id={`${classes.iddept}`}>Departement</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Job Title</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Location</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Reporting To</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Employee Type</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Employee Status</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Source of Hire</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Date of Hire</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Pay Rate</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Work Phone</p>
                  <input type="text" />
                </div>
              </div>
              <div className={`${classes.basicbtn}`}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    previousPage();
                  }}
                >
                  Previous
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    nextPage();
                  }}
                >
                  Next
                </button>
              </div>
            </div>

            <div
              className={
                (toSide == 0 && `${classes.Personal}`) ||
                (toSide == 1 && `${classes.Personal}`) ||
                (toSide == 2 && `${classes.PersonalScroll}`)
              }
            >
              <h2>Personal info</h2>
              <div className={`${classes.Personalbody}`}>
                <div>
                  <p id={`${classes.iddept}`}>Departement</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Mobile</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Phone</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Other Email</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Date of birth</p>
                  <input type="date" />
                </div>
                <div>
                  <p>Nationality</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Gender</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Date of Hire</p>
                  <input type="date" />
                </div>
                <div>
                  <p>Driving Licence</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Work Phone</p>
                  <input type="number" />
                </div>
                <div>
                  <p>Hobbies</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Website</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Address 1</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Address 2</p>
                  <input type="text" />
                </div>
                <div>
                  <p>City</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Country</p>
                  <input type="text" />
                </div>
              </div>
              <div className={`${classes.basicbtn}`}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    previousPage();
                  }}
                >
                  Previous
                </button>
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEmp;
