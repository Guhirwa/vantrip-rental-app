import { Routes, Route, Link } from 'react-router-dom'
import Home from './assets/components/pages/Home.jsx'
import About from './assets/components/pages/About.jsx'
import aboutBgImg from './assets/images/aboutBgImage.jpeg'

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
        <Route path="/about" element={
          <About 
            aboutBgImage = {{
              src: aboutBgImg,
              altText: "about background image"
            }}
            aboutPageContent = {{
              h1Text: "Don't squeeze in a sedan when you could relax in a van.",
              paragraphOne: "Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)",
              paragraphTwo: "Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.",
              h2TextPart1: "Your destination is waiting, ",
              h2TextPart2: "Your van is ready.",
              linkTagContent: {
                to: "/vans",
                linkText: "Explore our vans"
              }
            }}
          />
        } />
      </Routes>
    </div>
  )
}

export default App
