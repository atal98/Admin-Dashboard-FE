import React from "react";
import "./navbar.scss";
import Date from "../date/DateDropDown";

const NavBar = ({ title, onYearChange, onQuarterChange }) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>{title}</span>
        <Date onYearChange={onYearChange} onQuarterChange={onQuarterChange} />
      </div>
    </div>
  );
};

export default NavBar;
