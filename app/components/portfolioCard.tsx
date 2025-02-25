'use client';
import { project } from "../lib/data";

export default function ProjectCard() {

    return (
        <>
            {project.map((proj) => (            
                <a key={proj.id} 
                    href={proj.liveUrl} 
                    className='project-card' 
                    style={{ 
                        backgroundImage: `url(${proj.img})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        width: '300px',
                        height: '300px',
                        display: 'block',
                        }}>
                    <h3 className=''>
                        {proj.name}
                    </h3>
                    {/* <Image 
                        src={proj.img} 
                        alt={proj.name} 
                        width={300}
                        height={300}
                        className=''
                    /> */}
                    <p className=''>{proj.description}</p>
                </a>
            ))}    
        </>
    );
}