import React from "react";

// Packages
import PropTypes from 'prop-types'

// Helpers
import { calcTime, convertMoney } from "../../helpers"

// Styled Components
import { StyledMovieInfoBar } from "../styles/StyledMovieInfoBar";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <span className="far fa-clock fa-2x"></span>
        <span className="movieinfobar-info">
          Running time: {calcTime(time)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <span className="far fa-money-bill-alt fa-2x"></span>
        <span className="movieinfobar-info">
          Budget: {convertMoney(budget)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <span className="fas fa-ticket-alt fa-2x"></span>
        <span className="movieinfobar-info">
          Box Office: {convertMoney(revenue)}
        </span>
      </div>
    </div>
  </StyledMovieInfoBar>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
};

export default MovieInfoBar;
