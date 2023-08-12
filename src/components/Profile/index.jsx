import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './index.css'
import UserDetails from './UserDetails'
import { useParams } from 'react-router-dom'

export default function Profile({users}) {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(0)
  const { id } = useParams()
  
  console.log("users", users)
  const handleSidebarChange = (key) => {
    setSelectedSidebarItem(key)
  }
  return (
    <div className="user-page">
      <Sidebar handleSidebarChange={handleSidebarChange} selectedSidebarItem={selectedSidebarItem} />
      <UserDetails user={users[parseInt(id)]} />
    </div>
  )
}
