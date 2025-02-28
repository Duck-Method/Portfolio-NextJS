// components.downloadButton.tsx
'use client';
import { useState } from 'react';
import styles from './downloadButton.module.css'

export default function DownloadButton() {

    const [clicked, setClicked] = useState(false);
    const pdfUrl = '/Brian_Baker_Resume.pdf';

    const handleClick = () => {
        setClicked(true)
        setTimeout(() => setClicked(false), 5000); //reset after 5 seconds
    }

    return (
        <a 
            className={`${styles.button} ${clicked ? styles.clicked : ''}`} 
            href={pdfUrl} download='Brian_Baker_Technical_Resume.pdf'
            onClick={handleClick}
        >
            {clicked ? "Downloading..." : "Download PDF"}
        </a>
    )
}