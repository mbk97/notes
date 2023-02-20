import { NavLink } from "react-router-dom";
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
  expandMobileSideBar: boolean;
  setNavTitle: (name: string) => void;
  navTitle: string;
}

const SideBar = ({
  expandSideBar,
  setNavTitle,
  expandMobileSideBar,
  navTitle,
}: IProps) => {
  return (
    <SideBarWrapper
      className={
        expandSideBar
          ? "expanded"
          : "" || expandMobileSideBar
          ? "expandedMobile"
          : ""
      }
    >
      <NavItemsWrapper>
        <NavItemsList>
          {sideBarData.map(({ id, linkTo, Icon, name }) => {
            return (
              <NavLink
                to={linkTo}
                key={id}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                onClick={() => setNavTitle(name)}
              >
                <NavItems
                  className={
                    navTitle === name && !expandSideBar
                      ? "active_nav"
                      : "" || (expandSideBar && navTitle === name)
                      ? "active_nav_bg"
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
              </NavLink>
            );
          })}
        </NavItemsList>
      </NavItemsWrapper>
    </SideBarWrapper>
  );
};

export default SideBar;
