import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function DisplayEmptyImage() {
  return (
    <div className="emptyImage">
      <FontAwesomeIcon icon={faCamera} size="3x" style={{ color: "#FFF"}} />
      <p style={{ color: "#FFF" }}>Upload Photo</p>
    </div>
  );
}

export default DisplayEmptyImage;
