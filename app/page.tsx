"use client";
import { Emails } from "@/global-interfaces";
import React, { useEffect, useState } from "react";
import EmailCard from "./components/EmailCard";
import { FaBookBookmark, FaBoxArchive } from "react-icons/fa6";

export default function Home() {
  const [emails, setEmails] = useState<Emails[]>([]);
  const [selectEmail, setSelectEmail] = useState<number>(0);

  useEffect(() => {
    fetch("/inbox.json")
      .then((res) => res.json())
      .then((data) => setEmails(data));
  }, []);

  const handleSelect = (id: number) => {
    setSelectEmail(selectEmail + id);
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
      {/* email list here*/}
      {emails?.map((item: Emails) => (
        <EmailCard key={item.id} item={item} handleSelect={handleSelect} />
      ))}
    </div>
  );
}
