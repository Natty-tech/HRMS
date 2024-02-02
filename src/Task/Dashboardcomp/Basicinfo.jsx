import { React, useState } from "react";
import classes from "./Basicinfo.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Workinfo from "./Workinfo";
import { Link } from "react-router-dom";

const Basicinfo = ({ empPage }) => {
  const [off, setOff] = useState(true);
  const deleteSide = (value) => {
    setOff(value);
  };

  return (
    <>
      <Header deleteSide={deleteSide} value={off} />
      <Sidebar value={off} />
      <div className={`${classes.basicinfowrapper}`}>
        <div className={`${classes.firstPart}`}>
          <div style={{ backgroundColor: "white" }}>
            <h4>Basic info</h4>
          </div>
          <div>
            <h4>Work</h4>
          </div>
          <div>
            <h4>Personal Details</h4>
          </div>
        </div>
        <div className={`${classes.secondPart}`}>
          <h4>Basic info</h4>
          <form action="">
            <h4>Employee Name*</h4>
            <div className={`${classes.namepart}`}>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <h4>Employee Email and ID</h4>
            <div className={`${classes.emailpart}`}>
              <input type="text" placeholder="info@example.com" />
              <input type="number" placeholder="12332" />
            </div>
            <div className={`${classes.buttons}`}>
              <Link to="/Workinfo">
                <button>Next</button>
              </Link>
              <button onClick={() => empPage(0)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Basicinfo;
