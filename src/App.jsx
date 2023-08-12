import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './components/landing-page'
import Profile from './components/Profile';
import { getUsers } from './api';

function App() {
  const [users, setUsers] = useState([])
  const fetchUersList = async () => {
    const {users : usersList} = await getUsers()
    setUsers(usersList)
  }
  useEffect(() => {
    fetchUersList()
  }, [])
  return (
    <Routes>
      <Route path='/' element={<LandingPage users={users} />} />
      <Route path='/user/:id' element={<Profile users={users} />} />
      
    </Routes>
  )
}

export default App
