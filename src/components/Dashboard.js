import React from "react";
import SideBar from "./SideBar";
import DashboardNav from "./DashboardNav";


const Dashboard = ({ children }) => {
  return (
    <main className="flex h-screen justify-between overflow-auto">
      <SideBar/>
      <div className="flex flex-col w-full bg-gray-100 min-h-[100vh]">
        <DashboardNav />
        {children}
      </div>
    </main>
  );
};

export default Dashboard;

