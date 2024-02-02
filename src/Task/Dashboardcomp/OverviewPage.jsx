import React, { useEffect, useState } from "react";
import classes from "./Overviewpagecss.module.css";
import { PureComponent } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import BadgeIcon from "@mui/icons-material/Badge";

import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const OverviewPage = ({ whiteMode, mode }) => {
  const [emp, setEmp] = useState([]);
  const [off, setOff] = useState(true);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setEmp(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const data = [
    { name: "G1", value: 200 },
    { name: "G2", value: 300 },
    { name: "G3", value: 800 },
    { name: "G4", value: 400 },
    { name: "G5", value: 300 },
  ];

  const deleteSide = (value) => {
    setOff(value);
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
          style={
            off == false
              ? { width: "100%", transition: "1s" }
              : { transition: "1s" }
          }
          className={
            mode == false ? `${classes.wrap}` : `${classes.wrapwhitemode}`
          }
        >
          {" "}
          <h1>HR Management</h1>
          <div className={`${classes.flexxer}`}>
            <div className={`${classes.firshalf}`}>
              <div className={`${classes.box}`} id={`${classes.viewemp}`}>
                <div>
                  <p>Employees</p>
                  <h2>{emp.length}</h2>
                </div>
                <div className={`${classes.iconsize}`}>
                  {" "}
                  <GroupsOutlinedIcon id={`${classes.iconsize1}`} />
                </div>
              </div>
              <div className={`${classes.box}`} id={`${classes.dept}`}>
                <div>
                  {" "}
                  <p>Departments</p>
                  <h2> {emp.map((user) => user.type == "User").length}</h2>
                </div>
                <div className={`${classes.iconsize}`}>
                  <AccountTreeOutlinedIcon id={`${classes.iconsize2}`} />
                </div>
              </div>
              <div className={`${classes.box}`} id={`${classes.desig}`}>
                <div>
                  {" "}
                  <p>Designations</p>
                  <h2> {emp.map((user) => user.type == "User").length}</h2>
                </div>
                <div className={`${classes.iconsize}`}>
                  {" "}
                  <BadgeIcon id={`${classes.iconsize3}`} />
                </div>
              </div>
            </div>

            <div className={`${classes.secondhalf}`}>
              <div id={`${classes.Linechart}`} className={`${classes.bigbox}`}>
                <LineChart
                  width={500}
                  style={{ width: `calc(100%)` }}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip style={{ width: `calc(100%)` }} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="name"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="rgb(46,222,228)"
                    style={{ width: `calc(100%)` }}
                  />
                </LineChart>
              </div>
              <div id={`${classes.PieChart}`} className={`${classes.bigbox}`}>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    fill="#8884d8"
                    label
                    style={{ width: `calc(100%)` }}
                  />
                  {/* <Pie
                dataKey="value"
                data={data02}
                cx={500}
                cy={200}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
              />*/}
                  <Tooltip />
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
