import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export default function Sidebar({handleSidebarChange, selectedSidebarItem, sidebarItems}) {
  return (
    <div className="user-sidebar" >
      <Box sx={{  height:'100%', background:'#0000a7', display: 'flex', borderRadius:'0 20px 20px 0' }} role="presentation">
        <List>
          {sidebarItems.map((item, index) => (
            <React.Fragment key={index}>
            <ListItem onClick={()=>handleSidebarChange(index)} key={item.path} disablePadding>
              <ListItemButton>
                  <ListItemText sx={selectedSidebarItem == index ? { color: 'white' } : { color: '#afafaf' }} primary={item.name} />
                </ListItemButton>
                {selectedSidebarItem==index && <div className="selected-item"></div>}
            </ListItem>
              {(index < sidebarItems.length-1) && < Divider sx={{color:'white'}} />}
          </React.Fragment>
          ))}
        </List>
      </Box>
    </div>
  )
}
