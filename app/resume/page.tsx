// resume/page.tsx
'use client';

import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';  // Fix text rendering
import 'react-pdf/dist/Page/AnnotationLayer.css'; // Fix link annotations

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


export default function Resume() {
    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <Document file="/Brian_Baker_Resume.pdf">
                <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
        </div>
    )
}