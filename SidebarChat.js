import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import Avatar from '@material-ui/core'

function SidebarChat() {
    const [seed, setSeed] = useState('');
    useEffect(()=> {
        setSeet(Math.floor(Math.random() *5000))         
    }, [])

  return (
    <div>
      <Avatar src={`http://avatars.dicebar.com/api/human/${seed}.svg`}/>
      <div className='sidebarChat_info'>
        <h2> Room name </h2>
        <p>last message</p>
      </div>
    </div>
  )
}

export default SidebarChat
