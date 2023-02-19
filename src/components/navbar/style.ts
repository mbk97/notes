import styled from "styled-components";

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid #55585d;
  align-items: center;
  padding: 0 25px;
  position: relative;
`;

export const LeftNavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;

  @media (max-width: 600px) {
    gap: 10px;
    margin-left: 0px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const CenterNavItems = styled.div`
  width: 700px;
  margin-right: 20px;

  @media (max-width: 900px) {
    width: 60%;
    position: absolute;
    top: 15px;
    left: -1000px;
    transition: all ease-in-out 0.3s;
    opacity: 0;
    &.showNav {
      left: 10px;
      opacity: 1;
    }
  }
`;

export const RightNavItems = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const NavLogo = styled.img`
  height: 50px;
  width: 50px;
`;

export const ViewIconsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const ProfileIconsWrapper = styled.div``;

export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

export const SearchIconWrapper = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;
