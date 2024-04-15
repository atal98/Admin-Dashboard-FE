import React from "react";
import "./navbar.scss";
import Date from "../date/DateDropDown";

// { title, onYearChange, onQuarterChange } -- comment for now
const NavBar = ({ title }) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>{title}</span>
        <Date
        // onYearChange={onYearChange}
        // onQuarterChange={onQuarterChange}
        />
      </div>
    </div>
  );
};

export default NavBar;
