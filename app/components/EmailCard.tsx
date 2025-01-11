import { Emails } from "@/global-interfaces";
import React, { useState } from "react";


const EmailCard: React.FC = ({ item, handleSelect }) => {
  const [showModal, setShowModal] = useState(true);
  const { id, title, description, label } = item;

  const handleTogge = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="email-box">
        <input onClick={()=>handleSelect(1)} type="checkbox" />
        <p onClick={handleTogge} className="title">{title}</p>
      </div>
      <div className={`${showModal ? "modal-box" : "modal-box-toggle"}`}>
        <div onClick={handleTogge} className="full-bg"></div>
        <div className="details-box">
        <div onClick={handleTogge} className="close-btn">
            <p>Close (Esc)</p>
        </div>
          <h2>{title}</h2>
          <p>{description}</p>
          <span>{label}</span>
        </div>
      </div>
    </>
  );
};

export default EmailCard;
