import React from "react";
import SideBar from "./SideBar";
import DashboardNav from "./DashboardNav";
import { useStateValue } from "../context/stateProvider";


const Dashboard = ({ children }) => {
  return (
    <main className="flex h-screen justify-between">
      <SideBar/>
      <div className="flex flex-col w-full bg-gray-100 min-h-[100vh] overflow-auto">
        <DashboardNav />
        {children}
      </div>
    </main>
  );
};

export default Dashboard;

