import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { joinClub } from "../../redux/actions/club";
import '../../components/roomCard.css'

const Localite = () => {
  const {identity} = useParams()
  const dispatch = useDispatch()
  const user = /* localStorage.getItem("token") */'Mugdha'
  const handleJoin = (e, clubName, user) => {
    dispatch(joinClub(clubName))
  }
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

  return (
    <>
      { user ?
        <> 
          
          <div style={{backgroundColor: "#f8ff90"}}>
            {clubList? (
              clubList.map(club => {
                return(
                  <>
                    <div className="card-container">
                      <div>{club.title}</div>
                      <Link to = {`/${club.title}`}>
                        <button  style={{marginLeft: "0.5rem", cursor: "pointer"}} onClick={e => handleJoin(e, club.title)}>
                          Join
                        </button>
                      </Link>
                    </div>  
                    <br/>
                  </>   
                )
              })         
            ): (
              <h1>No Clubs Open</h1>
            )}   
          </div>
        </> 
      : <Link to="/login">Please Log In</Link> } 
    </>
  );
};

export default Localite;