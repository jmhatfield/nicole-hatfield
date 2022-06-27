import { useEffect, useRef } from "react";
import { ArrowLeft, File } from "react-feather";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import poems from "../data/poems.json";
import PageTemplate from "../components/PageTemplate";
import { device } from "../utils/device";

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  gap: var(--desktop-padding);

  @media screen and ${device.mobile} {
    gap: var(--mobile-padding);
  }
`;

const StyledArrowLeft = styled(ArrowLeft)`
  margin-top: 0.4rem;
`;

const ActionContainer = styled.div`
  @media screen and ${device.mobile} {
    display: none;
  }
`;

const StyledFile = styled(File)`
  margin-top: 0.4rem;
`;

export default function Poem() {
  const poemContainer = useRef();
  const { id } = useParams();
  const poem = poems.find((ele) => ele.title === id.replaceAll("-", " "));

  useEffect(() => {
    poemContainer.current.innerHTML = poem.content;
  }, [poemContainer, poem]);

  return (
    <PageTemplate>
      <Container>
        <Link to="/poetry">
          <StyledArrowLeft />
        </Link>
        <div>
          <h2>{poem.title}</h2>
          <div ref={poemContainer}></div>
        </div>
        <ActionContainer>
          <a href={`/poems/${poem.title}.pdf`} target="_blank" rel="noreferrer">
            <StyledFile />
          </a>
        </ActionContainer>
      </Container>
    </PageTemplate>
  );
}
