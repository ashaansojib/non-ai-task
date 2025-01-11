"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Aside = () => {
  const router = usePathname();
  console.log(router);
  return (
    <div className="sidebar-container">
      <div>
        <img className="logo" src="/logo.png" alt="" />
        <Link className={`${router === '/' ? 'active' : 'default'}`} href="/">
          Inbox <span>9</span>
        </Link>
        <Link className={`${router === '/archive' ? 'active' : 'default'}`} href="/archive">
          Archive <span>5</span>
        </Link>
      </div>
      <p>
        Logout
      </p>
    </div>
  );
};

export default Aside;
