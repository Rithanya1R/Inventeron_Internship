import React from "react";

function Sidebar({ changePage }) {
  return (
    <div style={{
      width: "200px",
      background: "#f4f4f4",
      padding: "20px"
    }}>
      <p onClick={() => changePage("home")}>Home</p>
      <p onClick={() => changePage("profile")}>Profile</p>
      <p onClick={() => changePage("settings")}>Settings</p>
    </div>
  );
}

export default Sidebar;