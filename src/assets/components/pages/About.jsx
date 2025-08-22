import aboutImg from "../../images/aboutBgImage.png"
import { Link } from "react-router-dom"

    const About = () => {
    return (
        <div className = "-mt-8 flex flex-col mx-auto w-[70vw]">
           <img className = "w-5xl h-[60vh] mx-auto" src = {aboutImg} alt="About Image" />
           <h1 className = "text-4xl font-bold my-8">Don’t squeeze in a sedan when you could relax in a van.</h1>
           <p className = "mb-8">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
           <p className = "mb-10">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
           <div className = "bg-[#f0b27b] p-10 font-bold text-2xl rounded-md">
                <h1 className = "mb-10">Your destination is waiting.<br/>Your van is ready.</h1>
                <Link className = "text-sm text-white bg-black py-3 px-5 rounded-md" to = "/vans">Explore our vans</Link>
           </div>
        </div>
    )
    }

    export default About