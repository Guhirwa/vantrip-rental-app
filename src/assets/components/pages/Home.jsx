import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className = "flex flex-col text-white bg-[#909090] mx-1 rounded-md px-10 py-20 ">
      <h1 className = "text-5xl font-bold">You got the travel plans, We got the travel vans.</h1>
      <p className = "text-2xl font-extralight my-10">Add adventure to your life by joining the #VANLIFE movement. Rent the perfect van to make your perfect road trip.</p>
      <Link className = "w-[20%] py-1 hover:scale-108 hover:bg-[#9e5915] transition ease-in-out duration-300 text-center mx-auto rounded-md font-bold text-xl bg-[#d4781d]" to = "/vans">Find your van</Link>
    </div>
  )
}

export default Home