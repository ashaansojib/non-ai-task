"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import EmailCard from "../components/EmailCard";
import { Emails } from "@/global-interfaces";

const ArchivePage: React.FC = () => {
  const [archive, setArchive] = useState([]);
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setArchive(data));
  }, []);
  return (
    <div>
      <h3 className="title">Archive</h3>
      <div className="content-header">
        <p>Email Selected (12)</p>
        <div>
          <Link className="read-btn" href="/">
            Mark as read (r)
          </Link>
          <Link href="/">Archive (a)</Link>
        </div>
      </div>
      {/* email list here*/}
      {
        archive?.map( (item: Emails) => <EmailCard key={item.id} item={item} />)
      }
    </div>
  );
};

export default ArchivePage;
