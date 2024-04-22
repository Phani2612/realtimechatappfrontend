// import React from 'react'
// import { Socket } from 'socket.io-client'
// import './App.css'

// function Chat(props) {

//     const [currentMessage , setCurrentMessage] = React.useState("")

//     const [MessageList , setMessageList] = React.useState([])

//     const [MessageReceive , setMessagereceive] = React.useState([])

//     // console.log(props.username , props.room)


//     const Sendmessage = async ()=>{


//            if(currentMessage !== '')
//            {
//                 const Messagedata = {

//                       room : props.room,

//                       author : props.username,

//                       message : currentMessage,

//                       time : new Date(Date.now()).getHours()+":"+ new Date(Date.now()).getMinutes()
//                 }

//                 await props.socket.emit('send_message',Messagedata)
//                 setMessageList((list)=>[...list,Messagedata])

                
//            }

           
//     }

    

//     React.useEffect(() => {
//       props.socket.on("receive_message", (Data) => {
          
//         // setMessageList((list) => [...list, Data]);

//         console.log(Data)

        
         
//       });
//   }, [props.socket, MessageList]);
 
 
//   console.log("Final Messagelist",MessageList)


// return (
    
//     <div className="chat-container">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>


      
//       <div className="chat-body">
//         {MessageList.map((msg, index) => (
//           <div
//             key={index}
//             className="message-container"
//             id={props.username === msg.author ? 'you' : 'other'}
//           >
//             <div className="message-info">
//                <span className='author' > <p>{msg.author}</p></span>
//                 <span className='time' ><p>{msg.time}</p></span>
//             </div>
//             <div className="message-content"><p>{msg.message}</p></div>
//           </div>
//         ))}
//       </div>




//       <div className="chat-footer">
//         <input
//           className="message-input"
//           type="text"
//           placeholder="Type your message here..."
//           value={currentMessage}
//           onChange={(event) => setCurrentMessage(event.target.value)}
//         />
//         <button className="send-button" onClick={Sendmessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Chat;






// import React from 'react'
// import { Socket } from 'socket.io-client'
// import './App.css'
// import ScrollToBottom  from 'react-scroll-to-bottom';

// function Chat(props) {

//     const [currentMessage , setCurrentMessage] = React.useState("")

//     const [MessageList , setMessageList] = React.useState([])

    

//     // console.log(props.username , props.room)


//     const Sendmessage = async ()=>{


//            if(currentMessage !== '')
//            {
//                 const Messagedata = {

//                       room : props.room,

//                       author : props.username,

//                       message : currentMessage,

//                       time : new Date(Date.now()).getHours()+":"+ new Date(Date.now()).getMinutes(),



                      
//                 }

//                 await props.socket.emit('send_message',Messagedata)
//                 setMessageList((list)=>[...list,Messagedata])
//                 setCurrentMessage("")
                
//            }

           
//     }

    

//     React.useEffect(() => {
//       props.socket.on("receive_message", (Data) => {
          
//          setMessageList([...MessageList ,Data])

//         console.log(Data)

        
         
//       });
//   }, [props.socket, MessageList]);
 
 
//   console.log("Final Messagelist",MessageList)


// return (
    
//     <div className="chat-container">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>


      
//       <div className="chat-body">
//        <ScrollToBottom  className="custom-scroll-container" >
//        {MessageList.map((msg, index) => (
//           <div
//             key={index}
//             className="message-container"
//             id={props.username === msg.author ? 'you' : 'other'}
//           >
//             <div className="message-info">
//                <span className='author' > <p>{msg.author}</p></span>
               
//                 <span className='time' ><p>{msg.time}</p></span>
//             </div>
//             <div className="message-content"><p>{msg.message}</p></div>
//           </div>
//         ))}
//        </ScrollToBottom>
//       </div>




//       <div className="chat-footer">
//         <input
//           className="message-input"
//           type="text"
//           placeholder="Type your message here..."
//           value={currentMessage}
//           onChange={(event) => setCurrentMessage(event.target.value)}
//           onKeyPress={(event) => {
//             if (event.key === 'Enter') {
//               Sendmessage();
//             }
//           }}
//         />
//         <button className="send-button" onClick={Sendmessage}  onkeypress = {Sendmessage}  >
//           Send
//         </button>
        
//       </div>
//     </div>
//   );
// }

// export default Chat;












import React from 'react'
import { Socket } from 'socket.io-client'
import './App.css'
import ScrollToBottom  from 'react-scroll-to-bottom';
let counter = 0
function Chat(props) {

    const [currentMessage , setCurrentMessage] = React.useState("")

    const [MessageList , setMessageList] = React.useState([])

    
    
    // console.log(props.username , props.room)


    const Sendmessage = async ()=>{


           if(currentMessage !== '')
           {
                const Messagedata = {

                      room : props.room,

                      author : props.username,

                      message : currentMessage,

                      time : new Date(Date.now()).getHours()+":"+ new Date(Date.now()).getMinutes(),

                      clientoffset : `${props.socket.id}-${counter}`

                      
                }

                await props.socket.emit('send_message',Messagedata)
                setMessageList((list)=>[...list,Messagedata])
                setCurrentMessage("")
                counter++
                
           }

           
    }

    

    React.useEffect(() => {
      props.socket.on("receive_message", (Data) => {
          
         setMessageList([...MessageList ,Data])

        console.log(Data)

        
         
      });
  }, [props.socket, MessageList]);
 
 
  console.log("Final Messagelist",MessageList)


return (
    
    <div className="chat-container">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>


      
      <div className="chat-body">
       <ScrollToBottom  className="custom-scroll-container" >
       {MessageList.map((msg, index) => (
          <div
            key={index}
            className="message-container"
            id={props.username === msg.author ? 'you' : 'other'}
          >
            <div className="message-info">
               <span className='author' > <p>{msg.author}</p></span>
               
                <span className='time' ><p>{msg.time}</p></span>
            </div>
            <div className="message-content"><p>{msg.message}</p></div>
          </div>
        ))}
       </ScrollToBottom>
      </div>




      <div className="chat-footer">
        <input
          className="message-input"
          type="text"
          placeholder="Type your message here..."
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              Sendmessage();
            }
          }}
        />
        <button className="send-button" onClick={Sendmessage}  onkeypress = {Sendmessage}  >
          Send
        </button>
        
      </div>
    </div>
  );
}

export default Chat;
