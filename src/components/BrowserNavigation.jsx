import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: inline;
  font-family: var(--serif-font);
  font-size: 14pt;
`;

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 12pt;

  &.active {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <Container>
      <HomeLink to="/">
        <h1>Nicole Hatfield</h1>
      </HomeLink>
      <SecondaryContainer>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/poetry">Poetry</StyledNavLink>
        <StyledNavLink to="/literature-reviews">
          Literature Reviews
        </StyledNavLink>
        <StyledNavLink to="/visual-art">Visual Art</StyledNavLink>
      </SecondaryContainer>
    </Container>
  );
}
