import Link from 'next/link';
import React from 'react';

const Aside = () => {
    return (
        <div>
            <Link href="/">Inbox</Link>
            <Link href="/archive">Archive</Link>
        </div>
    );
};

export default Aside;