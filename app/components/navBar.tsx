// /components/navBar.tsx
'use client';

import { NavLink } from 'react-router-dom';

export default function navBar() {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    )
}