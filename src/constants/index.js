import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
   
    tripguide,
    threejs,
    codingdojo,
    eventful,
    kantopokemon,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Coding Dojo",
      icon: codingdojo,
      iconBg: "#383E56",
      date: "November 2021 - February 2022",
      points: [
        "Developing web applications using Python, Java and the MERN Stack.",
        "Collaborating with other students to complete projects and solve daily algorithms",
        "Contributed to group projects as a developer and Scrum Master, ensuring the group’s focus on project goals.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Emoji",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "T3stack",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/HirotheChamp/chirp",
      // website_link: "https://hiro-eventful.netlify.app/",
    },
    {
      name: "Event Planner",
      description:
        "Web application that enables users to create an account, login to create custom events, and allow others and yourself to accept these events.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "GraphQL",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: eventful,
      source_code_link: "https://github.com/HirotheChamp/Eventful",
      website_link: "https://hiro-eventful.netlify.app/",
    },
    {
      name: "Kanto Pokedex",
      description:
        "A pokedex of the first 151 pokemon constructed through fetching the pokemon API and rendering its data using vanilla javaScript.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "PokeAPI",
          color: "pink-text-gradient",
        },
      ],
      image: kantopokemon,
      source_code_link: "https://github.com/HirotheChamp/PokemonKanto",
      website_link: "https://kantopokemon.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };