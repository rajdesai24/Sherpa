import { React } from "react";
import { Link, useHistory } from "react-router-dom";
import '../../components/localite-backpacker.css'

const LocaliteBackpacker = () => {
  const history = useHistory();
  const handleLocalite = e => {
    history.push('/localite')
  }
  return (
    <>
      <div className="localite-container">
        <div className="localite-item-left" onClick={(e) => handleLocalite()}>Localite</div>
        <div className="localite-item-right">Backpacker</div>
      </div>  
    </>
  );
};

export default LocaliteBackpacker;