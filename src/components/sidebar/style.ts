import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBarWrapper = styled.div`
  width: 80px;
  height: 90vh;
  display: flex;

  &.expanded {
    width: 300px;
  }

  &.expandedMobile {
    position: absolute;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

export const NavItemsWrapper = styled.div`
  position: fixed;
  left: 0;
  margin-left: 1rem;

  @media (max-width: 600px) {
    margin-left: 10px;
  }
`;

export const NavItemsList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.primary};
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
    transition: all ease-in-out 0.2s;
    border-radius: 50%;
    height: 60px;
  }
  /* This is the class added to active nav */
  &.active_nav {
    background-color: ${({ theme }) => theme.activeNavBg};
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
    background-color: ${({ theme }) => theme.activeNavBg};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: all ease-in-out 0.2s;
  }
`;

export const NavItemName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  background: red;
`;
