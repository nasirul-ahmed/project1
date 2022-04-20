import React from "react";
import Calender from "../components/Calender";
import Coursal from "../components/Carousals";
import Header from "../components/Header";
import Notices from "../components/Notices";
import SideMenu from "../components/SideMenu";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideMenu />
        <div className="col main-cont" style={{}}>
          <Header />
          <div className="row px-2 py-3 " style={{flexFlow:"wrap"}}>
            <div className=" col-sm-8 h-75 mb-4">
              <Notices />
            </div>
            <div className="col-sm-4  h-75 mb-2">
              <Calender />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 px-2">
            <Coursal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
