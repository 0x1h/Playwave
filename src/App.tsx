import Playwave from "./Router/Router"
export const code: string | null = new URLSearchParams(window.location.search).get("code")

const App = () => {
    return  <Playwave />
}

export default App
