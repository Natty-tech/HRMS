import React from "react";
import LoginPage from "./LoginPage";
import { BrowserRouter, Link } from "react-router-dom";

const demo = () => {
  return (
    <>
      {" "}
      <div>hellowwwww</div>
      <Link to="/Login">
        {" "}
        <button>to LoginPage</button>
      </Link>
    </>
  );
};

export default demo;
