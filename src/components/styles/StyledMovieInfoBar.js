import styled from "styled-components";
import { theme } from "./theme";
import { device } from "./MediaQueries";

export const StyledMovieInfoBar = styled.div`
         width: 100%;
         min-height: 100px;
         height: auto;
         background: #0d2c39;
         padding: 20px;
         box-sizing: border-box;
         font-family: "Abel", sans-serif;
         font-size: 14px;

         @media ${device.mobileUp} {
           font-size: 20px;
         }

         .movieinfobar-content {
           display: flex;
           justify-content: space-between;
           align-items: center;
           max-width: 1280px;
           width: 100%;
           margin: 0 auto;
           color: ${theme.white};
         }

         .movieinfobar-content-col {
           text-align: center;
           padding: 10px 20px 0 0;
         }

         .movieinfobar-info {
           padding: 5px 0 0 10px;
           float: left;
         }

         .fa-clock,
         .fa-money-bill-alt {
           float: left;
           margin-top: -4px;
         }

         .fa-ticket-alt {
           float: left;
           margin-top: -3px;
         }

         .fa-clock,
         .fa-money-bill-alt,
         .fa-ticket-alt {
           display: none;
         }

         @media ${device.tabletUp} {
           .fa-clock,
           .fa-money-bill-alt,
           .fa-ticket-alt {
             display: block;
           }
         }
       `;
