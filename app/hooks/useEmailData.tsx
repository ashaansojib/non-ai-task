import React, { useState } from "react";
import fake from "../../public/inbox.json";
const useEmailData = () => {
  const [emailData, setEmailData] = useState(fake);
  
  const makeArchive = (id: string) => {
    const updatedData = emailData.map((item) => 
      item.id === id
        ? { ...item, label: "archive" } 
        : item
    );

    setEmailData(updatedData);
  };

  return { emailData, makeArchive };
};

export default useEmailData;
