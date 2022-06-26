import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";
import { device } from "../utils/device";
import MobileNavigation from "./MobileNavigation";
import BrowserNavigation from "./BrowserNavigation";

const Container = styled.div`
  padding: var(--desktop-padding);

  @media screen and ${device.mobile} {
    padding var(--mobile-padding);
  }
`;

const Content = styled.div`
  padding-top: calc(var(--desktop-padding) + 0.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: auto;

  @media screen and ${device.mobile} {
    padding-top: 3rem;
    align-items: flex-start;
    width: 100%;
  }
`;

export default function PageTemplate(props) {
  return (
    <Container>
      <BrowserView>
        <BrowserNavigation />
      </BrowserView>
      <MobileView>
        <MobileNavigation />
      </MobileView>
      <Content>{props.children}</Content>
    </Container>
  );
}
