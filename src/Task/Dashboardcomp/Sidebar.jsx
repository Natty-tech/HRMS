import React, { useState } from "react";
import classes from "./Sidebarcss.module.css";
import PersonIcon from "@mui/icons-material/Person";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BadgeIcon from "@mui/icons-material/Badge";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { BrowserRouter, Link } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Sidebar = ({ mode, deleteSide, value }) => {
  return (
    <>
      <div
        className={
          mode == true ? `${classes.whitemode}` : `${classes.whitemodeoff}`
        }
        id={
          value
            ? !mode && `${classes.sidebarfull}`
            : `${classes.sidebarfullOFF}`
        }
      >
        <div className={`${classes.sideLogo}`}>
          <div id={`${classes.sidelogo2}`}>
            {" "}
            <h2> Logo</h2>
            <ArrowCircleLeftIcon
              onClick={() => {
                deleteSide(!value);
              }}
            />
          </div>
          <span>HRM</span>
        </div>

        <div className={`${classes.sideLists}`}>
          <div className={`${classes.sideList}`}>
            <ul>
              <Link className={`${classes.l}`} to="/Overview">
                <div
                  className={
                    window.location.pathname == "/Overview"
                      ? `${classes.active}`
                      : `${classes.lists}`
                  }
                >
                  <WorkspacesIcon className={`${classes.icons}`} />
                  <li>Overview</li>
                </div>
              </Link>
              <Link className={`${classes.l}`} to="/Employee">
                <div
                  className={
                    window.location.pathname == "/Employee"
                      ? `${classes.active}`
                      : `${classes.lists}`
                  }
                >
                  {<PersonIcon className={`${classes.icons}`} />}
                  <li>Employees</li>
                </div>
              </Link>
              <Link className={`${classes.l}`} to="/Departement">
                <div
                  className={
                    window.location.pathname == "/Departement"
                      ? `${classes.active}`
                      : `${classes.lists}`
                  }
                >
                  <AccountTreeIcon className={`${classes.icons}`} />
                  <li>Departements</li>
                </div>
              </Link>
              <Link className={`${classes.l}`} to="/Designation">
                <div
                  className={
                    window.location.pathname == "/Designation"
                      ? `${classes.active}`
                      : `${classes.lists}`
                  }
                >
                  <BadgeIcon className={`${classes.icons}`} />
                  <li>Designations</li>
                </div>
              </Link>

              <Link className={`${classes.l}`} to="/WorkingDays">
                <div
                  className={
                    window.location.pathname == "/WorkingDays"
                      ? `${classes.active}`
                      : `${classes.lists}`
                  }
                >
                  <DateRangeIcon className={`${classes.icons}`} />
                  <li>Working days</li>
                </div>
              </Link>

              <Link className={`${classes.l}`} to="/LeaveManagement">
                <div
                  className={
                    window.location.pathname == "/LeaveManagement"
                      ? `${classes.active}`
                      : `${classes.lists}`
                  }
                >
                  <ExitToAppIcon className={`${classes.icons}`} />
                  <li>Leave Management</li>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
