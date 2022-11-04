import { Avatar } from '@material-ui/core';
import React from 'react';
import "./chat.css";

function Chat() {
  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar/>
            <div className='chat_headerInfo'>
                <h3>Room name</h3>

            </div>
            
        </div>
        <div className='chat_body'>

        </div>
        <div className='chat_footer'>

        </div>
    </div>
  )
}

export default Chat;