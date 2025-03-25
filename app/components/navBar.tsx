// /components/navBar.tsx
'use client';
import styles from './navBar.module.css';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function NavBar() {
    const pathname = usePathname();
    return(
        <div className={styles.navBar}>
            <Link className={`${pathname === "/" ? styles.active : ""}`} href="/">Home</Link>
            <Link className={`${pathname === "/about" ? styles.active : ""}`} href="/about">About Me</Link>
            <Link className={`${pathname === "/projects" ? styles.active : ""}`} href="/projects">Projects</Link>
            <Link className={`${pathname === "/contact" ? styles.active : ""}`} href="/contact">Contact</Link>
            <Link className={`${pathname === "/resume" ? styles.active : ""}`} href="/resume">Resume</Link>
        </div>
    )
}