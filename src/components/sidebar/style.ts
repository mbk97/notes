import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: 80px;
  height: 100vh;
  display: flex;
  &.expanded {
    width: 300px;
  }

  &.expandedMobile {
    position: absolute;
    width: 300px;
    background-color: blue;
    z-index: 1;
  }
`;

export const NavItemsWrapper = styled.div``;

export const NavItemsList = styled.ul`
  list-style: none;
`;

export const NavItems = styled.li`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: all ease-in-out 0.2s;
  }
  /* This is the class added to active nav */
  &.active_nav {
    background-color: #41331c;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out 0.2s;
  }

  /* This class gets added to the sidebar items when the bar is expanded */
  &.active_nav_bg {
    width: 300px;
    background-color: #41331c;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: all ease-in-out 0.2s;
  }
`;

export const NavItemName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
