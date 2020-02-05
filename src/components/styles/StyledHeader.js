import styled from "styled-components";
import { theme } from "./theme";
import { device } from "./MediaQueries";

export const StyledHeader = styled.div`
  padding: 20px;
  background-color: ${theme.darkBlue};

  .header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media ${device.tabletUp} {
      justify-content: space-between;
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 130px;

  @media ${device.tabletUp} {
    width: 250px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 70px;

  @media ${device.tabletUp} {
    width: 107px;
  }
`;
