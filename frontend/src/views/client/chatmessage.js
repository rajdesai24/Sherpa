import React,{ Component } from 'react'




class ChatMessage extends Component {
    
  
    render() {
      return (
        <p>
        <strong>{this.props.name}</strong> <em>{this.props.message}</em>
      </p>
    
          )
    }
  }
  
  export default ChatMessage
  
  