import { Emails } from "@/global-interfaces";
import React, { useEffect, useState } from "react";

interface EmailCardProps {
  item: Emails;
  handleSelect: (data: any) => void;
}

const EmailCard: React.FC<EmailCardProps> = ({ item, handleSelect }) => {
  const [showModal, setShowModal] = useState(true);
  const { title, description, label } = item;

  const handleTogge = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal((prevEsc) => !prevEsc);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="email-box">
        <input
          onClick={(e) => handleSelect((e.target as HTMLInputElement).checked)}
          type="checkbox"
        />

        <p onClick={handleTogge} className="title">
          {title}
        </p>
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
