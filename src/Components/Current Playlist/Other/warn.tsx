import React from "react"

function Warn() {
  return (
    <div
      className="warn"
      style={{
        background: "#ff5353",
        width: "100%",
        height: "30px",
        position: "absolute",
        top: "0",
        borderRadius: "10px",
        color: "#FFF",
        textAlign: "center"
      }}
    >
        You can't keep that blank
    </div>
  )
}

export default Warn
