import React, { useEffect } from 'react';
import io from 'socket.io-client';
import Axios from 'axios'
import Chat from './Chat';
import './App.css'

const socket = io('https://realtimechat-1qxg.onrender.com');

function MyComponent() {
  // useEffect(() => {
    

  //   // Emit an event to the server
  //   // socket.emit('clientEvent', 'Hello from client');

  //   // Clean up the socket connection when the component unmounts
   

  // }, []); // Empty dependency array ensures this effect runs only once

  const [username , setUsername] = React.useState("")

  const [Room , setRoom] = React.useState("")

  const [Show , setShow] = React.useState(false)

  const Joinroom = ()=>{

      console.log("rey mowa")

      if(username !== ""  && Room !== "" )
      {
        
           socket.emit('Join_room', Room)
           setShow(true)
      }
  }




  return (
    <div className="container">
      <h1>Join a Chat Room</h1>
      {!Show ? <div className="form">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter room name"
          value={Room}
          onChange={(event) => setRoom(event.target.value)}
        />
        <button onClick={Joinroom}>Join Room</button>
      </div> :    <Chat socket={socket} username={username} room={Room} />  }
    
    </div>
  );
}

export default MyComponent;
