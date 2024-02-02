import React from "react";
import classes from "./Zambiataxi.module.css";
import AdikaLogo from "../images/AdikaLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
const Zambiataxi = () => {
  const notify = () => toast("Successfully Submitted!");
  return (
    <>
      <div className={`${classes.taxiwrapper}`}>
        <header className={`${classes.header}`}>
          <img src={AdikaLogo} alt="AdikaLogo" />
          <nav>
            <ul>
              <li>
                <Link to=" " className={`${classes.atag}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="" className={`${classes.atag}`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="" className={`${classes.atag}`}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="" className={`${classes.atag}`}>
                  Become a Driver
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className={`${classes.mainwrapper}`}>
            <form
              action="http://196.188.127.230:4000/register"
              method="POST"
              enctype="multipart/form-data"
            >
              <h2>Registration Hub</h2>
              <div className={`${classes.name}`}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  required
                />
              </div>
              <div className={`${classes.emailandphone}`}>
                <input type="text" name="email" placeholder="Email" required />
                <input name="phone" type="text" placeholder="Phone*" required />
              </div>
              <label className={`${classes.labels}`} htmlFor="phone">
                Phone number must start with +260 , 09
              </label>
              <div className={`${classes.cityandkin}`}>
                <input type="text" name="city" placeholder="City" required />
                <input
                  type="text"
                  name="kinPhone"
                  placeholder="Kin Phone Number*"
                  required
                />
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
                <input
                  type="file"
                  name="roadTax"
                  placeholder="No file chosen"
                  required
                />
                <label id={`${classes.l30}`} htmlFor="roadfitness">
                  Road Fitness*
                </label>
                <input
                  type="file"
                  name="roadFitness"
                  placeholder="Road Fitness*"
                  required
                />
              </div>
              <label id={`${classes.l4}`} htmlFor="driverlicence">
                Driver Licence*
              </label>
              <label id={`${classes.l5}`} htmlFor="">
                Insurance Photo
              </label>
              <div className={`${classes.Driverlicandphoto}`}>
                <input
                  type="file"
                  name="driverLicense"
                  placeholder="No file chosen"
                  required
                />
                <label id={`${classes.l50}`} htmlFor="">
                  Insurance Photo
                </label>
                <input
                  type="file"
                  name="insurancePhoto"
                  placeholder="No file chosen"
                  required
                />
              </div>
              <label id={`${classes.l6}`} htmlFor="rentalaggrement">
                Rental Agreement Photo
              </label>
              <div className={`${classes.rentalagreementphoto}`}>
                <input
                  type="file"
                  name="rentalAgreementPhoto"
                  placeholder="No file chosen"
                  required
                />
              </div>
              <input
                id={`${classes.sendbtn}`}
                type="submit"
                placeholder="Send"
                required
                onClick={() => {
                  notify();
                }}
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
            <Link to=" " className={`${classes.atag}`}>
              Home
            </Link>
          </p>
          <div className={`${classes.footerlast}`}>
            <p>
              © 2023 All rights reserved,Powered by{" "}
              <span>Adika Taxi Services PLC.</span>
            </p>

            <div>
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
