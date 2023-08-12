import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import ProfileModal from '../ProfileModal';

export default function index({ user, users, sidebarItems, selectedSidebarItem }) {
  const pageName = sidebarItems[selectedSidebarItem]?.name

  const [anchorEl, setAnchorEl] = useState()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className="user-profile-header">
      <div id='profile'>{pageName}</div>
      <div onClick={handleClick} id='user'>
        <Avatar alt="Remy Sharp" src={user?.profilepicture} />
        {user?.name}
      </div>
      <ProfileModal user={user} users={users} open={open} anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} />
    </div>
  )
}
