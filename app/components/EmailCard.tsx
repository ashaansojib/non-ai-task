import { Emails } from "@/global-interfaces";
import React, { useState } from "react";
interface SingleEmail {
  item: Emails;
}
const EmailCard: React.FC<SingleEmail> = ({ item }) => {
  const [showModal, setShowModal] = useState(true);
  const { id, title, description, label } = item;

  const handleTogge = () => {
    setShowModal(!showModal);
  };
  console.log(showModal);
  return (
    <div className="email-container">
      <div onClick={handleTogge} className="email-box">
        <input type="checkbox" />
        <p>{title}</p>
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
    </div>
  );
};

export default EmailCard;
