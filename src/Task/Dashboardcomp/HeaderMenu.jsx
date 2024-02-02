import React, { useState, useEffect } from "react";
import Login from "../LoginPage";
import classes from "./HeaderMenu.module.css";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";

export default function HeaderMenu() {
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
    <div className={`${classes.headermenu}`}>
      <ul>
        <li className={`${classes.menulists}`}>
          {" "}
          <Link to="/Login" className={`${classes.items}`}>
            <AccountBoxOutlinedIcon style={{ color: "white" }} /> profile
          </Link>
        </li>

        <li className={`${classes.menulists}`}>
          <SettingsOutlinedIcon style={{ color: "white" }} /> Settings
        </li>
        <li className={`${classes.menulists}`}>
          <Link to="/Login" className={`${classes.items}`}>
            <LogoutOutlinedIcon style={{ color: "white" }} />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
