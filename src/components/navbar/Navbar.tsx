import React, { useState } from "react";
import {
  CenterNavItems,
  LeftNavItems,
  NavLogo,
  NavWrapper,
  RightNavItems,
  ViewIconsWrapper,
  SearchIconWrapper,
  ProfileImage,
  NavContainer,
} from "./style";
import { FiMenu } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdGridView } from "react-icons/md";
import navLogo from "assets/images/navLogo.png";
import { NavTitle } from "components/text/Text";
import placeholderImg from "assets/images/placeholder.png";
import { BiSearch } from "react-icons/bi";
import SearchInput from "components/Inputs/SearchInput";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useIsSmallScreen } from "hooks/useIsSmallScreen";

interface IProps {
  handleShowSideBar: () => void;
  handleShowMobileSideBar: () => void;
}

const Navbar = ({ handleShowSideBar, handleShowMobileSideBar }: IProps) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };
  const closeSearch = () => {
    setShowSearch(false);
  };

  const { width } = useIsSmallScreen();
  const breakpoint = 600;

  const handle = () => {
    if (width > breakpoint) {
      return handleShowSideBar;
    } else {
      return handleShowMobileSideBar;
    }
  };

  return (
    <NavContainer>
      <NavWrapper>
        <LeftNavItems>
          <FiMenu
            size={30}
            style={{
              cursor: "pointer",
            }}
            onClick={handle()}
          />
          {/* <LogoWrapper> */}
          <NavLogo src={navLogo} alt="Nav_logo" />
          <NavTitle>Notes</NavTitle>
          {/* </LogoWrapper> */}
        </LeftNavItems>
        <CenterNavItems className={showSearch ? "showNav" : ""}>
          <SearchInput
            type="text"
            placeholder="Search"
            Icon={showSearch ? AiOutlineArrowLeft : BiSearch}
            onClick={closeSearch}
          />
        </CenterNavItems>
        <RightNavItems>
          <SearchIconWrapper>
            <BiSearch size={30} onClick={handleShowSearch} />
          </SearchIconWrapper>
          <ViewIconsWrapper>
            <MdGridView size={30} />
            <IoSettingsOutline size={30} />
            <ProfileImage src={placeholderImg} alt="profile_image" />
          </ViewIconsWrapper>
        </RightNavItems>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
