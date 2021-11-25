import Nav from "../Nav"
import playwaveImg from "../../../Assets/Theme/github-playwave.png"
import "../scss/style.css"

const About = () => {
  return (
    <div className="about-page">
      <Nav />
      <div className="img-container">
        <img src={playwaveImg} alt="playwave" />
      </div>
      <div className="main-text">
       <main> <span className="strong">Playwave</span> is Open-Source Music streaming
        platform
        
        Which is mainly written in{" "}
        <span className="strong typescript">Typescript</span> and in{" "}
        <span className="strong react">React.js</span> I want say HUGE HUGE HUGE
        thank you for <span className="strong deezer">Deezer API</span>{' '}
        for giving me all this musics data, even 30 seconds long audio
        </main>
        <br />
        <h1 className="strong">What can you do on there?</h1>
        <ul>
          <li>look for musics</li>
          <li>create playlists</li>
          <li>modify profile</li>
          <li>edit and delete songs/playlist</li>
        </ul>
        <h1 className="strong">How website works?</h1>
          wanna hear a joke? this website doesn't use any Database xDD yeah yeah, you
          guess right website uses localStorage so that means every stuff what you
          do, add, edit or something else everything go in your browser, if you clean
          up your browser or move on another browser all your stuff will be gone :((
        <h1 className="strong">For Developers</h1>
        wanna contribute on that project? contribution is closed yet ;/ because i'm not planning to continue this project anymore, but in the future what will happen I don't really know so don't kill your hopes :))
            if you see any bug on website, or something that doesn't work well plaese open <a href="https://github.com/callmenikk/Playwave/issues" target="_blank">issue on github repository</a>
            <br />
            <h2 className="main-contributor">Main Contributor: <div className="profile-img">
                <img src="https://avatars.githubusercontent.com/u/65135792?v=4" alt="callmenikk-photo" /></div><a href="https://github.com/callmenikk" target="_blank" className="strong">Nikoloz Imerlishvili</a></h2>
        </div>
    </div>
  )
}

export default About
