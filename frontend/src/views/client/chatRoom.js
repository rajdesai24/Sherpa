import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ChatInput from './chatinput'
import ChatMessage from './chatmessage'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import '../../components/chatroom.css'

const URL = 'ws://localhost:8000/ws/29102'

const Chat = () => {
  const dispatch = useDispatch()
  const user = localStorage.getItem("token")
  const [state, setState] = useState({
    name: 'Mugdha',
    messages: ['abc', 'cded', 'cgsgs']
  })
  const [ws, setWS] = useState(new WebSocket(URL))

  useEffect(() => {
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = evt.data
      JSON.parse(message)
      addMessage(message)
    }

    ws.onclose = () => {
      console.log('disconnected')
    
      // automatically try to reconnect on connection loss
      setWS(new WebSocket(URL))
    }
  }, [dispatch])

  const addMessage = message =>
    setState({...state, messages: [message, ...state.messages]})

  const submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: state.name, message: messageString }
    ws.send(JSON.stringify(message))
    console.log('submit',message)
    addMessage(message)
  }
  console.log('state',state)
  return (
    <>
      {user? 
        <>
          <div className='main'>
            <div className='chatNav'>Group Name</div>
            <div style={{textAlign: "right", marginTop: "-2.5rem", color: "white", marginRight: "2rem"}}><MenuRoundedIcon/></div>
            <ChatInput
              ws={ws}
              onSubmitMessage={messageString => submitMessage(messageString)}
            />
            {
            state.messages.map((message, index) =>
              <ChatMessage
                key={index}
                message={message.message}
                name={message.name}
              />
            )}
          </div>
        </>
      : <Link to="/login">Please Log In</Link> }
    </>
  )
}

export default Chat