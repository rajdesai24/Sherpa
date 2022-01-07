import React from 'react'

const ChatMessage = props => {
  const {name, message} = props
  return (
    <p><strong>{name}</strong> <em>{message}</em></p>
  )   
}
  
export default ChatMessage
  
  