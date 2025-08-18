import { Link } from "react-router-dom"

const Home = (props) => {
  return (
    <div>
      <h1>{props.mainText}</h1>
      <p>{props.text}</p>
      <Link to = {props.link.to}>{props.link.linkText}</Link>
    </div>
  )
}

export default Home
