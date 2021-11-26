import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const Error = () => {
  return (
    <div className="container">
      <h2>
        Hmm... seems like this URL is broken or occured some error, Please go back to <Link to="/">Home</Link> Page
      </h2>
      <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>

      <div style={{maxWidth: "200px", minHeight: '200px'}}>
          <img src="https://c.tenor.com/szH2qsISnzMAAAAi/emoji-thinking.gif" alt="" style={{width: "100%"}}/>
      </div>

      </div>
    </div>
  )
}

export default Error
