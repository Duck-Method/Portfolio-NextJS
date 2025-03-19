// lib/data.tsx

export interface ProjectData {
    id: number;
    name: string;
    description: string;
    gitUrl: string;
    liveUrl?: string;
    img: string;
}

export const project: ProjectData[] = [
    {id: 1, name: 'Pomodoro Timer', description: 'This project uses NextJS to create a gentle pomodoro timer that creates a soundscape for you to use as background music to complete your tasks.', gitUrl: 'https://github.com/Duck-Method/NextJS-Webpage', liveUrl: 'https://nextjs-webpage-hlm5.onrender.com/', img: '/pomodoroTimer.png',},
    {id: 2, name: 'Healers Art', description: 'This is the first website I created on my own from scratch. It uses very basic HTML and CSS. I keep this one around to remind me how far I have come in the complexity of what I can make.', gitUrl: 'https://github.com/Duck-Method/Healers-Art', liveUrl: 'https://healersartmassage.com', img: '/healArt.png',},
    {id: 3, name: 'OOP Vehicle Builder', description: 'This is an example of Object Oriented Programming using a Typescript and modular structure to create a CLI that walks you through the various option provided for creating a car, truck, or motorbike object and performing actions on that object.', gitUrl: 'https://github.com/Duck-Method/OOP-Vehicle-Builder', liveUrl: 'https://drive.google.com/file/d/10jZJw71G-4NQb-ykSvepndjinmtGVozv/view?usp=sharing', img: '/OOPVehicleBuilder.png',},
    {id: 4, name: 'Hyrule Compendium', description: 'This is a group project that was created during the coding bootcamp I attended. It was my responsibility to create the front-end components for populating the categories, page info, comments, and reactions based upon the API calls to the server. The information is updated dynamically based upon what is available on the server, so as users add pages, those pages are available within the navigation automatically.', gitUrl: 'https://github.com/Cinnlight/Hyrule-Compendium', liveUrl: 'https://hyrule-compendium.magicapps.dev/', img: '/hyruleCompendium.png',},
    //{id: , name: '', description: '',url: '', img: '',}, // copy this line to create new structure and then uncomment for use
]