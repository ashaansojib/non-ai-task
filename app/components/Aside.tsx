import Link from "next/link";
import React from "react";

const Aside = () => {
  return (
    <div className="sidebar-container">
      <div>
        <img className="logo" src="/logo.png" alt="" />
        <Link className="list-items" href="/">
          Inbox <span>9</span>
        </Link>
        <Link className="list-items" href="/archive">
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
