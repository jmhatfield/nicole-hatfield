import { Outlet } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import poems from "../data/poems.json";
import PageTemplate from "../components/PageTemplate";
import { device } from "../utils/device";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media screen and ${device.mobile} {
    align-items: flex-start;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: var(--border-width) solid transparent;

  :hover {
    border-bottom: var(--border-width) solid var(--primary-color);
    box-shadow: 0 var(--border-width) 0 var(--secondary-color);
  }
`;

export default function Poetry() {
  console.log(poems);
  return (
    <PageTemplate>
      <Container>
        {poems.map((poem) => (
          <StyledLink to={poem.title.replaceAll(" ", "-")}>
            <h2>{poem.title}</h2>
          </StyledLink>
        ))}
      </Container>
      <Outlet />
    </PageTemplate>
  );
}
