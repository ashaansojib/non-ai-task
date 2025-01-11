"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBoxArchive, FaInbox, FaRightFromBracket } from "react-icons/fa6";

const Aside = () => {
  const router = usePathname();
  console.log(router);
  return (
    <div className="sidebar-container">
      <div>
        <img className="logo" src="/logo.png" alt="" />
        <Link className={`${router === "/" ? "active" : "default"}`} href="/">
          <span className="btn">
            <FaInbox />
            Inbox
          </span>{" "}
          <span>9</span>
        </Link>
        <Link
          className={`${router === "/archive" ? "active" : "default"}`}
          href="/archive"
        >
          <span className="btn">
            <FaBoxArchive />
            Archive
          </span>{" "}
          <span>5</span>
        </Link>
      </div>
      <p className="btn">
        <FaRightFromBracket />
        Logout
      </p>
    </div>
  );
};

export default Aside;
