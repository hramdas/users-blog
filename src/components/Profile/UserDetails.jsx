import React from 'react'

export default function UserDetails({ user }) {
  console.log("USER", user)
  return (
    <div className="user-profile-page">
      <div className="user-profile-header">
        <div>Profile</div>
        <div>{user?.name}</div>
      </div>
      <div>
        <div>
          dd
        </div>
        <div>
          dd
          dd
        </div>
      </div>
    </div>
  )
}
