import React, { useState } from "react";
import classes from "./Infocss.module.css";
import OverviewPage from "./OverviewPage";
import DepartementPage from "./DepartementPage";
import Designation from "./Designation";
import Basicinfo from "./Basicinfo";
import Workinfo from "./Workinfo";
import Personaldetail from "./Personaldetail";
import AddDesignation from "./AddDesignation";
import Workingdays from "./Workingdays";
import Sidebar from "./Sidebar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Info = ({ text, value }) => {
  /*
  This is the code
  {text == "overview" ? <h2>good its working</h2> : ""}
  */

  /* To know which to render
  {text == "overview" ? <OverviewPage /> : ""}
      {text == "employee" ? <EmployeePage /> : ""}
      */

  const [pageCount, setPageCount] = useState(0);
  const [newDesig, setNewDesig] = useState(0);

  const desigChanger = (designo) => {
    setNewDesig(designo);
    console.log("im working");
    console.log(newDesig);
  };

  const empPage = (pageno) => {
    setPageCount(pageno);
  };

  return (
    <div>
      <Sidebar />
      {/* <div
      className={value ? `${classes.Infopart}` : `${classes.Infoparttoggled}`}
    >
      {newDesig == 1 ? <AddDesignation desigChanger={desigChanger} /> : ""}
      {text == "overview" ? newDesig == 0 && <OverviewPage /> : ""}
      {text == "employee" && pageCount == 0 ? (
        <EmployeePage empPage={empPage} pageCount={pageCount} />
      ) : (
        ""
      )}
      {text == "departement" ? newDesig == 0 && <DepartementPage /> : ""}
      {text == "designation"
        ? newDesig == 0 && <Designation desigChanger={desigChanger} />
        : ""}
      {text == "workday" ? newDesig == 0 && <Workingdays /> : ""}

      {pageCount == 1 ? <Basicinfo empPage={empPage} /> : ""}
      {pageCount == 2 ? <Workinfo empPage={empPage} /> : ""}
      {pageCount == 3 ? <Personaldetail empPage={empPage} /> : ""}
    </div> */}
    </div>
  );
};

export default Info;
