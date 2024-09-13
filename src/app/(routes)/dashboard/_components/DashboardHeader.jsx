import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import SideNav from "./SideNav";

function DashboardHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="p-3 md:p-5 shadow-sm border-b flex justify-between items-center">
      <div className="flex items-center">
        <button className="mr-2 sm:hidden" onClick={toggleDrawer}>
          {isDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <span className="hidden sm:inline text-base md:text-lg font-semibold">
          FinFlow Dashboard
        </span>
      </div>

      <div>
        <UserButton afterSignOutUrl="/" />
      </div>

      <div
        className={`fixed inset-0 z-50 flex justify-start transition-transform duration-300 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleDrawer}
        ></div>

        <div
          className={`w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideNav closeDrawer={toggleDrawer} /> {/* Pass the toggleDrawer function */}
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
