import { useState, useEffect, useRef } from "react";
import React from "react";
import classes from "./Employeecss.module.css";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import { Link, createRoutesFromElements } from "react-router-dom";
import Basicinfo from "./Basicinfo";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Button } from "@mui/material";
import AddEmp from "./AddEmp";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EmployeePage({ whiteMode, mode }) {
  const [emp, setEmp] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [off, setOff] = useState(true);
  const [empInfoOn, setEmpInfoOn] = useState(false);
  const [databin, setDatabin] = useState("");
  const [empViewOn, setEmpViewOn] = useState(false);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setEmp(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = emp.slice(firstPostIndex, lastPostIndex);
  //first pagination
  const pageNo = () => {
    let pages = [];
    let totalPosts = emp.length;
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pages.push(i);
    }

    return (
      <div className={`${classes.page}`}>
        <div id={`${classes.pagefirst}`}>
          {pages.map((page, index) => {
            return (
              <button onClick={() => setCurrentPage(page)} key={index}>
                {page}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const deleteSide = (value) => {
    setOff(value);
  };

  //This is a function form that will update users info
  function empinfo(info) {
    return (
      <>
        <form action="">
          <div className={`${classes.empinfowrapper}`}>
            <div className={`${classes.first}`}>
              <h2>Basic info</h2>
              <img src={info.avatar_url} alt="" />
              <label htmlFor="fname">First name</label>
              <input id="fname" defaultValue={info.login} type="text" />
              <label htmlFor="lname">Last name</label>
              <input id="lname" type="text" />
              <label htmlFor="age">Age</label>
              <input id="age" type="number" defaultValue="30" />
              <label htmlFor="id">Id</label>
              <input id="id" type="number" defaultValue={info.id} />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                defaultValue={"example@gmail.com"}
              />
            </div>
            <div className={`${classes.second}`}>
              <div>
                <h2>Work info</h2>
              </div>
              <div></div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="dept">Department</label>
                <input type="text" id="dept" />
              </div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="jobtitle">Job Title</label>
                <input type="text" id="jobtitle" />
              </div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="loc">Location</label>
                <input type="text" id="loc" />
              </div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="report">Report to</label>
                <input type="text" id="report" />
              </div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="emptype">Employee Type</label>
                <input type="text" id="emptype" />
              </div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="Emp Status">Employee Status</label>
                <input type="text" id="Emp Status" />
              </div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="SOH">Source of Hire</label>
                <input type="text" id="SOH" />
              </div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="DOH">Date of Hire</label>
                <input type="text" id="DOH" />
              </div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="payrate">Payrate</label>
                <input type="text" id="payrate" />
              </div>
              <div className={`${classes.second2}`}>
                {" "}
                <label htmlFor="workphone">Workphone</label>
                <input type="text" id="workphone" />
              </div>
            </div>
          </div>
          <div className={`${classes.third}`}>
            <h2>Personal info</h2>
            <div></div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="dept2">Department</label>
              <input type="text" id="dept2" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="mob">Mobile</label>
              <input type="text" id="mob" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="pno">Phone Number</label>
              <input type="text" id="pno" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="oemail">Other Email</label>
              <input type="text" id="oemail" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="dob">Date of Birth</label>
              <input type="text" id="dob" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="nationality">Nationality</label>
              <input type="text" id="nationality" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="gender">Gender</label>
              <input type="text" id="gender" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="doh">Date of Hire</label>
              <input type="text" id="doh" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="dl">Driver Licence</label>
              <input type="text" id="dl" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="workphone">Workphone</label>
              <input type="text" id="workphone" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="hobbies">Hobbies</label>
              <input type="text" id="hobbies" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="website">Website</label>
              <input type="text" id="website" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="add1">Address1</label>
              <input type="text" id="add1" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="add2">Address2</label>
              <input type="text" id="add2" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="city">City</label>
              <input type="text" id="city" />
            </div>
            <div className={`${classes.third2}`}>
              {" "}
              <label htmlFor="country">Country</label>
              <input type="text" id="country" />
            </div>
            <div></div>
            <div id={`${classes.btnpart}`}>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setEmpInfoOn(false);
                }}
              >
                Done!
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }

  //This is a function that will just display users info
  function empeview(info) {
    return (
      <>
        <div className={`${classes.empinfowrapper}`}>
          <div className={`${classes.first}`}>
            <h2>Basic info</h2>
            <img src={info.avatar_url} alt="" />
            <label htmlFor="fname">
              <h3>First name</h3>
            </label>
            <div className={`${classes.lookdivs}`}>{info.login}</div>

            <label htmlFor="lname">
              <h3>Last name</h3>
            </label>
            <div className={`${classes.lookdivs}`}>{info.lastname}</div>
            <label htmlFor="age">
              <h3>Age</h3>
            </label>
            <div className={`${classes.lookdivs}`}>{info.age}</div>
            <label htmlFor="id">
              <h3>Id</h3>
            </label>
            <div className={`${classes.lookdivs}`}>{info.id}</div>
            <label htmlFor="email">
              <h3>Email</h3>
            </label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.second}`}>
            <div>
              <h2>Work info</h2>
            </div>
            <div></div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="dept">Department</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="jobtitle">Job Title</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="loc">Location</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="report">Report to</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="emptype">Employee Type</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="Emp Status">Employee Status</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="SOH">Source of Hire</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="DOH">Date of Hire</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="payrate">Payrate</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
            <div className={`${classes.second2}`}>
              {" "}
              <label htmlFor="workphone">Workphone</label>
              <div className={`${classes.lookdivs}`}>{info.email}</div>
            </div>
          </div>
        </div>
        <div className={`${classes.third}`}>
          <h2>Personal info</h2>
          <div></div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="dept2">Department</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="mob">Mobile</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="pno">Phone Number</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="oemail">Other Email</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="dob">Date of Birth</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="nationality">Nationality</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="gender">Gender</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="doh">Date of Hire</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="dl">Driver Licence</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="workphone">Workphone</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="hobbies">Hobbies</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="website">Website</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="add1">Address1</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="add2">Address2</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="city">City</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div className={`${classes.third2}`}>
            {" "}
            <label htmlFor="country">Country</label>
            <div className={`${classes.lookdivs}`}>{info.email}</div>
          </div>
          <div></div>
          <div id={`${classes.btnpart}`}>
            <button
              onClick={() => {
                setEmpViewOn(false);
              }}
            >
              Go back
            </button>
          </div>
        </div>
      </>
    );
  }
  //emp Delete
  const empDelete = (key) => {
    const newarr = emp.filter((users) => {
      return users.id != key;
    });
    setEmp(newarr);
  };

  //Main return
  return (
    <>
      <div
        style={
          mode == true
            ? {
                backgroundColor: "white",
                height: "100vh",
                overflow: "hidden",
              }
            : {}
        }
      >
        <Header
          whiteMode={whiteMode}
          mode={mode}
          deleteSide={deleteSide}
          value={off}
        />
        <Sidebar mode={mode} deleteSide={deleteSide} value={off} />
        <div
          className={
            mode == false ? `${classes.wrap}` : `${classes.wrapwhitemode}`
          }
        >
          <div className={`${classes.empinfo}`}>
            {empInfoOn && empinfo(databin)}
            {empViewOn && empeview(databin)}
          </div>
          <h1>Employees</h1>
          <div className={`${classes.btn}`}>
            <div className={`${classes.statusbtn}`}>
              <button>Active</button>
              <button>Resigned</button>
              <button>Deceased</button>
              <button>All</button>
            </div>
            <div className={`${classes.empaddbtn}`}>
              <Link to="/AddEmp">
                <button>+ Add new Employee</button>
              </Link>
            </div>
          </div>
          <div className={`${classes.empwrapperscroll}`}>
            <div className={`${classes.empwrapper}`}>
              <div className={`${classes.emphead}`}>
                <p>Employee Name</p> <p>Designation</p> <p>Departement</p>{" "}
                <p>Employement Type</p> <p>joined</p> <p>Status</p>
              </div>{" "}
              {currentPost.map((users) => (
                <div className={`${classes.empbody}`}>
                  {" "}
                  <li>{users.login}</li>
                  <li>{users.id}</li>
                  <li>{users.node_id}</li>
                  <li>{users.type}</li>
                  <li></li>
                  <li></li>
                  <div className={`${classes.icons}`}>
                    <li>
                      <EditIcon
                        onClick={(e) => {
                          e.preventDefault();
                          setEmpInfoOn(true);
                          setDatabin(users);
                        }}
                        id={`${classes.editicon}`}
                      />
                      <VisibilityIcon
                        onClick={(e) => {
                          e.preventDefault();
                          setEmpViewOn(true);
                          setDatabin(users);
                        }}
                        id={`${classes.visibleicon}`}
                      />
                      <DeleteIcon
                        id={`${classes.deleteicon}`}
                        onClick={(e) => {
                          e.preventDefault();
                          empDelete(users.id);
                        }}
                      />
                    </li>
                  </div>
                </div>
              ))}
              {pageNo()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
