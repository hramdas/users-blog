import React from 'react'

export default function UserDetailsMapping({userData}) {
  return (
    <div id='user-data'>
      {userData.map((row, i) => <React.Fragment key={i}>
        <p>{row.name} : &nbsp;</p><div id='bold-details' >{row?.value}</div>
        </React.Fragment>
      )}
    </div>
  )
}
