import { useState } from "react";

const SearchUser = ({handleSubmit, deleteUsers, isUsers}) => {

  const [user, setUser] = useState('')
  const [foucs, setFocus] = useState(false)

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  const handleBlur = (e) => {
    setFocus(false)
  }
  const handleFocus = (e) => {
    setFocus(true)
  }
  const handleDelete = () => {
    setUser('')
    deleteUsers()
  }

  return (
    <form onSubmit={(event) => handleSubmit(event, user)} className={`border-2 border-black rounded-lg overflow-hidden flex bg-[#ed8c72] pl-2 max-w-md mx-auto mb-5 ${foucs && 'border-pink-600 drop-shadow-2xl bg-[#2988bc]'}`}>
      <input type="text" name="search" value={user} onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} placeholder="Enter github username" className="w-full h-10 focus:outline-none bg-[#ed8c72] focus:bg-[#2988bc] focus:text-white placeholder:text-white" />
      <button type="submit" className={`bg-black text-white  px-2 py-1 my-1 mr-1 rounded-md hover:bg-pink-600 hover:text-white border border-black transition-all duration-300 ease-in-out ${foucs && 'bg-pink-600'}`}>Search</button>
      {isUsers && (
        <button type="button" onClick={handleDelete} className="text-white bg-red-500 px-1">Clear</button>
      )}
    </form>
  )
}

export default SearchUser