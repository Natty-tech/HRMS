import React from "react";
import classes from "./Zambiataxi.module.css";
import AdikaLogo from "../images/AdikaLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Button } from "@mui/material";

const Zambiataxi = () => {
  return (
    <>
      <div className={`${classes.taxiwrapper}`}>
        <header className={`${classes.header}`}>
          <img src={AdikaLogo} alt="AdikaLogo" />
          <nav>
            <ul>
              <li>
                <a className={`${classes.atag}`} href="">
                  Home
                </a>
              </li>
              <li>
                <a className={`${classes.atag}`} href="">
                  About
                </a>
              </li>
              <li>
                <a className={`${classes.atag}`} href="">
                  Contact
                </a>
              </li>
              <li>
                <a className={`${classes.atag}`} href="">
                  Become a Driver
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className={`${classes.mainwrapper}`}>
            <form action="" method="post" enctype="multipart/form-data">
              <h2>Registration Hub</h2>
              <div className={`${classes.name}`}>
                <input type="text" placeholder="First Name*" />
                <input type="text" placeholder="Last Name*" />
              </div>
              <div className={`${classes.emailandphone}`}>
                <input type="text" placeholder="Email" />
                <input name="phone" type="text" placeholder="Phone*" />
              </div>
              <label className={`${classes.labels}`} htmlFor="phone">
                Phone number must start with +260 , 09
              </label>
              <div className={`${classes.cityandkin}`}>
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Kin Phone Number*" />
              </div>
              <label className={`${classes.labels}`} htmlFor="kinphone">
                Phone number must start with +260 , 09
              </label>
              <br />
              <label id={`${classes.l2}`} htmlFor="roadtax">
                Road Tax*
              </label>
              <label id={`${classes.l3}`} htmlFor="roadfitness">
                Road Fitness*
              </label>
              <div className={`${classes.roadtaxandfit}`}>
                <input type="file" placeholder="No file chosen" />
                <label id={`${classes.l30}`} htmlFor="roadfitness">
                  Road Fitness*
                </label>
                <input type="file" placeholder="Road Fitness*" />
              </div>
              <label id={`${classes.l4}`} htmlFor="driverlicence">
                Driver Licence*
              </label>
              <label id={`${classes.l5}`} htmlFor="">
                Insurance Photo
              </label>
              <div className={`${classes.Driverlicandphoto}`}>
                <input type="file" placeholder="No file chosen" />
                <label id={`${classes.l50}`} htmlFor="">
                  Insurance Photo
                </label>
                <input type="file" placeholder="No file chosen" />
              </div>
              <label id={`${classes.l6}`} htmlFor="rentalaggrement">
                Rental Agreement Photo
              </label>
              <div className={`${classes.rentalagreementphoto}`}>
                <input type="file" placeholder="No file chosen" />
              </div>
              <input
                id={`${classes.sendbtn}`}
                type="submit"
                placeholder="Send"
              />
            </form>
          </div>
        </main>
        <footer className={`${classes.Footer}`}>
          <div className={`${classes.footertop}`}>
            <img src={AdikaLogo} alt="Adika Logo" />
            <p>Our support team will handle any support request</p>
          </div>
          <p className={`${classes.homelink}`}>
            <a className={`${classes.atag}`} href="">
              Home
            </a>
          </p>
          <div className={`${classes.footerlast}`}>
            <p>
              © 2023 All rights reserved,Powered by{" "}
              <span>Adika Taxi Services PLC.</span>
            </p>
            <div className={`${classes.socialmedias}`}>
              <a className={`${classes.atagblue}`} href="">
                <FacebookIcon />
              </a>
              <a className={`${classes.atagblue}`} href="">
                <TwitterIcon />
              </a>
              <a className={`${classes.atagblue}`} href="">
                <LinkedInIcon />
              </a>
              <a className={`${classes.atagblue}`} href="">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Zambiataxi;
