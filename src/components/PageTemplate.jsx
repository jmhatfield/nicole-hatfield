import styled from "styled-components";
import background from "../assets/images/background.jpg";
import { device, size } from "../utils/device";
import MobileNavigation from "./MobileNavigation";
import BrowserNavigation from "./BrowserNavigation";
import { useEffect, useState } from "react";

const Background = styled.div`
  background-image: url(${background});
  background-position: top;
  background-repeat: repeat;
  min-height 100vh;
  height: 100%;
`;

const Container = styled.div`
  width: var(--page-width);
  background-color: white;
  padding: var(--desktop-padding);
  padding-left: calc(var(--desktop-padding) + 2rem);
  padding-right: calc(var(--desktop-padding) + 2rem);
  min-height: calc(100vh - calc(2 * var(--desktop-padding)));
  margin: auto;

  @media screen and ${device.mobile} {
    width: 80%;
    padding: var(--mobile-padding);
    padding-left: calc(var(--mobile-padding) + 0.25rem);
    padding-right: calc(var(--mobile-padding) + 0.25rem);
    min-height: calc(100vh - calc(2 * var(--mobile-padding)));
  }
`;

const Content = styled.div`
  padding-top: calc(var(--desktop-padding) + 0.5rem);
  display: flex;
  flex-direction: column;
  margin: auto;

  @media screen and ${device.mobile} {
    padding-top: 5.5rem;
    align-items: flex-start;
    width: 100%;
  }
`;

export default function PageTemplate(props) {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth < size.mobile ? true : false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(device.mobile);
    mediaQuery.onchange = setMQuery;
  }, []);

  return (
    <Background>
      <Container>
        {mQuery && mQuery.matches ? (
          <MobileNavigation />
        ) : (
          <BrowserNavigation />
        )}
        <Content>{props.children}</Content>
      </Container>
    </Background>
  );
}
