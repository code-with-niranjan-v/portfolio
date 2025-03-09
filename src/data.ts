import { Project, TechStack } from './types';

export const techStacks: TechStack[] = [
  {
    category: 'Android Development',
    technologies: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Room', 'Retrofit','Coroutines','MVVM','Live Data','View model','XML','Firebase']
  },
  {
    category: 'Web Development',
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Expressjs','Hono','Javascript','Mongoose','Prisma','MongoDB',]
  },
];

export const projects: Project[] = [
  {
    id: 'video-tube',
    name: 'Video Tube',
    description: 'MyVideo Tube is a Kotlin-based YouTube clone, employing Dagger Hilt, MVVM, Coroutines, and Firebase. Featuring user authentication, seamless video streaming, and a clean UI, the app showcases modern Android development practices. Embrace the world of dynamic video content with this open-source project.',
    thumbnail: 'https://raw.githubusercontent.com/code-with-niranjan-v/My-Video-Tube/refs/heads/main/Screen%20Shots/Screenshot_20240301_230620.png',
    category: 'android',
    screenshots: [
      'https://raw.githubusercontent.com/code-with-niranjan-v/My-Video-Tube/refs/heads/main/Screen%20Shots/Screenshot_20240301_230620.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/My-Video-Tube/refs/heads/main/Screen%20Shots/Screenshot_20240301_230641.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/My-Video-Tube/refs/heads/main/Screen%20Shots/Screenshot_20240301_230718.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/My-Video-Tube/refs/heads/main/Screen%20Shots/Screenshot_20240301_230747.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/My-Video-Tube/refs/heads/main/Screen%20Shots/Screenshot_20240301_230817.png'
    ],
    githubLink: 'https://github.com/code-with-niranjan-v/My-Video-Tube/tree/main',
    technologies: ['Android Development','Kotlin', 'Firbase','Coroutines','MVVM']
  },
  {
    id: 'my-social-app',
    name: 'MySocialApp',
    description: 'MySocialApp is a dynamic social platform, employing Firebase for real-time data sync. It adopts MVVM architecture, Coroutines for smooth async operations, and Dagger Hilt for dependency injection. The user interface is crafted using XML, ensuring an intuitive and engaging social networking experience.',
    thumbnail: 'https://media.licdn.com/dms/image/v2/D562DAQELop14UeprfQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1711724099823?e=1742076000&v=beta&t=tL1TAKXVTc1hc8OSmI3TELokQR-qyWo4zOl3qCeYVmI',
    category: 'android',
    screenshots: [
      'https://raw.githubusercontent.com/code-with-niranjan-v/MySocialApp/refs/heads/main/ScreenShots/Screenshot_1695905381.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/MySocialApp/refs/heads/main/ScreenShots/Screenshot_1695905386.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/MySocialApp/refs/heads/main/ScreenShots/Screenshot_1695905487.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/MySocialApp/refs/heads/main/ScreenShots/Screenshot_1695905694.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/MySocialApp/refs/heads/main/ScreenShots/Screenshot_1695905703.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/MySocialApp/refs/heads/main/ScreenShots/Screenshot_1695905712.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/MySocialApp/refs/heads/main/ScreenShots/Screenshot_1695905721.png'
    ],
    githubLink: 'https://github.com/code-with-niranjan-v/MySocialApp/tree/main',
    technologies: ['Android Development','Kotlin', 'ExoPlayer','Firbase','Coroutines','MVVM']
  },
  {
    id: 'Medium-clone',
    name: 'Echowrite',
    description: 'EchosWrite is a modern blogging platform engineered for efficiency and performance, featuring a robust backend powered by Hono, Prisma (with Accelerator), and PostgreSQL for optimized data management, coupled with a responsive React frontend for a seamless user experience, and fortified by Zod for stringent input validation, ensuring data integrity and rapid content delivery.',
    thumbnail: 'https://raw.githubusercontent.com/code-with-niranjan-v/medium/refs/heads/master/ScreenShots/Screenshot%202025-03-09%20235130.png',
    category: 'web',
    screenshots: [
      'https://raw.githubusercontent.com/code-with-niranjan-v/medium/refs/heads/master/ScreenShots/Screenshot%202025-03-09%20235130.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/medium/refs/heads/master/ScreenShots/Screenshot%202025-03-09%20235146.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/medium/refs/heads/master/ScreenShots/Screenshot%202025-03-09%20235222.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/medium/refs/heads/master/ScreenShots/Screenshot%202025-03-09%20235253.png',
      'https://raw.githubusercontent.com/code-with-niranjan-v/medium/refs/heads/master/ScreenShots/Screenshot%202025-03-09%20235332.png',

    ],
    githubLink: 'https://github.com/code-with-niranjan-v/medium',
    technologies: ['Web Development','Hono', 'Prisma', 'Prisma Accelerator', 'PostgreSQL', 'React', 'Zod', 'TypeScript', 'Tailwind CSS']
  }
  // {
  //   id: 'smart-fit',
  //   name: 'SmartFit',
  //   description: 'SmartFit is an innovative fitness tracking app that won a national-level hackathon for its smart and personalized approach to health and wellness. Built using Kotlin, Firebase, and AWS S3, SmartFit allows users to track workouts, monitor progress, and receive AI-driven fitness recommendations. With a seamless UI and real-time data syncing, it provides an intuitive and engaging experience for fitness enthusiasts. Our team’s focus on usability, scalability, and innovation made SmartFit stand out, earning us the top spot in the competition.',
  //   thumbnail: 'https://drive.google.com/file/d/10NbeIsr8iZ2iNIa9dtcTHLZOBY82JGRq/view',
  //   category: 'android',
  //   screenshots: [
  //     "https://drive.google.com/file/d/10NbeIsr8iZ2iNIa9dtcTHLZOBY82JGRq/view?usp=sharing"
      
  //   ],
  //   videos:["https://drive.google.com/file/d/10yCYbGXWHq5PoT02rp4hXHC8wYsIfUl6/view?usp=drive_link"],
  //   githubLink: 'https://github.com/code-with-niranjan-v/MySocialApp/tree/main',
  //   technologies: ['Android Development','Kotlin', 'Firebase','AWS S3','Coroutines','LLAMA AI']
  // }
];