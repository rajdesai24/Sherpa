import { React } from "react";
import { Link, useHistory } from "react-router-dom";
import '../../components/localite-backpacker.css'

const LocaliteBackpacker = () => {
  const history = useHistory();
  const user = localStorage.getItem("token")
  const handleLocalite = e => {
    history.push('/localite')
  }
  const handleBackpacker = e => {
    history.push('/backpacker')
  }
  return (
    <>
      {user?
        <>
          <div className="localite-container">
            <Link to = '/localite'><div className="localite-item-left">Localite</div></Link>
            <Link to = '/backpacker'><div className="localite-item-right">Backpacker</div></Link>
          </div> 
        </>
      : <Link to="/login">Please Log In</Link> }
    </>
  );
};

export default LocaliteBackpacker;