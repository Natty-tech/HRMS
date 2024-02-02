import { useState, useEffect } from "react";
import React from "react";
import classes from "./Departement.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DeleteIcon from "@mui/icons-material/Delete";

const DepartementPage = ({ whiteMode, mode }) => {
  const [emp, setEmp] = useState([]);
  const [off, setOff] = useState(true);
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(initial + 10);
  const [smalldept, setSmalldept] = useState(false);

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

  const next = () => {
    if (final < emp.length) {
      setInitial(initial + 10);
      setFinal(final + 10);
    }
  };
  const previous = () => {
    if (initial > 0) {
      setInitial(initial - 10);
      setFinal(final - 10);
    }
  };
  const [deptcontainer, setDeptcontainer] = useState([
    {
      depttype: "Accounting",
      depthead: "brian",
      noemp: 10,
      id: 1,
    },
    {
      depttype: "IT",
      depthead: "jack",
      noemp: 10,
      id: 2,
    },
    {
      depttype: "Marketing",
      depthead: "maria",
      noemp: 10,
      id: 3,
    },
    {
      depttype: "Stuff",
      depthead: "james",
      noemp: 10,
      id: 4,
    },
    {
      depttype: "NSA",
      depthead: "tom",
      noemp: 10,
      id: 5,
    },
  ]);
  //to delete departements
  const deptDelete = (key) => {
    let newarr = deptcontainer.filter((dept) => {
      return dept.id != key;
    });
    setDeptcontainer(newarr);
  };

  const newDept = () => {
    return (
      <>
        <form action="">
          <div className={`${classes.newdeptwrapper}`}>
            <div className={`${classes.newdepthead}`}>
              <h2>New Departement</h2>
            </div>
            <div className={`${classes.newdeptbody}`}>
              <label htmlFor="">Department Title</label>
              <input type="text" />
              <label htmlFor="">Description</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Optional"
              ></textarea>
              <label htmlFor="">Document Title</label>
              <input type="text" />
            </div>
            <div className={`${classes.newdeptfoot}`}>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Create Departement
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSmalldept((prev) => {
                    return (prev = !prev);
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </>
    );
  };

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
          className={mode == true ? `${classes.whitewrap}` : `${classes.wrap}`}
        >
          <div
            className={
              smalldept == true
                ? `${classes.smalldeptwrapper}`
                : `${classes.smalldeptwrapperoff}`
            }
          >
            {" "}
            {newDept()}
          </div>
          <h1>Departement</h1>
          <button
            id={`${classes.adddeptbtn}`}
            onClick={(e) => {
              e.preventDefault();
              setSmalldept((prev) => {
                return (prev = !prev);
              });
            }}
          >
            Add Department
          </button>
          <div className={`${classes.emps}`}>
            <div className={`${classes.emphead}`}>
              <li>Department</li>
              <li>Department Head</li>
              <li>Number of Employees</li>
            </div>
            {deptcontainer.map((dept) => (
              <div key={dept.id} className={`${classes.empsinner}`}>
                {" "}
                <li>
                  <div className={`${classes.capitalizer}`}>
                    <h3>{dept.depttype[0]}</h3>
                  </div>
                  {dept.depttype}
                </li>
                <li>{dept.depthead}</li>
                <li> {dept.noemp}</li>
                <li>
                  <DeleteIcon
                    onClick={(e) => {
                      e.preventDefault();
                      deptDelete(dept.id);
                    }}
                  />
                </li>
              </div>
            ))}
            <div className={`${classes.btns}`}>
              <button
                onClick={() => {
                  previous();
                }}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  next();
                }}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartementPage;
