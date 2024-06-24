import React from "react";
import { Contents, Logobar, Navbar, Sidebar } from "../components";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 grid grid-rows-12 h-screen">
        {/* <div className="row-span-1">
          <Logobar />
        </div>
        <div className="row-span-11">
          <Sidebar />
        </div>
      </div>
      <div className="col-span-4 grid grid-rows-12 h-screen">
        <div className="row-span-1">
          <Navbar />
        </div> */}
        <div className="row-span-11 p-4 overflow-y-auto">
            <Contents/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;