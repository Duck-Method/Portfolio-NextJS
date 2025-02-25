// /components/navBar.tsx
'use client';

import Link from 'next/link';

export default function NavBar() {
    return(
        <div>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About Me</Link>
            <Link href="/contact">Contact</Link>
        </div>
    )
}