import { FileText, Linkedin, Mail, Phone } from "react-feather";
import styled from "styled-components";
import profile from "../assets/images/profile.jpeg";
import about from "../data/about.json";
import PageTemplate from "../components/PageTemplate";
import { device } from "../utils/device";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media screen and ${device.mobile} {
    flex-direction: column;
    width: 100%;
    gap: var(--mobile-padding);
  }
`;

const HeadshotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Headshot = styled.img`
  height: 12rem;
  border-radius: 50%;

  @media screen and ${device.mobile} {
    margin: auto;
    margin-top: 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and ${device.mobile} {
    justify-content: center;
  }
`;

export default function About() {
  return (
    <PageTemplate>
      <Container>
        <HeadshotContainer>
          <Headshot src={profile} alt="profile picture" />
        </HeadshotContainer>
        <div>
          <p>{about.text}</p>
          <ContactInfo>
            <a href="mailto:nehatfield@gmail.com" title="Email">
              <Mail />
            </a>
            <a href="tel:+14437660476" title="Call">
              <Phone />
            </a>
            <a
              href="https://www.linkedin.com/in/nicole-hatfield-809552155/"
              target="_blank"
              rel="noreferrer"
              title="See LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              title="See resume"
            >
              <FileText />
            </a>
          </ContactInfo>
        </div>
      </Container>
    </PageTemplate>
  );
}
