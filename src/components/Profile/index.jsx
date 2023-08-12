import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import ComingSoon from '../ComingSoon'
import './index.css'
import Header from '../Header'
import UserDetails from './UserDetails'
import { useParams } from 'react-router-dom'
import { Divider } from '@mui/material'

const sidebarItems = [{ name: 'Profile', path: '' }, { name: 'Posts', path: 'posts' }, { name: 'Galary', path: 'galary' }, { name: 'ToDo', path: 'todo' }]

export default function Profile({users}) {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(0)
  const { id } = useParams()
  const handleSidebarChange = (key) => {
    setSelectedSidebarItem(key)
  }

  return (
    <div className="user-page">
      <Sidebar sidebarItems={sidebarItems} handleSidebarChange={handleSidebarChange} selectedSidebarItem={selectedSidebarItem} />
      <div className="user-profile-page">
      <Header users={users}  sidebarItems={sidebarItems} selectedSidebarItem={selectedSidebarItem} user={users[parseInt(id)]} />
      <Divider sx={{ color: 'white' }} />
        {selectedSidebarItem === 0 && <UserDetails user={users[parseInt(id)]} />}
        {selectedSidebarItem !== 0 && <ComingSoon  />}
      </div>
    </div>
  )
}
