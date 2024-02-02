import React from "react";
import classes from "./AddDesig.module.css";
import { useState, useEffect } from "react";

const AddDesignation = ({ desigChanger }) => {
  const [emp, setEmp] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setEmp(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className={`${classes.addDesigWrapper}`}>
        <div className={`${classes.addDesigTitle}`}>
          <h4>New Designation</h4>
        </div>
        <div className={`${classes.addDesigcontent}`}>
          <div className={`${classes.add}`}>
            <p>Designation Title*</p>
            <input type="text" />
          </div>
          <div className={`${classes.add}`}>
            <p>Description</p>
            <textarea name="" id=""></textarea>
          </div>

          <input type="submit" value={"Create Designation"} />
          <button onClick={() => desigChanger(0)}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default AddDesignation;
