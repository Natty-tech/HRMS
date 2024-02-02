import React, { useState, useEffect } from "react";
import classes from "./Headercss.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMenu from "./HeaderMenu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CircleIcon from "@mui/icons-material/Circle";

export default function Header({ whiteMode, mode, deleteSide, value }) {
  const [menuOn, setMenuOn] = useState(false);

  const headerTrueFalse = () => {
    if (value) {
      return "className={`${classes.headerpart}`}";
    } else {
      return "className={`${classes.headerparttoggled}`}";
    }
  };
  const [emp, setEmp] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setEmp(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);
  let pp = `https://avatars.githubusercontent.com/u/1?v=4`;

  return (
    <>
      <div
        className={
          value ? `${classes.headerpart}` : `${classes.headerparttoggled}`
        }
        id={mode && `${classes.whitemode}`}
      >
        <div onClick={() => deleteSide(!value)} className={`${classes.toggle}`}>
          <MenuIcon
            style={mode == false ? { color: "white" } : { color: "black" }}
          />
        </div>

        <div className={`${classes.righthead}`}>
          <div className={`${classes.darklightmode}`}>
            <DarkModeIcon
              className={
                mode == false ? `${classes.dmode1}` : `${classes.dmode2}`
              }
              onClick={(e) => {
                whiteMode((prev) => {
                  return (prev = !prev);
                });
              }}
            />
            <LightModeIcon
              style={mode == false ? { color: "white" } : { color: "black" }}
              className={
                mode == false ? `${classes.lmode1}` : `${classes.lmode2}`
              }
              onClick={(e) => {
                whiteMode((prev) => {
                  return (prev = !prev);
                });
              }}
            />
          </div>
          <div
            className={`${classes.profile}`}
            onClick={() => setMenuOn((prev) => !prev)}
          >
            <img src={pp} alt="profile pic" />
          </div>
        </div>
      </div>
      {menuOn && <HeaderMenu />}
    </>
  );
}
