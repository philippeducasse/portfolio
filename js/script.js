let projects = [

    {
        id: 2,
        name: 'AI-Gram',
        shortDescription: 'NextJS application for generating, uploading, and browsing images',
        description: 'Can you tell which images are AI generated? This app allows users to make use of DeepAi\'s API to generate images based on text input. Users can also upload images from their devices and browse images in the gallery. Clicking on a selectted image in the gallery reveals if the image was AI-generated or not.',
        technologies: ['NextJS', 'Tailwind', 'Firebase Cloud Storage', 'REST-API', 'Vercel', ],
        image: './img/ai-gram.png',
        githubLink: 'https://github.com/philippeducasse/cosee',
        link: 'https://am-i-ai.vercel.app/',
    },
    {
        id: 1,
        name: 'fletNix',
        shortDescription: 'An app for displaying a list of movies built with the React.js',
        description: 'For this project I built the frontend for a single page application (SPA) using the React.js framework and React Bootstrap, a UI library. After signing up and logging in, users can browse the list of movies, add or remove movies to their list of favorites, and delete or update their profile. The app also allows users to view similar movies from the list based on their genre. This app makes API requests to an API which I created previously, making this a full-stack project.',
        technologies: ['React', 'React Bootstrap', 'Redux (state management)', 'Parcel (build tool)'],
        image: './img/fletnix.png',
        githubLink: 'https://github.com/philippeducasse/Fletnix-client',
        link: 'https://flet-nix.netlify.app/',
        caseStudy: './case-study.html', 
    },
    {
        id: 4,
        name: 'ChattyApp',
        shortDescription: 'A mobile app built with React Native',
        description: 'In this project I created an app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location, and implements google firebase to store messages and images on a cloud database.',
        technologies: [
            'React Native',
            'Expo (toolchain to write native apps in JS)',
            'React Native Gifted Chat library',
            'Google Firestore DB',
            'Google Firebase Authentication',
            'AsyncStorage caching for offline use',
            'Firebase cloud storage (for storing images)',
            'Expo ImagePicker & MediaLibrary for integrating communication features'
        ],
        image: './img/chattyApp.jpg',
        githubLink: 'https://github.com/philippeducasse/ChattyApp',
        link: './chattyApp.html',
    },
    {
        id: 5,
        name: 'Recipe App',
        shortDescription: 'Python Django application for displaying recipes',
        description: 'This app allows users to create and browse cooking recipes. Registered users can create recipes by providing a name, cooking time, and a list of ingredients. The app then contains functionalities to display all recipes, to search for recipes with specific ingredients, and to modify or delete an existing recipe. Graphs and charts were also included for data visualisation using Matplotlib. The app is hosted on Heroku. ',
        technologies: ['Python3', 'Django', 'Numpy', 'Pandas', 'Matplotlib', 'Bootstrap', 'Heroku'],
        image: './img/recipe.png',
        githubLink: 'https://github.com/philippeducasse/recipe-app',
        link: 'https://recipe-app-zc4m.onrender.com/',
    },
    {
        id: 3,
        name: 'Meet App',
        shortDescription: 'A React app built using a test driven development approach',
        description: 'In this project I designed an App which displays a list of events for various cities using React and Test Driven Development. Users are authorised through google OAuth, and can then use the search functionality to display events in a list of cities. The app also using Recharts, a React library for data visualisation',
        technologies: [
            'React', 'React Testing Library', 'Jest testing framework', 'AWS serverless hosting', 'Google OAuth authentication', 'Progressive Web Application and service workers', 'Recharts Data Visualisation'
        ],
        image: './img/ss_meet.png',
        githubLink: 'https://github.com/philippeducasse/meet',
        link: 'https://philippeducasse.github.io/meet//'
    },
    {
        id: 6,
        name: 'fletNix Angular client',
        shortDescription: 'An app which displays a list of movies using the MEAN webpack.',
        description: 'In this project I revisited the frontend for the fletNix app, using Angular instead of React. The backend of the app remains the same.',
        technologies: [
            'React Native',
            'Expo (toolchain to write native apps in JS)',
            'React Native Gifted Chat library',
            'Google Firestore DB',
            'Google Firebase Authentication',
            'AsyncStorage caching for offline use',
            'Firebase cloud storage (for storing images)',
            'Expo ImagePicker & MediaLibrary for integrating communication features'
        ],
        image: './img/screenshot_Flet_ang.png',
        githubLink: 'https://github.com/philippeducasse/fletNix-Angular-client',
        link: 'https://philippeducasse.github.io/fletNix-Angular-client/',
    },
   

]

