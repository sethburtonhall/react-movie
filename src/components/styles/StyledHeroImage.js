import styled from "styled-components";
import { theme } from "./theme";
import { device } from "./MediaQueries";

export const StyledHeroImage = styled.div`
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), ${theme.darkBlue}`};
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;

  .heroimage-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 100%;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0);
    color: ${theme.white};

    @media ${device.tabletUp} {
      max-width: 700px;
    }

    h1 {
      font-family: "Abel", sans-serif;
      font-size: 38px;
      color: ${theme.white};

      @media ${device.tabletUp} {
        font-size: 48px;
      }
    }

    p {
      font-family: "Abel", sans-serif;
      font-size: 16px;
      line-height: 20px;
      color: ${theme.white};

      @media ${device.tabletUp} {
        font-size: 22px;
        line-height: 26px;
      }
    }
  }

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
