import React from "react";

import Header from "../../Components/Header/Header"
import Content from "../../Components/Dashboard/Content";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";

function Dashboard(props){
  return(
    <div>
      {/* <Header userName = {props.userName} /> --(props single value) */}
    
      <Header profile = {props.profile} /> {/* props object multiple value */}
      {/* <h1 style={{textAlign:"center"}}>Name: {props.profile.name}</h1> */}
      
      <div style={{display: "flex"}}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;