import React from 'react'
import "../scss/suggestions-style.css"
import SuggestedContent from './Suggested-Cotent'

const test = "https://i1.sndcdn.com/artworks-XOSolZPGvKxcSs60-TsSP0A-t500x500.jpg"

const SuggestionCont = () => {
    return (
       <div className="suggestion-container">
           <h1>Explore</h1>
           <div className="suggested-content">
                <SuggestedContent name={"Swing Lyn - Twin Cabins"} imgSrc={test} />
           </div>
       </div>
    )
}

export default SuggestionCont
