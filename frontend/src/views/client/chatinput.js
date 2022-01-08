import { useState, React } from 'react'
import PropTypes from 'prop-types'
import '../../components/chatroom.css' 
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const ChatInput = (props) => {
  const { onSubmitMessage } = props
  const [message, setMesssage] = useState('')


    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          if(message === ''){alert('please enter a message')}
          else {
            onSubmitMessage(message)
            setMesssage('')
          }
        }}
      >
        <input
          className='inputMessage'
          type="text"
          placeholder={'Enter message...'}
          value={message}
          onChange={e => setMesssage(e.target.value)}
        />
        <input type="submit" value={'Send'} style={{height: "2rem"}}/>
      </form>
    )
  
}

export default ChatInput

