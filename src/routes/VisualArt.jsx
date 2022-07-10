import { Outlet } from "react-router";
import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";
import art from "../data/art.json";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const CollectionTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled.a``;

const StyledImg = styled.img`
  width: 100%;
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
                    <StyledImg src={piece.path} alt={piece.title} />
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
