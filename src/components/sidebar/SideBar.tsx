import { Link } from "react-router-dom";
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
}

const SideBar = ({
  expandSideBar,

  expandMobileSideBar,
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
          {sideBarData.map(({ id, linkTo, Icon, name, active }) => {
            return (
              <Link
                to={linkTo}
                key={id}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <NavItems
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
              </Link>
            );
          })}
        </NavItemsList>
      </NavItemsWrapper>
    </SideBarWrapper>
  );
};

export default SideBar;
