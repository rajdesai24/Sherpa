import React from 'react'

const ChatMessage = props => {
  const {name, message} = props
  return (
    <>
      <div style={{marginTop: '-6.5rem', textAlign: 'right', marginRight: '3rem'}}>
        <div /* className='box sb1' */>
          <p><strong>{name}</strong> </p>
          <em>{message}</em>
        </div>
      </div>
      
    </>
  )   
}
  
export default ChatMessage
  
  