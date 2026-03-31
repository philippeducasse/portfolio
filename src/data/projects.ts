export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  link: string;
  caseStudy?: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    id: 2,
    name: 'AI-Gram',
    shortDescription: 'NextJS application for generating, uploading, and browsing images.',
    description: 'Can you tell which images are AI generated? This app allows users to make use of DeepAi\'s API to generate images based on text input. Users can also upload images from their devices and browse images in the gallery. Clicking on a selected image in the gallery reveals if the image was AI-generated or not.',
    technologies: ['NextJS', 'Tailwind', 'Firebase Cloud Storage', 'REST-API', 'Vercel'],
    image: '/img/ai-gram.png',
    githubLink: 'https://github.com/philippeducasse/cosee',
    link: 'https://am-i-ai.vercel.app/',
    tools: ['/img/Languages_logos/typescript.svg', '/img/Languages_logos/nextjs.svg', '/img/Languages_logos/firebase_logo.PNG', '/img/Languages_logos/tailwind.png']
  },
  {
    id: 1,
    name: 'fletNix',
    shortDescription: 'An app for displaying a list of movies built with the React.js.',
    description: 'For this project I built the frontend for a single page application (SPA) using the React.js framework and React Bootstrap, a UI library. After signing up and logging in, users can browse the list of movies, add or remove movies to their list of favorites, and delete or update their profile. The app also allows users to view similar movies from the list based on their genre. This app makes API requests to an API which I created previously, making this a full-stack project.',
    technologies: ['React', 'React Bootstrap', 'Redux (state management)', 'Parcel (build tool)'],
    image: '/img/fletnix.png',
    githubLink: 'https://github.com/philippeducasse/Fletnix-client',
    link: 'https://flet-nix.netlify.app/',
    caseStudy: '/case-study.html',
    tools: ['/img/Languages_logos/javascript.svg', '/img/Languages_logos/react.svg', '/img/Languages_logos/node-js.svg', '/img/Languages_logos/mongodb_logo.png', '/img/Languages_logos/express.png', '/img/Languages_logos/heroku.svg']
  },
  {
    id: 4,
    name: 'ChattyApp',
    shortDescription: 'A mobile app built with React Native.',
    description: 'In this project I created an app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location, and implements google firebase to store messages and images on a cloud database.',
    technologies: ['React Native', 'Expo (toolchain to write native apps in JS)', 'React Native Gifted Chat library', 'Google Firestore DB', 'Google Firebase Authentication', 'AsyncStorage caching for offline use', 'Firebase cloud storage (for storing images)', 'Expo ImagePicker & MediaLibrary for integrating communication features'],
    image: '/img/chattyApp.jpg',
    githubLink: 'https://github.com/philippeducasse/ChattyApp',
    link: '/chattyApp.html',
    tools: ['/img/Languages_logos/javascript.svg', '/img/Languages_logos/react-native.svg', '/img/Languages_logos/firebase_logo.PNG']
  },
  {
    id: 5,
    name: 'Recipe App',
    shortDescription: 'Python Django application for displaying recipes.',
    description: 'This app allows users to create and browse cooking recipes. Registered users can create recipes by providing a name, cooking time, and a list of ingredients. The app then contains functionalities to display all recipes, to search for recipes with specific ingredients, and to modify or delete an existing recipe. Graphs and charts were also included for data visualisation using Matplotlib. The app is hosted on Heroku.',
    technologies: ['Python3', 'Django', 'Numpy', 'Pandas', 'Matplotlib', 'Bootstrap', 'Heroku'],
    image: '/img/recipe.png',
    githubLink: 'https://github.com/philippeducasse/recipe-app',
    link: 'https://recipe-app-zc4m.onrender.com/',
    tools: ['/img/Languages_logos/python.png', '/img/Languages_logos/django.svg', '/img/Languages_logos/sql.png']
  },
  {
    id: 3,
    name: 'Meet App',
    shortDescription: 'A React app built using a test driven development approach.',
    description: 'In this project I designed an App which displays a list of events for various cities using React and Test Driven Development. Users are authorised through google OAuth, and can then use the search functionality to display events in a list of cities. The app also using Recharts, a React library for data visualisation',
    technologies: ['React', 'React Testing Library', 'Jest testing framework', 'AWS serverless hosting', 'Google OAuth authentication', 'Progressive Web Application and service workers', 'Recharts Data Visualisation'],
    image: '/img/ss_meet.png',
    githubLink: 'https://github.com/philippeducasse/meet',
    link: 'https://philippeducasse.github.io/meet//',
    tools: ['/img/Languages_logos/javascript.svg', '/img/Languages_logos/react.svg', '/img/Languages_logos/aws.svg']
  },
  {
    id: 6,
    name: 'fletNix Angular client',
    shortDescription: 'An app which displays a list of movies using the MEAN webpack.',
    description: 'In this project I revisited the frontend for the fletNix app, using Angular instead of React. The backend of the app remains the same.',
    technologies: ['Angular', 'Material UI', 'Typescript', 'NodeJs', 'ExpressJs', 'MongoDB'],
    image: '/img/screenshot_Flet_ang.png',
    githubLink: 'https://github.com/philippeducasse/fletNix-Angular-client',
    link: 'https://philippeducasse.github.io/fletNix-Angular-client/',
    tools: ['/img/Languages_logos/typescript.svg', '/img/Languages_logos/angular.svg', '/img/Languages_logos/node-js.svg', '/img/Languages_logos/express.png', '/img/Languages_logos/mongodb_logo.png']
  }
];