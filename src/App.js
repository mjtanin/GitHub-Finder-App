import React from 'react'
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom'
import { Footer, Header, UserProfile, Users, Welcome } from './components'
import { UserProvider } from './components/context/UserContext'
import { About, Contact } from './Pages'

function App() {
  return (
    <UserProvider>
      <Routers>
        <Header />
        <div className='w-full min-h-screen bg-[#ed8c72] py-12'>
          <div className='container mx-auto my-0'>

            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route exact path="/users" element={(
                <>
                  <Users />
                </>
              )} />

              <Route exact path='/users/:userName' element={<UserProfile />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/contact' element={<Contact />} />
              

            </Routes>
          </div>
        </div>
        <Footer />
      </Routers>
    </UserProvider>
  )
}

export default App