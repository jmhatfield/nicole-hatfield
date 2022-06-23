import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./utils/device";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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
      <h1>Nicole Hatfield</h1>
      <StyledNav>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/poetry">Poetry</StyledLink>
        <StyledLink to="/literature-reviews">Literature Reviews</StyledLink>
        <StyledLink to="/visual-art">Visual Art</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledNav>
    </Container>
  );
}
