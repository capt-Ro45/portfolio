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
    jobit,
    tripguide,
    threejs,
    ensar,
    powerBI,
    CricKing,
    Road,
    settings,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
    {
      title: "power BI",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "power BI",
      icon: powerBI,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Intern",
      company_name: "ensar",
      icon: ensar,
      iconBg: "#383E56",
      date: "July 2023",
      points: [
        "Developing and learning web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
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
      name: "CricKing corner",
      description:
        "created different types of cricketing brand expenses using react.js",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
      ],
      image: CricKing,
      source_code_link: "https://github.com/capt-Ro45/CricKing-corner",
    },
    {
      name: "Road accidents analysis",
      description:
        "created a powerBI presentation on road accidents on different types of roads, weather,vehicles and compared previous year to current year by taking random data",
      tags: [
        {
          name: "powerBI",
          color: "blue-text-gradient",
        },
      ],
      image: Road,
      source_code_link: "https://github.com/capt-Ro45/PowerBI",
    },
    {
      name: " Settings UI card",
      description:
        "took a ui card from figma and cloned it using react.js and css",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: settings,
      source_code_link: "https://github.com/capt-Ro45/Settings-UI",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };