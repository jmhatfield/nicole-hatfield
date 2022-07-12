import { Outlet } from "react-router";
import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";
import art from "../data/art.json";
import { device } from "../utils/device";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const CollectionTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled.a`
  flex: 1;

  :hover {
    outline: var(--border-width) solid var(--font-color);
  }

  @media screen and ${device.mobile} {
    :hover {
      outline: none;
    }
  }
`;

const StyledImg = styled.div`
  min-width: 12rem;
  min-height: 12rem;
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
