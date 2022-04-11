import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div className="text-center">
        <Link to="/users">
            <h1 className="text-2xl font-bold">Welcome to GitHub Finder app</h1>
            <button className="text-lg font-bold border rounded-lg px-4 py-2 border-black mt-4 bg-green-400 hover:bg-violet-500 hover:text-white transition-all duration-300 ease-in-out">Go to Search Page</button>
        </Link>
    </div>
  )
}

export default Welcome