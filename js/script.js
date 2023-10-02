let projects = [
    {
        id: 1,
        name: 'Pokédex App',
        shortDescription: 'Vanilla Javascript app which dynamically displays a list of Pokémons',
        description: 'In this project I designed a simple API using vanilla Javascript and Jquery to create an App that renders a list of Pokémon with specific details and images for each Pokémon. The Pokémon list is fetched from an external API, and the list is displayed dynamically using JS. Each rendered pokemon contains a button that displays a modal with additional information when clicked.',
        technologies: ['Vanilla Javascript', 'Jquery', 'Rest API', 'Bootstrap', 'AJAX'],
        image: './img/Screenshot_pokedex.png',
        githubLink: 'https://github.com/philippeducasse/Pokedex-App',
        link: 'https://philippeducasse.github.io/Pokedex-App/',
    },
    {
        id: 2,
        name: 'fletNix',
        shortDescription: 'An app for displaying a list of movies built with the MERN webstack',
        description: 'For this project I built an entire application which displays a list of movies, includind the backend server using NodeJS & express and MongoDB, and the frontend using React. The Api includes authorisation and authentication methods using express Passport, allowing users to signup, login, browse the list of movies, add or remove movies to their list of favorites, and delete or update their profile.',
        technologies: ['NodeJs', 'Express', 'Passport', 'Postman', 'MongoDB', 'Render', 'SQL', 'Mongo Atlas', 'React', 'React Bootstrap'],
        image: './img/ss_fletnix.png',
        githubLink: 'https://github.com/philippeducasse/Fletnix-client',
        link: 'https://fletnix-s949.onrender.com'
    },
    {
        id: 3,
        name: 'Meet App',
        shortDescription: 'A React app built using a test driven development approach',
        description: 'In this project I designed an App which displays a list of events for various cities using React and Test Driven Development. Users are authorised through google OAuth, and can then use the search functionality to display events in a list of cities. The app also using Recharts, a React library for data visualisation',
        technologies: [
            'React', 'React Testing Library', 'Jest testing framework', 'AWS serverless hosting', 'Google OAuth authentication', 'Progressive Web Application and service workers', 'Recharts Data Visualisation'
        ],
        image: './img/Screenshot_meet.png',
        githubLink: 'https://github.com/philippeducasse/meet',
        link: 'https://philippeducasse.github.io/meet//'
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
        image: './img/sc_1.jpg',
        githubLink: 'https://github.com/philippeducasse/ChattyApp',
        link: '',
    },
    {
        id: 5,
        name: 'fletNix Angular client',
        shortDescription: 'An app which displays a list of movies using the MEAN webpack.',
        description: 'In this project I revisited the frontend for the fletNix app (see project #2), using Angular instead of React. The backend of the app remains the same.',
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
    {
        id: 6,
        name: 'Other Projects',
        shortDescription: 'A list of other smaller projects',
        description: '',
        projects: [{
            id: 6,
            name: 'Results Summary Card',
            shortDescription: '',
            description: 'In this small project I created a Summary Card working from a model image provide by Frontendmentor.com. I recrated the model image as accurately as possible using only HTML and CSS',
            technologies: ['HTML', 'CSS'],
            image: './img/ss_results_card.png',
            githubLink: '',
            link: '',
        },
        {
            id: 7,
            name: 'Product Preview Card Component',
            shortDescription: '',
            description: '',
            technologies: [],
            image: './img/ss_preview_card.png',
            githubLink: '',
            link: '',
        },],
        technologies: [],
        image: './img/ss_simple_registration_form.png',
        githubLink: '',
        link: '',
    },

]

function addProject(project) {
    let projectList = document.querySelector('.grid');
    let projectItem = document.createElement('div')
    projectItem.classList.add('grid__item')

    projectList.appendChild(projectItem)

    //add title to each project
    let projectTitle = document.createElement('h2');
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

    let shortDescription = document.createElement('h5');
    shortDescription.classList.add('short-description');
    let sd = document.createTextNode(project.shortDescription);
    shortDescription.appendChild(sd);
    projectItem.appendChild(shortDescription);

    // adds button to each project
    let button = document.createElement('button');
    button.innerText = 'See details';
    button.classList.add('btn', 'btn-primary');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#projectModalCenter');
    button.setAttribute('type', 'button');
    button.addEventListener('click', function () { showModal(project) });
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
    projectGithubLink.textContent = project.githubLink;
    projectGithubLink.setAttribute('href', project.githubLink);

    let projectLink = document.createElement('a');
    projectLink.textContent = project.link;
    projectLink.setAttribute('href', project.link);

    modalBody.append(projectScreenshot);
    modalBody.append(projectDescription);
    modalBody.append(technologiesList);
    modalBody.append(projectGithubLink);
    modalBody.append(projectLink);
    modalTitle.append(projectName);
}

$(document).ready(function () {
    projects.forEach(function (project) {
        addProject(project);
    });
});

