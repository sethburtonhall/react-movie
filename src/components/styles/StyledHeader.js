import styled from "styled-components";
import { theme } from "./theme" 
import { device } from "./MediaQueries";

export const StyledHeader = styled.div`
  padding: 20px;
  background-color: ${theme.darkBlue};

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tabletUp} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 250px;
  margin-bottom: 30px;

  @media ${device.tabletUp} {
    margin: 0;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 107px;
`;
