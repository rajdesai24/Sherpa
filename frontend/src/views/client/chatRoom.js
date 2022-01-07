import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChatInput from './chatinput'
import ChatMessage from './chatmessage'

const URL = 'ws://localhost:8000/ws/29102'

const Chat = () => {
  const dispatch = useDispatch()
 
  const [state, setState] = useState({
    name: '',
    messages: []
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
    }

    ws.onclose = () => {
      console.log('disconnected')
    
      // automatically try to reconnect on connection loss
      setWS(new WebSocket(URL))
    }
  }, [dispatch])

  addMessage = message =>
    setState({...state, messages: [...state.messages, message]})

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
    console.log('submit',message)
    this.addMessage(message)
  }
  console.log('state',this.state)
  return (
    <div>
      <label htmlFor="name">
        Name:&nbsp;
        <input
          type="text"
          id={'name'}
          placeholder={'Enter your name...'}
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
      </label>
      <ChatInput
        ws={this.ws}
        onSubmitMessage={messageString => this.submitMessage(messageString)}
      />
      {
      this.state.messages.map((message, index) =>
        <ChatMessage
          key={index}
          message={message.message}
          name={message.name}
        />,
      )}
    </div>
  )
}

export default Chat