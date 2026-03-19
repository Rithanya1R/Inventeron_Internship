import React from "react";
import "./Header.css";
import profileIcon from "../../assets/profileIcon.jpg"

function Header(props){
  // const name = "Rithu";
  return(
    <div className="header">
      <div className="profileName">
        Welcome {props.profile.name}
        <br/>
        Role {props.profile.role}
        <br />
        company {props.profile.company}
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