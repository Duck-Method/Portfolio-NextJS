// /components/navBar.tsx
'use client';
import styles from './navBar.module.css';

import Link from 'next/link';

export default function NavBar() {
    return(
        <div className={styles.navBar}>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About Me</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/resume">Resume</Link>
        </div>
    )
}