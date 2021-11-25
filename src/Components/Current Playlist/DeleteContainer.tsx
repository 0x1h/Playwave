import { FC, useRef, useEffect } from "react";
import "./scss/delete-style.css";

interface DeleteProps {
  playlistName: string;
  deleteAction: (playlist: string) => void;
  cancelAction: () => void;
  playlistId: string;
}

const DeleteContainer: FC<DeleteProps> = ({
  playlistName,
  cancelAction,
  deleteAction,
  playlistId
}) => {
  const deleteBoxRef = useRef<HTMLDivElement>(null);

  const outSideClick = (e: any) => {
    if (deleteBoxRef.current && !deleteBoxRef.current.contains(e.target)) {
      cancelAction();
    }
  };

  useEffect(() => {
    document.addEventListener("click", outSideClick, true);
    return () => document.removeEventListener("click", outSideClick, true);
  });

  return (
    <div className="delete-container">
      <div className="delete-box" ref={deleteBoxRef}>
        <div className="ask-container">
          <p>
            Are you sure, you want to delete{" "}
            <span
              style={{
                color: "#0bff9f",
                fontWeight: "bolder",
                fontStyle: "italic",
              }}
            >
              {playlistName}
            </span>
            ? If you click delete you won't be able to recover 🤔💀
          </p>
        </div>
        <div className="btn-container">
          <button className="cancel" onClick={cancelAction}>
            Cancel
          </button>
          <button className="delete" onClick={() => deleteAction(playlistId)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContainer;
