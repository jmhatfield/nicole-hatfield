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
  font-family: var(--title-font);
`;

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    border-bottom: 0.25rem solid var(--primary-color);
    box-shadow: 0 0.25rem 0 var(--secondary-color);
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
