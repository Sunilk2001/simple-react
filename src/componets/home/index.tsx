import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <strong className="badge text-bg-primary">Home</strong><br />
            <Link to={'/about'}>link tag go to about</Link>
        </div>
    )
}

export default Home