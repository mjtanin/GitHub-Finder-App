import { useContext, useEffect, useState } from "react";
import { SearchUser, User } from ".";
import { searchUsers } from "./context/UserAction";
import UserContext from "./context/UserContext";

const Users = () => {
  const [isUsers, setIsUsers] = useState(false)
  const { users, dispatch } = useContext(UserContext)

  useEffect(()=>{
    if(users.length !== 0){
      setIsUsers(true)
    }
  }, [users])
  
  const handleSubmit = async (event, user) => {
    event.preventDefault();

    if(user === ''){
      return false

    }else {
      const data = await searchUsers(user);
      if(data.items.length !== 0){
        dispatch({
          type: 'SEARCH_USERS',
          users: data.items
        })
      } 
    }
  }

  const deleteUsers = () => {
    setIsUsers(false)
    dispatch({
      type: 'DELETE_USERS',
      users: []
    })
  }

  return (
    <>
    <SearchUser isUsers={isUsers} handleSubmit={handleSubmit} deleteUsers={deleteUsers} />
    <div className="Users flex flex-wrap flex-initial">
      {isUsers && users.map(user => <User key={user.id} user={user} />)}
    </div>
    </>
  )
}

export default Users