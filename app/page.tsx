"use client";
import { Emails } from "@/global-interfaces";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import EmailCard from "./components/EmailCard";

export default function Home() {
  const [emails, setEmails] = useState([]);
  const [selectEmail, setSelectEmail] = useState(0);

  useEffect(() => {
    fetch("/inbox.json")
      .then((res) => res.json())
      .then((data) => setEmails(data));
  }, []);

  const handleSelect = (id:any) =>{
    setSelectEmail(selectEmail + id)
  }
  return (
    <div>
      <h3 className="title">Inbox</h3>
      <div className="content-header">
        <p>Email Selected ({selectEmail})</p>
        <div>
          <Link className="read-btn" href="/">
            Mark as read (r)
          </Link>
          <Link href="/">Archive (a)</Link>
        </div>
      </div>
      {/* email list here*/}
      {emails?.map((item: Emails) => (
        <EmailCard key={item.id} item={item} handleSelect={handleSelect}/>
      ))}
    </div>
  );
}
