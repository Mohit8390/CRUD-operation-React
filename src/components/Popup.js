import React from 'react';
import Employees from './Employees';
import { useNavigate } from 'react-router-dom';


const Popup = ({ isOpen, onClose}) => {
    const navigate = useNavigate();
  if (!isOpen) return null;
  

  const empData = () => {
    const id =  localStorage.getItem('Id');
    var index = Employees.map(function(e){
        return e.id
      }).indexOf(id)
  
      Employees.splice(index, 1)
      navigate("/")
      onClose()
  }

  const empCancel = () => {
    navigate("/")
    onClose()
  }
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>X</button>
        <h2 class="popupContain">Are you Sure!</h2>
        <button onClick={empData}>Yes</button>
        <button onClick={empCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Popup;