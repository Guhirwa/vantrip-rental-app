import { Link } from "react-router-dom"

const About = (props) => {
  return (
    <div>
      <h1>hello</h1>
      <img src={props.aboutBgImage.src} alt={props.aboutBgImage.altText} />
      <div>
        <h1>{props.aboutPageContent.h1Text}</h1>
        <p>{props.aboutPageContent.paragraphOne}</p>
        <p>{props.aboutPageContent.paragraphTwo}</p>
      </div>
      <div>
        <h2>{props.aboutPageContent.h2TextPart1}<br />{props.aboutPageContent.h2TextPart2}</h2>
        <Link to={props.aboutPageContent.linkTagContent.to}>{props.aboutPageContent.linkTagContent.linkText}</Link>
      </div>
    </div>
  )
}

export default About
