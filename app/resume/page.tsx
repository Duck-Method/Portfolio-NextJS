// resume/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';  // Fix text rendering
import 'react-pdf/dist/Page/AnnotationLayer.css'; // Fix link annotations
import DownloadButton from '../components/downloadButton';
import styles from './resume.module.css'

export default function Resume() {
    const [workerReady, setWorkerReady] = useState(false);

    useEffect(() => {
        const loadWorker = async () => {
            const pdfjs = await import('pdfjs-dist');
            pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
            setWorkerReady(true);
        };
        loadWorker();
    }, []);

    if (!workerReady)
        return <div>Loading PDF viewer...</div>

    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <div className={styles.resumeBanner}>
                <p>Current available resume:</p>
                <DownloadButton />
            </div>
            <Document file="/Brian_Baker_Resume.pdf">
                <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
        </div>
    );
}