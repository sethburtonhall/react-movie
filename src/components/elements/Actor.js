import React from "react";

// Packages
import PropTypes from 'prop-types'

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// Styled Components
import { StyledActor } from "../styles/StyledActor";

// Images
import NoImage from "../../images/no_image.jpg";

const Actor = ({ actor }) => (
  <StyledActor>
    <img
      src={
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NoImage
      } alt={actor.name}
    />
    <span className="actor-name">
      {actor.name}
    </span>
    <span className="actor-character">
      {actor.character}
    </span>
  </StyledActor>
);

Actor.propTypes = {
  actor: PropTypes.object
}

export default Actor;
