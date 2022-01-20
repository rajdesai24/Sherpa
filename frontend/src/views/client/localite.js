import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { joinClub, getClubs, createClub } from "../../redux/actions/club";
import '../../components/roomCard.css'
import { create } from "@mui/material/styles/createTransitions";

const Localite = () => {
  const {identity} = useParams()
  const dispatch = useDispatch()
  const user = localStorage.getItem("token") 
  const [clubName, setClubName] = useState('')
  const handleJoin = (clubName) => {
    dispatch(joinClub(clubName))
  }
  /* const handleCreate = clubName => {
    dispatch(createClub(clubName))
  } */
  const clubList=useSelector(state=>state.club.getClubs)
  useEffect(() => {
    dispatch(getClubs())
  }, [dispatch])

  return (
    <>
      { user ?
        <> 
          {/* <button onClick={()=> handleCreate()}>Create Club</button> */}
          <div style={{backgroundColor: "#f8ff90"}}>
            {clubList && clubList.length>0 ? (
              clubList.map(club => {
                return(
                  <>
                    <div className="card-container">
                      <div>{club.clubname}</div>
                      <Link to = {`/${club.title}`}>
                        <button  style={{marginLeft: "0.5rem", cursor: "pointer"}} onClick={() => handleJoin(club.title)}>
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