import Link from "next/link";
import React from "react";

const Aside = () => {
  return (
    <>
      <Link className="list-items" href="/">
        Inbox <span>10</span>
      </Link>
      <Link className="list-items" href="/archive">
        Archive <span>9</span>
      </Link>
    </>
  );
};

export default Aside;
