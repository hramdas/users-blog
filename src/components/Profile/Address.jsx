import React from 'react'

import Map from './Map'
import UserDetailsMapping from './UserDetailsMapping'

export default function Address({address}) {
  return (
    <div className="user-address">
      <p>Address</p>
      <div id='personal-details'>
        <UserDetailsMapping userData={[{ name: 'Street', value: address?.street }, { name: 'Suite', value: address?.suite }, { name: 'City', value: address?.city }, { name: 'Zipcode', value: address?.zipcode }]} />
      </div>
      <Map {...address?.geo} />
    </div>
  )
}
