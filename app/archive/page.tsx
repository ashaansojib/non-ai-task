"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import EmailCard from "../components/EmailCard";
import { Emails } from "@/global-interfaces";

const ArchivePage: React.FC = () => {
  const [emails, setEmails] = useState<Emails[]>([]);
  const [selectEmail, setSelectEmail] = useState<number>(0);

  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setEmails(data));
  }, []);
  const handleSelect = (id: any) => {
    setSelectEmail(selectEmail + id);
  };

  return (
    <div>
      <h3 className="title">Archive</h3>
      <div className="content-header">
        <p>Email Selected ({selectEmail})</p>
        <div>
          <Link className="read-btn" href="/">
            Mark as read (r)
          </Link>
          <Link href="/">Archive (a)</Link>
        </div>
      </div>
      {/* Render email list */}
      {emails.map((item: Emails) => (
        <EmailCard key={item.id} item={item} handleSelect={handleSelect} />
      ))}
    </div>
  );
};

export default ArchivePage;
