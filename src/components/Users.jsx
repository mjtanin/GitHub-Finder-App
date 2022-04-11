import { useContext } from "react"
import { SearchUser, User } from "."
import UserContext from "./context/UserContext"


const Users = () => {
  const { users } = useContext(UserContext)
  return (
    <>
    <SearchUser />
    <div className="Users flex flex-wrap flex-initial">
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
    </>
  )
}

export default Users