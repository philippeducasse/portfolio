let projects = [
    {
        id: 1,
        name: 'Pokédex App',
        description: 'In this project I designed a simple API using vanilla Javascript and Jquery to create an App that renders a list of Pokémon with specific details and images for each Pokémon. The Pokémon list is fetched from an API, and the list is displayed dynamically using JS. ',
        technologies: ['Vanilla Javascript', 'Jquery', 'Rest API', 'Bootstrap'],
        image: '#',
        githubLink: '#',
        link: '#',
    },
    {
        id: 2,
        name: 'Fletnix',
        description: 'For this project I built an entire application which displays a list of movies, includind the backend server using NodeJS & express, and the frontend using react. The Api includes authorisation and authentication methods using express Passport',
        technologies: ['NodeJs', 'Express', 'Passport', 'Postman', 'MongoDB', 'Render', 'SQL', 'Mongo Atlas', 'React', 'React Bootstrap'],
        image: '#',
        githubLink: 'https://github.com/philippeducasse/Fletnix-client',
        link: 'https://fletnix-s949.onrender.com'
    },
    {
        id: 3,
        name: 'Meet App',
        description: 'In this project I designed an App which displays a list of events for various cities using React and Test Driven Development.',
        technologies: [
            'React', 'React Testing Library', 'Jest testing framework', 'AWS serverless hosting', 'Google AOuth authentication', 'Progressive Web Application and service workers', 'Recharts Data Visualisation'
        ],
        image: './img/Screenshot_meet.png',
        githubLink: 'https://github.com/philippeducasse/meet',
        link: 'https://philippeducasse.github.io/meet//'
    },
    {
        id: 4,
        name: 'Age Calulator App',
        description: '',
        technologies: [],
        image: '',
        githubLink: '',
        link: '',
    },
    {
        id: 5,
        name: 'Simple Registration Form',
        description: '',
        technologies: [],
        image: './img/ss_simple_registration_form.png',
        githubLink: '',
        link: '',
    },
    {
        id: 6,
        name: 'Results Summary Card',
        description: 'In this small project I created a Summary Card working from a model image provide by Frontendmentor.com. I recrated the model image as accurately as possible using only HTML and CSS',
        technologies: ['HTML', 'CSS'],
        image: './img/ss_results_card.png',
        githubLink: '',
        link: '',
    },
    {
        id: 7,
        name: 'Product Preview Card Component',
        description: '',
        technologies: [],
        image: './img/ss_preview_card.png',
        githubLink: '',
        link: '',
    },
]

function addProject(project) {
    let projectList = document.querySelector('.my-work');
    let listItem = document.createElement('container');
    listItem.classList.add('grid');
    projectList.appendChild(listItem);
    let projectItem = document.createElement('div');
    projectItem.classList.add('card', 'grid__item');
    listItem.appendChild(projectItem);

    //add title to each project
    let projectTitle = document.createElement('h2');
    projectTitle.classList.add('card-title');

    let t = document.createTextNode(project.name);
    projectTitle.appendChild(t);
    projectItem.appendChild(projectTitle);

    // adds button to each project
    let button = document.createElement('button');
    button.innerText = 'See details';
    button.classList.add('btn', 'btn-primary');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#projectModalCenter');
    button.setAttribute('type', 'button');
    button.addEventListener('click', function () { showModal(project) });

    projectItem.appendChild(button);
    //adds screenshot to each project
    let screenshot = document.createElement('img');
    screenshot.setAttribute('src', project.image);
    screenshot.classList.add('screenshot');
    projectItem.appendChild(screenshot);
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
    projectDescription.textContent = project.description;

    let technologiesList = document.createElement('ul')
    // let technologiesListItem = project.map()


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

