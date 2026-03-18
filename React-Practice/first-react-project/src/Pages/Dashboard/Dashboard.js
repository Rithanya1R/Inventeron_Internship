import React from "react";

import Header from "../../Components/Header/Header"
import Content from "../../Components/Dashboard/Content";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";

function Dashboard(){
  return(
    <div>
      <Header />
      <div style={{display: "flex"}}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;