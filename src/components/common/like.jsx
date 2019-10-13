import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Like = props => {
  return (
    <React.Fragment>
      {props.liked ? (
        <FontAwesomeIcon
          icon="heart"
          color="red"
          style={{ cursor: "pointer" }}
        />
      ) : (
        <FontAwesomeIcon icon="heart" style={{ cursor: "pointer" }} />
      )}
    </React.Fragment>
  );
};

Like.propTypes = {
  liked: PropTypes.bool.isRequired,
  onHandleLike: PropTypes.func.isRequired
};

export default Like;
