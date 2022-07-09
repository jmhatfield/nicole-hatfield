import { useEffect, useRef } from "react";
import styled from "styled-components";
import { device } from "../utils/device";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledLink = styled.a`
  text-decoration: none;

  :hover {
    font-weight: bold;
  }

  @media screen and ${device.mobile} {
    :hover {
      font-weight: default;
    }
  }
`;

export default function ListOfLinks({ items }) {
  const ref = useRef();

  useEffect(() => {
    const titles = ref.current.querySelectorAll(".title");
    titles.forEach((ele, index) => {
      ele.innerHTML = items[index].title;
    });
  }, [items]);

  return (
    <Container ref={ref}>
      {items.map((item, index) => (
        <StyledLink
          key={index}
          href={item.path}
          target="_blank"
          rel="noreferrer"
        >
          <span className="title"></span>
        </StyledLink>
      ))}
    </Container>
  );
}
