import { useIsSmallScreen } from "hooks/useIsSmallScreen";
import React from "react";
import { sideBarData } from "./data";
import {
  NavItemsWrapper,
  SideBarWrapper,
  NavItemsList,
  NavItems,
  NavItemName,
} from "./style";

interface IProps {
  expandSideBar: boolean;
  // handleShowSideBarOnHover: () => void;
  // handleCloseOnHover: () => void;
  expandMobileSideBar: boolean;
}

const SideBar = ({
  expandSideBar,
  // handleShowSideBarOnHover,
  // handleCloseOnHover,
  expandMobileSideBar,
}: IProps) => {
  const { width } = useIsSmallScreen();
  const breakpoint = 600;

  // const handleSidebaronMouseEnter = () => {
  //   if (width > breakpoint) {
  //     return handleShowSideBarOnHover;
  //   } else {
  //     return;
  //   }
  // };

  // const handleCloseSidebaronMouseLeave = () => {
  //   if (width > breakpoint) {
  //     return handleCloseOnHover;
  //   } else {
  //     return;
  //   }
  // };
  return (
    <SideBarWrapper
      className={
        expandSideBar
          ? "expanded"
          : "" || expandMobileSideBar
          ? "expandedMobile"
          : ""
      }
      // onMouseEnter={handleSidebaronMouseEnter()}
      // onMouseLeave={handleCloseSidebaronMouseLeave()}
    >
      <NavItemsWrapper>
        <NavItemsList>
          {sideBarData.map(({ id, linkTo, Icon, name, active }) => {
            return (
              <NavItems
                key={id}
                className={
                  active && (expandSideBar || expandMobileSideBar)
                    ? "active_nav_bg"
                    : "" || active
                    ? "active_nav"
                    : ""
                }
              >
                <Icon size={30} />
                <NavItemName
                  style={{
                    display:
                      expandSideBar || expandMobileSideBar ? "block" : "none",
                  }}
                >
                  {name}
                </NavItemName>
              </NavItems>
            );
          })}
        </NavItemsList>
      </NavItemsWrapper>
    </SideBarWrapper>
  );
};

export default SideBar;
