import Zambiataxi from "./TestZambia/Zambiataxi";
import React, { useEffect, useState } from "react";
import LoginPage from "./Task/LoginPage";
import EmployeePage from "./Task/Dashboardcomp/EmployeePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "./Task/Dashboardcomp/OverviewPage";
import DepartementPage from "./Task/Dashboardcomp/DepartementPage";
import Designation from "./Task/Dashboardcomp/Designation";
import Workingdays from "./Task/Dashboardcomp/Workingdays";
import Basicinfo from "./Task/Dashboardcomp/Basicinfo";
import Workinfo from "./Task/Dashboardcomp/Workinfo";
import Personaldetail from "./Task/Dashboardcomp/Personaldetail";
import AddEmp from "./Task/Dashboardcomp/AddEmp";
import LeaveManagement from "./Task/Dashboardcomp/LeaveManagement";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [mode, setMode] = useState(false);

  const whiteMode = (modenew) => {
    setMode(modenew);
  };
  //To get the saved data
  useEffect(() => {
    const data = window.localStorage.getItem("MODE_SAVER");
    if (data !== null) {
      setMode(JSON.parse(data));
      console.log(JSON.parse(data));
    }
  }, []);

  //To persist state after reload
  useEffect(() => {
    window.localStorage.setItem("MODE_SAVER", JSON.stringify(mode));
  }, [mode]);

  return (
    <>
      <div>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<OverviewPage whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="/Overview"
              element={<OverviewPage whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="/Employee"
              element={<EmployeePage whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="/Departement"
              element={<DepartementPage whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="/Designation"
              element={<Designation whiteMode={whiteMode} mode={mode} />}
            />
            {/*  <Route path="/Settings" element={<Settings />} /> */}
            <Route
              path="/WorkingDays"
              element={<Workingdays whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="LeaveManagement"
              element={<LeaveManagement whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="/Basicinfo"
              element={<Basicinfo whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="/Workinfo"
              element={<Workinfo whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="/Personaldetail"
              element={<Personaldetail whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="/AddEmp"
              element={<AddEmp whiteMode={whiteMode} mode={mode} />}
            />
            <Route
              path="/Login"
              element={<LoginPage whiteMode={whiteMode} mode={mode} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
