import { useContext } from "react";
import { SearchUser, User } from ".";
import { searchUsers } from "./context/UserAction";
import UserContext from "./context/UserContext";

const Users = ({}) => {
  const { users, dispatch } = useContext(UserContext)
  
  const handleSubmit = async (event, user) => {
    event.preventDefault();

    if(user === ''){
      return false

    }else {
      const data = await searchUsers(user);
      dispatch({
        type: 'SEARCH_USERS',
        users: data.items
      })
    }
  }


  return (
    <>
    <SearchUser handleSubmit={handleSubmit} />
    <div className="Users flex flex-wrap flex-initial">
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
    </>
  )
}

export default Users