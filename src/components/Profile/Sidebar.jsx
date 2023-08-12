import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const sidebarItems = [{ name: 'Profile', path: '' }, { name: 'Posts', path: 'posts' }, { name: 'Galary', path:'galary' }, {name : 'ToDo', path:'todo'}]
export default function Sidebar({handleSidebarChange, selectedSidebarItem}) {
  return (
    <div className="user-sidebar" >

      <Box sx={{  height:'100%', background:'#0000a7',   display: 'flex' }} role="presentation">
        <List>
          {sidebarItems.map((item, index) => (
            <>
            <ListItem onClick={()=>handleSidebarChange(index)} key={item.path} disablePadding>
              <ListItemButton>
                  <ListItemText sx={selectedSidebarItem == index ? { color: 'white' } : { color: '#afafaf' }} primary={item.name} />
                </ListItemButton>
                {selectedSidebarItem==index && <div className="selected-item"></div>}
            </ListItem>
              {(index < sidebarItems.length-1) && < Divider sx={{color:'white'}} />}
          </>
          ))}
        </List>
      </Box>
    </div>
  )
}
