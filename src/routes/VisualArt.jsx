import { Outlet } from "react-router";
import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";
import art from "../data/art.json";
import { device } from "../utils/device";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 2rem;
  width: 100%;

  @media screen and ${device.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const CollectionTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled.a`
  :hover {
    outline: var(--border-width) solid var(--font-color);
  }

  @media screen and ${device.mobile} {
    flex: 1;

    :hover {
      outline: none;
    }
  }
`;

const StyledImg = styled.div`
  width: 100%;
  padding-top: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export default function VisualArt() {
  return (
    <PageTemplate>
      {art.map((collection) => {
        return (
          <>
            {collection.name ? (
              <CollectionTitle>{collection.name}</CollectionTitle>
            ) : (
              <></>
            )}
            <GridContainer>
              {collection.pieces.map((piece, index) => {
                return (
                  <StyledLink
                    key={index}
                    href={piece.path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledImg src={piece.path} alt={piece.title} role="img" />
                  </StyledLink>
                );
              })}
            </GridContainer>
          </>
        );
      })}
      <Outlet />
    </PageTemplate>
  );
}
