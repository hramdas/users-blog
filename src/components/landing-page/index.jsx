import React, { useEffect, useState } from 'react'
import { getUsers } from '../../api'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import './index.css'
import { Link } from 'react-router-dom'

export default function LandingPage({users}) {
  
  
  return (
    <div className='landing-page-style'>
      <div className='landing-page-background'></div>
      <div className='users-list'>
        <div id='header'>
          <p >
          Select an account
          </p>
        </div>
        <List sx={{ width: '500px',paddingRight:'100px', maxHeight:'400px', bgcolor: 'background.paper', overflow: 'auto' }}>
          {users.length > 0 && users.map(user =>
            <div key={user.id}>
                <Link style={{all:'unset', cursor: 'pointer'}} to={`/user/${user.id}`}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={user.profilepicture} />
                    </ListItemAvatar>
                    <p style={{fontSize:'22px'}}>{user.name}</p>
                  </ListItem>
                </Link>
              <Divider  />
            </div>
          )}
        </List>
      </div>
    </div>
  )
}
