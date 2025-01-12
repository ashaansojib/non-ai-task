"use client";
import React, { useState } from "react";
import EmailCard from "../components/EmailCard";
import { Emails } from "@/global-interfaces";
import { FaBookBookmark, FaBoxArchive } from "react-icons/fa6";
import { useAllEmailsQuery } from "../redux/features/EmailsApi";

const ArchivePage: React.FC = () => {
  const { data: email = [], isLoading } = useAllEmailsQuery();
  const filterArchive = email?.filter((item) => item.label === "archive");
  const [selectEmail, setSelectEmail] = useState(0);

  const handleSelect = (data: any) => {
    setSelectEmail(data === true ? selectEmail + 1 : selectEmail - 1);
  };
  
  return (
    <div>
      <h3 className="head-title">Archive</h3>
      <div className="content-header">
        <p>Email Selected ({selectEmail})</p>
        <div className="options">
          <p>
            <FaBookBookmark /> Mark as read (r)
          </p>
          <p>
            <FaBoxArchive /> Archive (a)
          </p>
        </div>
      </div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        filterArchive.map((item: Emails) => (
          <EmailCard key={item.id} item={item} handleSelect={handleSelect} />
        ))
      )}
    </div>
  );
};

export default ArchivePage;
