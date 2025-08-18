import { Routes, Route, Link } from 'react-router-dom'
import Home from './assets/components/pages/Home.jsx'
import About from './assets/components/pages/About.jsx'

const App = () => {

  const linkStyle = "hover:bg-gray-300 rounded-[10px] px-5 py-2 transition-all duration-1000 font-bold "

  return (
    <div>
      <header>
        <nav className='flex justify-center gap-6 my-8'>
        <Link to="/" className = {linkStyle}>#VANLIFE</Link>
        <Link to="/about" className = {linkStyle}>About</Link>
      </nav>
      </header>
      <Routes>
        <Route path="/" element={
          <Home 
            mainText = "You got the travel plans, we got travel vans."
            text = "Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip."
            link = {{
              to: "vans",
              linkText: "Find your van"
            }}
            />
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
