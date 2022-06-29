import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routeDefs } from "../utils/routes";

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
    border-bottom: var(--border-width) solid var(--primary-color);
    box-shadow: 0 var(--border-width) 0 var(--secondary-color);
  }
`;

export default function Navigation() {
  return (
    <Container>
      <HomeLink to={routeDefs.home.route}>
        <h1>{routeDefs.home.title}</h1>
      </HomeLink>
      <SecondaryContainer>
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
      </SecondaryContainer>
    </Container>
  );
}
