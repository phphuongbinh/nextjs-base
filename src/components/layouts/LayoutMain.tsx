import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

interface ILayoutMain {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMain) => {
  return (
    <>
      <Topbar></Topbar>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar></Sidebar>
        <div className="py-7 px-6">{children}</div>
      </div>
    </>
  );
};

export default LayoutMain;
