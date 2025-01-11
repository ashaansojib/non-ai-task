import { Emails } from "@/global-interfaces";
import React from "react";
interface SingleEmail {
  item: Emails;
}
const EmailCard: React.FC<SingleEmail> = ({ item }) => {
  const { title } = item;
  return (
    <div className="email-box">
      <input type="checkbox" />
      <p>{title}</p>
    </div>
  );
};

export default EmailCard;
