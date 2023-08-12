import { Avatar, Divider } from '@mui/material'
import React from 'react'
import UserDetailsMapping from './UserDetailsMapping'

export default function PersonalDetails({user}) {
  return (
    <div id='personal-details'>
      <Avatar sx={{ width: '200px', height: '200px' }} alt="Remy Sharp" src={user?.profilepicture} />
      <div id='bold-details' >{user?.name}</div>
      <UserDetailsMapping userData={[{ name: 'Username', value: user?.username }, { name: 'email', value: user?.email }, { name: 'Phone', value: user?.phone }, { name: 'Website', value: user?.website }]} />
      < Divider sx={{ color: 'gray', width: '100%' }} />

      <p>Company</p>
      <div id='user-data'>
        <UserDetailsMapping userData={[{ name: 'Name', value: user?.company?.name },{ name: 'catchPhrase', value: user?.company?.catchPhrase },{ name: 'bs', value: user?.company?.bs }]} />
      < Divider sx={{ color: 'gray', width: '100%' }} />
      </div>
    </div>
  )
}
