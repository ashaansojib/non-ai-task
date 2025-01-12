"use client";
import { Emails } from "@/global-interfaces";
import React, { useEffect, useState } from "react";
import EmailCard from "./components/EmailCard";
import { FaBookBookmark, FaBoxArchive } from "react-icons/fa6";
import { useAllEmailsQuery } from "./redux/features/EmailsApi";
import useEmailData from "./hooks/useEmailData";

export default function Home() {
  const { data: email = [], isLoading } = useAllEmailsQuery();
  const filterInbox = email?.filter((item) => item.label === "inbox");
  const [selectEmail, setSelectEmail] = useState(0);
  const fakeData = useEmailData();

  useEffect(() => {
    fakeData.makeArchive("6");
    console.log(fakeData.emailData);
  }, []);

  const handleSelect = (data: any) => {
    setSelectEmail(data === true ? selectEmail + 1 : selectEmail - 1);
  };
  return (
    <div>
      <h3 className="head-title">Inbox</h3>
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
        filterInbox.map((item: Emails) => (
          <EmailCard key={item.id} item={item} handleSelect={handleSelect} />
        ))
      )}
    </div>
  );
}
