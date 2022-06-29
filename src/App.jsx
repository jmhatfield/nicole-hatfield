import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "./assets/images/background.jpg";
import { device } from "./utils/device";
import { routeDefs } from "./utils/routes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${background});
  background-position: top;
  background-size: contain;
`;

const NavContainer = styled.div`
  background-color: white;
  padding: var(--desktop-padding);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.75rem;
  border-bottom: var(--border-width) solid var(--primary-color);
  box-shadow: 0 var(--border-width) 0 var(--secondary-color);
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media screen and ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function App() {
  return (
    <Container>
      <NavContainer>
        <Title>Nicole Hatfield</Title>
        <StyledNav>
          <StyledLink to={"/" + routeDefs.about.route}>
            {routeDefs.about.title}
          </StyledLink>
          <StyledLink to={"/" + routeDefs.poetry.route}>
            {routeDefs.poetry.title}
          </StyledLink>
          <StyledLink to={"/" + routeDefs.litReviews.route}>
            {routeDefs.litReviews.title}
          </StyledLink>
          <StyledLink to={"/" + routeDefs.visualArt.route}>
            {routeDefs.visualArt.title}
          </StyledLink>
        </StyledNav>
      </NavContainer>
    </Container>
  );
}
