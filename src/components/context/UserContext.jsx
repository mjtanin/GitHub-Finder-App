import { createContext, useReducer } from "react";
import userReduser from "./UserReduser";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const initialState = {
    users: [],
    user: {},
    repos: []
  }


  const [state, dispatch] = useReducer(userReduser, initialState)
  
  return (
    <UserContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;