import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import classes from "./LeaveManagement.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Input } from "antd";

const LeaveManagement = ({ whiteMode, mode }) => {
  const [emp, setEmp] = useState([]);
  const [off, setOff] = useState(true);
  const [addform, setAddform] = useState(false);
  const [preferredoption, setPreferredoption] = useState("others");
  const [preferredvalue, setPreferredvalue] = useState();

  const deleteSide = (value) => {
    setOff(value);
  };
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setEmp(FinalData);
  };
  useEffect(() => {
    getUsers();
  }, []);
  let pages = emp.slice(0, 10);
  console.log(emp.login);

  //This function is to add new Leave
  function addForm() {
    return (
      <>
        <div
          className={
            addform == false ? `${classes.addleave1}` : `${classes.addleave2}`
          }
        >
          <form action="">
            <h2>Leave Application Form</h2>
            <div className={`${classes.addleavegrid}`}>
              <div className={`${classes.eachgrid}`}>
                <label htmlFor="empname">Employee Name</label>
                <input id="empname" type="text" />
              </div>
              <div className={`${classes.eachgrid}`}>
                {" "}
                <label htmlFor="leavetype">Leave Type</label>
                <select
                  id="leavetype"
                  onChange={(e) => {
                    setPreferredvalue(e.target.value);
                    console.log(preferredvalue);
                  }}
                >
                  <option value="casual">Casual</option>
                  <option value="weekly">Weekly</option>
                  <option value="others">Others</option>
                </select>
                {preferredvalue == "others" ? (
                  <input type="text" placeholder="Enter the leave type"></input>
                ) : (
                  ""
                )}
              </div>
              <div className={`${classes.eachgrid}`}>
                <label htmlFor="ASD">Application Start Date</label>
                <input id="ASD" type="date" />
              </div>
              <div className={`${classes.eachgrid}`}>
                <label htmlFor="AED">Appliaction End Date</label>
                <input id="AED" type="date" />
              </div>
              <div className={`${classes.eachgrid}`}>
                <label htmlFor="AD">Apply Day</label>
                <input type="date" id="AD" />
              </div>
              <div className={`${classes.eachgrid}`}>
                {" "}
                <label htmlFor="empname">Application Hard Copy</label>
                <input type="file" />
              </div>
              <div className={`${classes.eachgrid}`}>
                <label htmlFor="ASD2">Approve Start Date</label>
                <input type="date" id="ASD2" />
              </div>
              <div className={`${classes.eachgrid}`}>
                <label htmlFor="empname">Approve End Date</label>
                <input type="date" id="AED2" />
              </div>
              <div className={`${classes.eachgrid}`}>
                {" "}
                <label htmlFor="AD2">Approved Day</label>
                <input type="date" id="AD2" />
              </div>
              <div className={`${classes.eachgrid}`}>
                {" "}
                <label htmlFor="AB">Approved By</label>
                <input type="text" id="AB" />
              </div>
            </div>
            <div className={`${classes.addleaveflex}`}>
              <label htmlFor="reason">Reason</label>
              <textarea
                id="reason"
                cols="100"
                rows="3"
                placeholder="Reason"
              ></textarea>
            </div>
            <div className={`${classes.btns}`}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAddform(false);
                }}
              >
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={
          mode == true ? { backgroundColor: "white", height: "100vh" } : {}
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
            mode == false
              ? `${classes.leavemangementwrapper}`
              : `${classes.whiteleavemangementwrapper}`
          }
        >
          {addForm()}
          <div className={`${classes.table}`}>
            <button
              onClick={() => {
                setAddform(true);
              }}
            >
              Add Leave Form
            </button>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Leave Type</th>
                  <th>Application Start Date</th>
                  <th>Application End Date</th>
                  <th>Approve Start Date</th>
                  <th>Approve End Date</th>
                  <th>Apply Day</th>
                  <th>Approved Day</th>
                  <th>Application Hard Copy</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {" "}
                {pages.map((users) => (
                  <>
                    <tr>
                      {" "}
                      <td>{users.login}</td>
                      <td>sick</td>
                      <td>2021</td>
                      <td>2022</td>
                      <td>2021</td>
                      <td>2022</td>
                      <td>2023</td>
                      <td>14-2-22</td>
                      <td>hard copy</td>
                      <td>approved</td>
                      <td>
                        <DeleteIcon />
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveManagement;
