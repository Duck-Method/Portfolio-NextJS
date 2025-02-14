'use client';
import { project } from "../lib/data";

export default function ProfileCard() {

    return (
        <>
            {project.map((proj) => (            
                <a key={proj.id} href={proj.url} className=''>
                    <h3 className=''>
                        {proj.name}
                    </h3>
                    <img src={proj.img} alt={proj.name} className=''/>
                    <p className=''>{proj.description}</p>
                </a>
            ))}    
        </>
    );
}