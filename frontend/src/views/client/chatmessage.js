import {React, useEffect} from 'react'
import { translate } from '../../redux/actions/chatRoom'
import { useDispatch, useSelector } from 'react-redux'

const ChatMessage = props => {
  const dispatch = useDispatch()
  const {name, message} = props
  useEffect(() => {
    dispatch(translate(message, 'Hindi'))
  }, [dispatch])
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
  
  