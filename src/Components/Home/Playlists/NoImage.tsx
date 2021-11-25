import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const NoImage = () => {
    return (
        <>
        <FontAwesomeIcon
            icon={faCamera}
            size="4x"
            style={{ color: "#FFF" }}
          />
          <p
            style={{
              marginTop: "10px",
              textAlign: "center",
              color: "#FFF",
              fontSize: "1.1em",
            }}
          >
            Upload Playlist Photo
          </p>
          </>
    )
}

export default NoImage
