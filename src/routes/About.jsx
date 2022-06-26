import styled from "styled-components";
import headshot from "../assets/images/headshot.jpg";
import PageTemplate from "../components/PageTemplate";
import { device } from "../utils/device";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--desktop-padding);

  @media screen and ${device.mobile} {
    flex-direction: column;
    width: 100%;
    padding-top: 1.5rem;
    gap: var(--mobile-padding);
  }
`;

const Headshot = styled.img`
  height: 12rem;
  border-radius: 50%;

  @media screen and ${device.mobile} {
    margin: auto;
  }
`;

export default function About() {
  return (
    <PageTemplate>
      <Container>
        <Headshot src={headshot} alt="headshot" />
        <div>
          <p>About paragraph</p>
          <p>
            <a href="">Resume</a>
          </p>
          <p>
            <a href="">LinkedIn</a>
          </p>
          <p>Contact info</p>
        </div>
      </Container>
    </PageTemplate>
  );
}
