import React, { useState } from "react";
import Navbar from "components/navbar/Navbar";
import { DashboardWrapper, PageContent, SideBarContent } from "./style";
import SideBar from "components/sidebar/SideBar";

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

  const handleShowSideBarOnHover = () => {
    setExpandSideBar(true);
  };
  const handleCloseOnHover = () => {
    setExpandSideBar(false);
  };

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
            handleShowSideBarOnHover={handleShowSideBarOnHover}
            handleCloseOnHover={handleCloseOnHover}
            expandMobileSideBar={expandMobileSideBar}
          />
        </SideBarContent>
        <PageContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ea, impedit perspiciatis voluptatum placeat hic asperiores,
            repudiandae beatae sapiente, debitis exercitationem laudantium sunt
            facere rerum itaque necessitatibus consequuntur est tempore.
          </p>
        </PageContent>
      </DashboardWrapper>
    </React.Fragment>
  );
};

export default Dashboard;
