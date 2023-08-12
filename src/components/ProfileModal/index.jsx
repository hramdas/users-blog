import { Avatar, Button, Divider, Popover } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileModal({ user, users, anchorEl, open, handleClose }) {
  const newUsersList = [...users]
  newUsersList.splice(user?.id, 1)
  const usersList = [newUsersList[0], newUsersList[1]]

  return (
    <Popover
      id={1}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <div style={{border:'1px', borderRadius:'20px', padding:'20px 50px', display:'flex', flexDirection:'column', justifyContent: 'center', gap:'5px'}}>
        <Avatar sx={{ width: '100px', height: '100px' }} alt="Remy Sharp" src={user?.profilepicture} />
        <div id='bold-details' >{user?.name}</div>
        <div id='bold-details' >{user?.email}</div>
        < Divider sx={{ color: 'gray', width: '100%', padding: '5px' }} />
        {usersList.map((user, i) =>
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding:'5px' }}>
            <Avatar sx={{ width: '40px', height: '40px' }} alt="Remy Sharp" src={user?.profilepicture} />
            <div id='bold-details' >{user?.name}</div>
          </div>
        )}
        <Link to='/'>
          <Button variant="contained" sx={{ borderRadius: '20px', background: 'red' }}>Sign Out</Button>
        </Link>
      </div>
    </Popover>
  )
}
