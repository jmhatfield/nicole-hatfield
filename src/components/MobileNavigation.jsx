import { Menu } from "react-feather";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const DrawerButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  align-items: center;
`;

const DrawerButton = styled(Menu)`
  display: block;
`;

const StyledTitle = styled.h1`
  display: block;
  margin: 0;
  text-transform: capitalize;
`;

const DrawerContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin-left: ${(props) => (props.open ? 0 : "-100rem")};
  transition: margin-left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.05);
  padding: var(--mobile-padding);
`;

const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: black;
  display: inline;
  font-family: var(--serif-font);
  font-size: 14pt;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 12pt;

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
