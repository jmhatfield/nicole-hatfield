import { Menu } from "react-feather";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { device } from "../utils/device";

const DrawerButtonContainer = styled.div`
  display: none;

  @media screen and ${device.mobile} {
    display: flex;
    gap: 1rem;
    position: absolute;
    align-items: center;
    padding: 1.5rem;
  }
`;

const DrawerButton = styled(Menu)`
  display: none;

  @media screen and ${device.mobile} {
    display: block;
  }
`;

const StyledTitle = styled.h1`
  display: none;

  @media screen and ${device.mobile} {
    display: block;
    margin: 0;
    text-transform: capitalize;
  }
`;

const DrawerContainer = styled.div`
  display: flex;

  @media screen and ${device.mobile} {
    position: fixed;
    height: 100%;
    width: 100%;
    margin-left: ${(props) => (props.open ? 0 : "-100rem")};
    transition: margin-left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  padding: 1.5rem;
  gap: 1rem;

  @media screen and ${device.mobile} {
    flex-direction: column;
    background-color: white;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.05);
  }
`;

const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: black;
  display: inline;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    text-decoration: underline;
  }
`;

const ClickableArea = styled.div`
  flex: 1;
`;

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerButton = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClickOutsideDrawer = () => {
    setDrawerOpen(false);
  };

  const formatPathname = (pathname) => {
    return pathname.substring(1).replace("-", " ");
  };

  return (
    <>
      <DrawerButtonContainer>
        <DrawerButton onClick={handleDrawerButton}>drawer</DrawerButton>
        <StyledTitle>{formatPathname(location.pathname)}</StyledTitle>
      </DrawerButtonContainer>
      <DrawerContainer open={drawerOpen}>
        <StyledNavigation>
          <HomeLink to="/">Nicole Hatfield</HomeLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/poetry">Poetry</StyledNavLink>
          <StyledNavLink to="/literature-reviews">
            Literature Reviews
          </StyledNavLink>
          <StyledNavLink to="/visual-art">Visual Art</StyledNavLink>
        </StyledNavigation>
        <ClickableArea onClick={handleClickOutsideDrawer} />
      </DrawerContainer>
    </>
  );
}
