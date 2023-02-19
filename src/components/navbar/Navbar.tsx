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
import { MdGridView } from "react-icons/md";
import navLogo from "assets/images/navLogo.png";
import { NavTitle } from "components/text/Text";
import placeholderImg from "assets/images/placeholder.png";
import { BiSearch } from "react-icons/bi";
import SearchInput from "components/Inputs/SearchInput";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useIsSmallScreen } from "hooks/useIsSmallScreen";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import { TfiLayoutColumn2 } from "react-icons/tfi";

interface IProps {
  handleShowSideBar: () => void;
  handleShowMobileSideBar: () => void;
  handleLayoutReset: () => void;
  layout: boolean;
  toggleTheme: any;
  theme: string;
}

const Navbar = ({
  handleShowSideBar,
  handleShowMobileSideBar,
  toggleTheme,
  theme,
  handleLayoutReset,
  layout,
}: IProps) => {
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
          <NavLogo src={navLogo} alt="Nav_logo" />
          <NavTitle>Notes</NavTitle>
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
            {layout ? (
              <TfiLayoutColumn2 size={30} onClick={handleLayoutReset} />
            ) : (
              <MdGridView size={30} onClick={handleLayoutReset} />
            )}
            {theme === "light" ? (
              <BsCloudMoonFill
                size={30}
                onClick={toggleTheme}
                style={{
                  cursor: "pointer",
                }}
              />
            ) : (
              <BsCloudSunFill
                size={30}
                onClick={toggleTheme}
                style={{
                  cursor: "pointer",
                }}
              />
            )}
            <ProfileImage src={placeholderImg} alt="profile_image" />
          </ViewIconsWrapper>
        </RightNavItems>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
