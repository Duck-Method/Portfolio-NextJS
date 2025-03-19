// /about.tsx
'use client';

import Image from 'next/image';
import styles from './about.module.css';

export default function about() {
    return (
        <div className={styles.divAlign}>
            <p className={styles.pAlign}> 
                <Image
                src='/Face_BW.png'
                height={267}
                width={200}
                alt='An image of Brian Baker'
                className={styles.imageLayout}
                />
                My journey into understanding the human body began with a fascination for movement—whether in dance, sports, or everyday resilience—and evolved into a career in massage therapy. At the Utah College of Massage Therapy, I immersed myself in anatomy, biomechanics, and hands-on techniques, learning to diagnose and address complex physical issues. This experience honed my ability to analyze problems holistically, adapt solutions to unique needs, and prioritize client-centered outcomes—skills I now channel into software development. Just as I assessed musculoskeletal patterns to relieve tension, I approach coding with the same curiosity, breaking down technical challenges into manageable components and iterating until the solution <span className={styles.italic}>fits</span>.  
            </p>
            <br />
            <p className={styles.pAlign}>
                A pivotal lesson from my career—<span className={styles.italic}>“Why would they want you?”</span>—taught me that expertise alone isn’t enough; it’s the <span className={styles.italic}>application</span> of knowledge that creates value. In massage therapy, this meant blending modalities like myofascial release and tensegrity principles to deliver tailored, lasting results. Similarly, in tech, I thrive on bridging theory and practice, whether designing user-centric applications or debugging systems. My background in adapting techniques for diverse clients translates to building flexible, scalable software, while my collaborative approach—partnering with clients to achieve their goals—mirrors agile teamwork and user-focused development.  
            </p>
            <br/>
            <p className={styles.pAlign}>
                Transitioning to software development feels like a natural extension of my passion for problem-solving. Just as I refined my craft through continuous learning in massage therapy, I’m now deepening my skills in programming languages and frameworks. The core of both fields lies in understanding systems, iterating with precision, and empowering others—whether relieving physical pain or streamlining digital experiences. Both disciplines demand a blend of analytical rigor and creative adaptability, where solutions emerge not just from technical proficiency, but from a commitment to understanding the unique needs of the systems—and people—they serve.
            </p>
        </div>
    )
}