import React, { useState } from "react";
import Navbar from "components/navbar/Navbar";
import { DashboardWrapper, PageContent, SideBarContent } from "./style";
import SideBar from "components/sidebar/SideBar";
import Home from "pages/home/Home";
import Reminders from "pages/reminders/Reminders";
import Archived from "pages/archived/Archived";
import Trash from "pages/trash/Trash";
import { Routes, Route } from "react-router-dom";

interface IDashboardProps {
  theme: string;
  toggleTheme: any;
}

const Dashboard = ({ toggleTheme, theme }: IDashboardProps) => {
  const [expandSideBar, setExpandSideBar] = useState<boolean>(false);
  const [expandMobileSideBar, setExpandMobileSideBar] =
    useState<boolean>(false);

  const [layout, setLayout] = useState<boolean>(false);

  const handleShowSideBar = () => {
    setExpandSideBar(!expandSideBar);
  };
  const handleShowMobileSideBar = () => {
    setExpandMobileSideBar(!expandMobileSideBar);
  };

  const handleLayoutReset = () => {
    setLayout(!layout);
  };

  return (
    <React.Fragment>
      <Navbar
        handleShowSideBar={handleShowSideBar}
        handleShowMobileSideBar={handleShowMobileSideBar}
        toggleTheme={toggleTheme}
        theme={theme}
        handleLayoutReset={handleLayoutReset}
        layout={layout}
      />
      <DashboardWrapper>
        <SideBarContent>
          <SideBar
            expandSideBar={expandSideBar}
            expandMobileSideBar={expandMobileSideBar}
          />
        </SideBarContent>
        <PageContent>
          <Routes>
            <Route path="/home" element={<Home layout={layout} />} />
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
