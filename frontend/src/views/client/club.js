import { React } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import '../../components/roomCard.css'

const Club = () => {
  const {clubName} = useParams()
  const user = /* localStorage.getItem("token") */'Mugdha'
  const clubList = [
    {
      id: '1',
      title: 'food',
      chatRooms: [
        {
          id: '11',
          title: 'chinese food',
        },
        {
          id: '12',
          title: 'italian food',
        },
        {
          id: '13',
          title: 'Indian food',
        }
      ]
    },
    {
      id: '2',
      title: 'clubbing',
      chatRooms: [
        {
          id: '21',
          title: 'aabc club',
        },
        {
          id: '21',
          title: 'bjdcb club and bar',
        }
      ]
    }
  ]
  console.log(clubList[1].chatRooms, "name")
  const history = useHistory();
  const handleChatRoom = e => {
    history.push('/:chatRoom')
  }
  return (
    <>  
      { user ?
        <> 
          <div style={{backgroundColor: "#f8ff90"}}>
            {clubList? (
              clubList.map(club => {
                if(club.title === clubName) {
                  club.chatRooms.map(chatRoom => {
                    return(
                      <div className="card-container">
                        <div>1</div>
                          <button  style={{marginLeft: "0.5rem", cursor: "pointer"}}>
                            Join
                          </button>
                      </div>  
                    )
                  })
                }
                else(<h1>This Club does not exist</h1>)
              })
            ): (
              <h1>your cart is empty</h1>
            )}   
          </div>
        </> 
      : <Link to="/login">Please Log In</Link> } 
    </>
  );
};

export default Club;