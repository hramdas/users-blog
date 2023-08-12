import { Divider } from '@mui/material'
import React from 'react'
import PersonalDetails from './PersonalDetails'
import Address from './Address'

export default function UserDetails({ user }) {
  return (
  
      <div className="user-profile-body">
        <PersonalDetails user={user} />
        <Divider sx={{height:'100%'}} orientation="vertical" flexItem />
        <div>
         <Address address={user?.address} />
        </div>
      </div>
  )
}
