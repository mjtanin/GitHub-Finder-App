import { Link } from "react-router-dom";

const User = ({user}) => {

  return (
    <div className="user flex lg:w-1/4 md:w-1/3 sm:w-1/2 md:text-left text-center w-full">
      <Link to={`${user.login}`} className="p-2 border border-blue-500 bg-white m-2 rounded-lg px-4 w-full md:flex">
  
          <div className="media flex justify-center items-center">
            <img src={user.avatar_url} alt={user.login} className="w-20 rounded-full" />
          </div>
          <div className="content md:ml-5 flex justify-center flex-col">
            <h2 className="text-lg"><strong>User:</strong> {user.login}</h2>
            <p><strong>User ID:</strong> {user.id}</p>
          </div>
   
      </Link>

    </div>
  )
}

export default User