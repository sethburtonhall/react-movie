import styled from "styled-components";
import { device } from "./MediaQueries";

export const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    font-family: "Abel", sans-serif;
    font-size: 22px;

    @media ${device.tabletUp} {
      font-size: 42px;
    }
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  position: relative;

  @media ${device.mobileUp} {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media ${device.tabletUp} {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  }

  .grid-element {
    animation: animateGrid 0.5s;
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
