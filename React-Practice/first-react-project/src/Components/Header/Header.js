import React from "react";
import "./Header.css";
import profileIcon from "../../assets/profileIcon.jpg"

function Header(){
  const name = "Rithu";
  return(
    <div className="header">
      <div className="profileName">
        {`Welcome ${name}`}
      </div>

      <div className="profileIcon">
        <img
        src={profileIcon}
        alt="profileIcon"></img>
      </div>
    </div>
  );
}

export default Header;