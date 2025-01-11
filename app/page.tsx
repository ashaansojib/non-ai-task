import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h3 className="title">Inbox</h3>
      <div className="content-header">
        <p>Email Selected (12)</p>
        <div>
          <Link className="read-btn" href="/">
            Mark as read (r)
          </Link>
          <Link href="/">Archive (a)</Link>
        </div>
      </div>
    </div>
  );
}
