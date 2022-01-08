import { React } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import '../../components/roomCard.css'

const Club = () => {
  const {clubName} = useParams()
  console.log(clubName, "name")
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
  const club = clubList.find(x => x.title === clubName);
  const history = useHistory();
 
  return (
    <>  
      { user ?
        <> 
          <div style={{backgroundColor: "#f8ff90"}}>
            {club? (
              club.chatRooms.map(chatRoom => {
                return(
                  <div className="card-container">
                    <div>{chatRoom.title}</div>
                      <Link to = {`/${clubName}/${chatRoom.title}`}>
                        <button  style={{marginLeft: "0.5rem", cursor: "pointer"}}>
                          Join
                        </button>
                      </Link>
                  </div>  
                )
              })
            ): (
              <h1>No Clubs available</h1>
            )}   
          </div>
        </> 
      : <Link to="/login">Please Log In</Link> } 
    </>
  );
};

export default Club;