function addProject(project) {
    let projectList = document.querySelector('.grid');
    let projectItem = document.createElement('div');
    projectItem.classList.add('grid__item', 'hidden');
    const index = projectList.children.length;
    if (index < 2) {
        projectItem.classList.add('left');
    } else if (index < 4) {
        projectItem.classList.add('right');
    } else {
        projectItem.classList.add('bottom');
    }

    projectList.appendChild(projectItem)

    //add title to each project
    let projectTitle = document.createElement('h4');
    projectTitle.classList.add('card-title');

    let t = document.createTextNode(project.name);
    projectTitle.appendChild(t);
    projectItem.appendChild(projectTitle);

    //adds screenshot to each project
    let screenshot = document.createElement('img');
    screenshot.setAttribute('src', project.image);
    screenshot.classList.add('screenshot');
    projectItem.appendChild(screenshot);

    //adds short description for each project

    let shortDescription = document.createElement('p');
    shortDescription.classList.add('short-description');
    let sd = document.createTextNode(project.shortDescription);
    shortDescription.appendChild(sd);
    projectItem.appendChild(shortDescription);

    // adds button to each project
    let button = document.createElement('button');
    button.innerText = 'See details';
    button.classList.add('btn', 'btn-primary', 'modal-button');
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#projectModalCenter');
    button.setAttribute('type', 'button');
    button.addEventListener('click', function () {showModal(project) });
    projectItem.appendChild(button);
}

// displays modal for each project
function showModal(project) {
    let modalBody = document.querySelector('.modal-body');
    let modalTitle = document.querySelector('.modal-title');
    modalTitle.innerHTML = '';
    modalBody.innerHTML = '';
    let projectName = document.createElement('h1');
    projectName.textContent = project.name;

    let projectScreenshot = document.createElement('img');
    projectScreenshot.classList.add('modal-image');
    projectScreenshot.setAttribute('src', project.image);

    let projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description');
    projectDescription.textContent = project.description;

    let technologiesList = document.createElement('ul')

    let projectGithubLink = document.createElement('a');
    projectGithubLink.classList.add('modal-github-logo');
    projectGithubLink.setAttribute('target', '_blank');
    projectGithubLink.setAttribute('href', project.githubLink);
    projectGithubLink.textContent ='View the repository on GitHub';

    let projectLink = null // define var outside conditional to make it accessible to all conditions
    if (project.link !== ''){
        projectLink = document.createElement('a');
        projectLink.textContent = 'See the app live';
        projectLink.classList.add('live-link');
        projectLink.setAttribute('href', project.link);
        projectLink.setAttribute('target', '_blank');
    }
    let caseStudyLink = null
    if (project.caseStudy){
        caseStudyLink = document.createElement('a');
        caseStudyLink.textContent = 'View case study';
        caseStudyLink.classList.add('live-link');
        caseStudyLink.setAttribute('href', project.caseStudy);
        caseStudyLink.setAttribute('target', '_blank');
    }

    let modalLinks = document.createElement('div');
    modalLinks.classList.add('modal-links')

    modalBody.append(projectScreenshot);
    modalBody.append(projectDescription);
    modalBody.append(technologiesList);
    modalLinks.append(projectGithubLink);
    if (projectLink){
        modalLinks.append(projectLink);
    }  
     if (caseStudyLink){
        modalLinks.append(caseStudyLink);
    }
    modalTitle.append(projectName);
    modalBody.append(modalLinks);
   
}

$(document).ready(function () {
    projects.forEach(function (project) {
        addProject(project);
    });
});

