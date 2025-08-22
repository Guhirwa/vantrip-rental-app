import { Routes, Route, Link } from "react-router-dom"
import About from "./assets/components/pages/About"
import Vans from "./assets/components/pages/Vans"
import Home from "./assets/components/pages/Home"

const App = () => {
  const hoverHeaderElement = "transition duration-300 ease-in-out hover:text-[#d4781d] hover:scale-115"
  return (
    <>
      <header className = "flex justify-between mx-32 my-24 text-2xl font-bold">
        <Link className = {hoverHeaderElement} to = "/">#VANLIFE</Link>
          <nav className = "flex gap-20">
            <Link className = {hoverHeaderElement} to = "/about">About</Link>
            <Link className = {hoverHeaderElement} to = "/vans">Vans</Link>
          </nav>
      </header>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/vans" element = {<Vans />} />
      </Routes>
    </>
  )
}

export default App