import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const url = process.env.REACT_APP_GITHUB_URL

  useEffect(() => {
    fecthUsers()
  }, [])

  const fecthUsers = async () => {
    try{
      const response = await fetch(`${url}users`)
      const data = await response.json()
      setUsers(data)
    }catch{
      console.log('Data not found')
    }
  }

  const searchUsers = async (userName) => {
    try{
      const response = await fetch(`${url}search/users?q=${userName}`,{
        method: 'GET',
        headers: {
          Authorization: process.env.REACT_APP_CLIENT_SECRETS
        },
      })
      const data = await response.json()
      data.items && setUsers(data.items)
    }catch {
      console.log('fetch fome errore');
    }
  }

  const userProfile = async userName => {
    const response = await fetch(`${url}users/${userName}`)
    const data = await response.json()
    setUser(data);
  }
  const userReop = async userName => {
    const response = await fetch(`${url}users/${userName}/repos`)
    const data = await response.json()
    setRepos(data);
  }

  return (
    <UserContext.Provider value={{
      user,
      users,
      repos,
      searchUsers,
      userProfile,
      userReop
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;