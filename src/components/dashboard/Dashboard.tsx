import React, { useState } from "react";
import Navbar from "components/navbar/Navbar";
import { DashboardWrapper, PageContent, SideBarContent } from "./style";
import SideBar from "components/sidebar/SideBar";
import Home from "pages/home/Home";
import Reminders from "pages/reminders/Reminders";
import Archived from "pages/archived/Archived";
import Trash from "pages/trash/Trash";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  const [expandSideBar, setExpandSideBar] = useState<boolean>(false);
  const [expandMobileSideBar, setExpandMobileSideBar] =
    useState<boolean>(false);

  const handleShowSideBar = () => {
    setExpandSideBar(!expandSideBar);
  };
  const handleShowMobileSideBar = () => {
    setExpandMobileSideBar(!expandMobileSideBar);
  };

  // const handleShowSideBarOnHover = () => {
  //   setExpandSideBar(true);
  // };
  // const handleCloseOnHover = () => {
  //   setExpandSideBar(false);
  // };

  return (
    <React.Fragment>
      <Navbar
        handleShowSideBar={handleShowSideBar}
        handleShowMobileSideBar={handleShowMobileSideBar}
      />
      <DashboardWrapper>
        <SideBarContent>
          <SideBar
            expandSideBar={expandSideBar}
            // handleShowSideBarOnHover={handleShowSideBarOnHover}
            // handleCloseOnHover={handleCloseOnHover}
            expandMobileSideBar={expandMobileSideBar}
          />
        </SideBarContent>
        <PageContent>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/archive" element={<Archived />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </PageContent>
      </DashboardWrapper>
    </React.Fragment>
  );
};

export default Dashboard;
