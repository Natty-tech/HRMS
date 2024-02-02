import React, { useState } from "react";
import Sidebar from "./Dashboardcomp/Sidebar";
import Header from "./Dashboardcomp/Header";
import Info from "./Dashboardcomp/Info";
import classes from "./Dashboardcss.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = () => {
  const [text, setText] = useState("overview");
  const [off, setOff] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  const changeText = (data) => {
    setText(data);
    console.log(text);
  };
  const deleteSide = (value) => {
    setOff(value);
  };

  return (
    <>
      <div className={`${classes.DashboardSize}`}>
        {/* <Sidebar changeText={changeText} text={text} value={off} /> */}
        {/*  <Header deleteSide={deleteSide} value={off} /> */}
        {/* <Info text={text} value={off} /> */}
      </div>
    </>
  );
};

export default Dashboard;
