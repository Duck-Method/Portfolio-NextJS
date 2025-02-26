'use client';
import { project } from "../lib/data";
import styles from './ProjectCard.module.css';

export default function ProjectCard() {

    return (
        <section className={styles.section}>
            {project.map((proj) => (            
                <a key={proj.id} 
                    href={proj.liveUrl} 
                    className={styles.card} 
                    style={{ 
                        backgroundImage: `url(${proj.img})`
                        }}>
                    <h3 className=''>
                        {proj.name}
                    </h3>
                    <p className=''>{proj.description}</p>
                </a>
            ))}    
        </section>
    );
}