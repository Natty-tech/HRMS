import React from "react";
import classes from "./Designation.module.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";

const Designation = ({ whiteMode, mode }) => {
  const [emp, setEmp] = useState([]);
  const [off, setOff] = useState(true);
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(initial + 5);
  const [addDesignationOn, setAddDesignationOn] = useState(false);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setEmp(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);
  const deleteSide = (value) => {
    setOff(value);
  };
  let pages = emp.slice(initial, final);
  const Previous = () => {
    if (initial > 0) {
      setInitial(initial - 5);
      setFinal(final - 5);
    }
  };
  const Next = () => {
    if (final < emp.length) {
      setInitial(initial + 5);
      setFinal(final + 5);
    }
  };
  const addDesignation = () => {
    console.log("the function is listening!!!");
    return (
      <>
        <div className={`${classes.adddesig}`}>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h2>New Designation</h2>
            <label htmlFor="desigTitle">Designation Title</label>
            <input id="desigTitle" type="text" />
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              cols="30"
              rows="10"
              placeholder="Write description here..."
            ></textarea>
            <div>
              <button type="submit">Add</button>
              <button
                onClick={() => {
                  setAddDesignationOn(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  const desigDelete = (key) => {
    const newarr = emp.filter((users) => {
      return users.id != key;
    });
    setEmp(newarr);
  };

  return (
    <>
      <div
        style={
          mode == true
            ? { backgroundColor: "white", height: "100vh", overflow: "hidden" }
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
            mode == true
              ? `${classes.whitedesigwrapper}`
              : `${classes.desigwrapper}`
          }
        >
          <div
            id={
              addDesignationOn == true
                ? `${classes.smalldesigwrapper}`
                : `${classes.smalldesigwrapperoff}`
            }
          >
            {addDesignationOn == true ? addDesignation() : ""}
          </div>
          <h1>Designations</h1>
          <div className={`${classes.addDesig}`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setAddDesignationOn(true);
                console.log("the state has been changed to true!");
              }}
            >
              Add Designation
            </button>
          </div>
          <div className={`${classes.designations}`}>
            <div className={`${classes.desigtitles}`}>
              <p>Designation</p>
              <p>Description</p>
              <p>Number of Employees</p>
            </div>
            {pages.map((users) => (
              <div className={`${classes.desigInfo}`}>
                <div className={`${classes.desigstyle}`}>{users.login}</div>
                <div className={`${classes.desigstyle}`}>
                  {"Description goes here..."}
                </div>
                <div className={`${classes.desigstyle}`}>{2}</div>
                <div className={`${classes.desigstyle}`}>
                  <DeleteIcon
                    onClick={(e) => {
                      e.preventDefault();
                      desigDelete(users.id);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={`${classes.btns}`}>
            <button
              onClick={() => {
                Previous();
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                Next();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Designation;
