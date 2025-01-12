"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBoxArchive, FaInbox, FaRightFromBracket } from "react-icons/fa6";
import { useAllEmailsQuery } from "../redux/features/EmailsApi";

const Aside = () => {
  const {data: email = [], isLoading} = useAllEmailsQuery()
  const router = usePathname();
  const filterInbox = email?.filter( item => item.label === 'inbox');
  const filterArchive = email?.filter( item => item.label === 'archive');
  return (
    <div className="sidebar-container">
      <div>
        <img className="logo" src="/logo.png" alt="" />
        <Link className={`${router === "/" ? "active" : "default"}`} href="/">
          <span className="btn">
            <FaInbox />
            Inbox
          </span>{" "}
          <span>{filterInbox.length}</span>
        </Link>
        <Link
          className={`${router === "/archive" ? "active" : "default"}`}
          href="/archive"
        >
          <span className="btn">
            <FaBoxArchive />
            Archive
          </span>{" "}
          <span>{filterArchive.length}</span>
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
