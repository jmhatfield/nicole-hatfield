import { Menu } from "react-feather";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { routeDefs } from "../utils/routes";

const DrawerButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  padding-bottom: 0.25rem;
  background-color: white;
  align-items: center;
  border-bottom: var(--border-width) solid var(--primary-color);
  box-shadow: 0 var(--border-width) 0 var(--secondary-color);
  width: 100%;
`;

const DrawerButton = styled(Menu)`
  display: block;
  padding-bottom: 0.75rem;
  padding-right: 0.5rem;
`;

const StyledTitle = styled.h1`
  display: block;
  margin: 0;
  text-transform: capitalize;
  font-size: 24pt;
`;

const DrawerContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin-left: ${(props) => (props.open ? 0 : "-100rem")};
  transition: margin-left 0.5s cubic-bezier(0.5, 0, 0.2, 1);
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
  width: 50%;
`;

const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  display: inline;
  font-family: var(--title-font);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    border-bottom: var(--border-width) solid var(--primary-color);
    box-shadow: 0 var(--border-width) 0 var(--secondary-color);
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
    return pathname.substring(1).split("/")[0].replace("-", " ");
  };

  return (
    <>
      <DrawerButtonContainer>
        <DrawerButton onClick={handleDrawerButton}>drawer</DrawerButton>
        <StyledTitle>{formatPathname(location.pathname)}</StyledTitle>
      </DrawerButtonContainer>
      <DrawerContainer open={drawerOpen}>
        <StyledNavigation>
          <HomeLink to={routeDefs.home.route}>{routeDefs.home.title}</HomeLink>
          <StyledNavLink to={"/" + routeDefs.about.route}>
            {routeDefs.about.title}
          </StyledNavLink>
          <StyledNavLink to={"/" + routeDefs.poetry.route}>
            {routeDefs.poetry.title}
          </StyledNavLink>
          <StyledNavLink to={"/" + routeDefs.litReviews.route}>
            {routeDefs.litReviews.title}
          </StyledNavLink>
          <StyledNavLink to={"/" + routeDefs.visualArt.route}>
            {routeDefs.visualArt.title}
          </StyledNavLink>
        </StyledNavigation>
        <ClickableArea onClick={handleClickOutsideDrawer} />
      </DrawerContainer>
    </>
  );
}
