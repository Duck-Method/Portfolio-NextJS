'use client';
import { project } from "../lib/data";
import styles from './ProjectCard.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function ProjectCard() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClick = (id: number) => {
        setSelectedId((prevId) => (prevId === id ? null : id));
    }

    return (
        <>
            {project.map((proj) => (            
                <div key={proj.id} className={styles.section} onClick={() => handleClick(proj.id)}>
                    <h3>
                        {proj.name}
                    </h3>

                    {selectedId === proj.id && (                    
                        <div className={styles.card}>
                            <Image 
                                src={proj.img}  
                                alt={proj.name}
                                width={300}
                                height={300}
                                className={styles.image} 
                            /> 
                            <div>
                                <a href={proj.liveUrl}>
                                    View Live
                                </a>
                                <a href={proj.gitUrl}>
                                    View Code
                                </a>
                            </div>
                            <p>{proj.description}</p>
                        </div>
                    )}
                </div>
            ))}    
        </>
    );
}