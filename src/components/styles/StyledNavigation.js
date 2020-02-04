import styled from "styled-components";
import { device } from "./MediaQueries";
import { theme } from "./theme";

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #0d2c39;
  color: ${theme.white};

  .navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

    p {
      font-family: "Abel", sans-serif;
      font-size: 16px;
      float: left;
      color: ${theme.white};
      padding-right: 10px;
      text-decoration: none;

      @media ${device.tabletUp} {
        font-size: 22px;
      }
    }
  }
`;
