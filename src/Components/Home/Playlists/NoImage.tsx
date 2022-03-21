import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const NoImage = () => {
    return (
        <>
        <FontAwesomeIcon
            icon={faCamera as IconProp}
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
