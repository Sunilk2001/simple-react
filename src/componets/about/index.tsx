import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
        <strong className="badge text-bg-success">About</strong><br />
        <Link to={'/'}>link tag go to home</Link>
    </div>
  )
}

export default About