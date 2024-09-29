import { GitHub, LinkedIn } from '@material-ui/icons';

export const heroInfo = {
  name: 'SRIJAN TRIVEDI',
  image: 'images/myImage.jpeg',
  
  title: [
    'Full Stack Developer',
    
    'Software Engineer',
    'React Developer',
    'Node.js Developer',
  ],
  contacts: [
    {
      id: 1,
      name: 'GitHub',
      icon: GitHub,
      username: 'SrijanTrivedi00',
      link: 'https://github.com/SrijanTrivedi00',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: LinkedIn,
      username: 'SrijanTrivedi445',
      link: 'https://www.linkedin.com/in/srijan-trivedi445/',
    },
  ],
};

// export const resumes = [
//   {
//     id: 1,
//     year: 'July 2023 - Present',
//     role: 'Software Specialist',
//     companyName: 'SSL Wireless',
//     companyUrl: 'https://www.sslwireless.com/',
//     description:
//       'SSL Wireless is recognized for its rapid development and efficient project execution by working with industry-standard technologies. SSL Wireless mounts on its decade long industry experience, superior technical skills and highest quality of support services to provide scalable IT solutions as a leading Software development and services company. It has deep infiltration in the Value-Added Services, Banking, Corporate, and FinTech industry of Bangladesh.',
//   },
//   {
//     id: 2,
//     year: 'March 2022 - June 2023',
//     role: 'Software Engineer',
//     companyName: 'Sheba Technologies Ltd.',
//     companyUrl: 'https://www.shebatech.com.bd/',
//     description:
//       'Sheba Technologies Limited (STL) is part of the Sheba Group conglomerate which has been in Tech business for almost quarter of a century. STL is fully committed to bring world class technologically advanced Business Process Automation by delivering architecturally superior Software solution, Off-the-Shelf customizable Software, Artificial Intelligence and Machine Learning to our esteemed clients who are also our long-term strategic partners.',
//   },
//   {
//     id: 3,
//     year: 'January 2021 - February 2022',
//     role: 'Software Engineer',
//     companyName: 'PAP International Ltd.',
//     companyUrl: 'http://papint.asia/',
//     description:
//       'PAP International is a Technology development and Business solution provider that covers all areas of the Industries.The company is now fully setup and operating in Bangladesh as an extension of the parent company in UK.',
//   },
// ];

export const educations = [
  {
    id: 1,
    year: 'OCT 2022 - JULY 2024',
    universityName: 'HARCOURT BUTLER TECHNICAL UNIVERSITY',
    department: 'MCA - 8.34cgpa',
    description: '',
  },
  {
    id: 2,
    year: 'AUG 2018 - AUG 2021',
    universityName: 'LUCKNOW UNIVERSITY',
    department: 'BCA - 68.5%',
    description: '',
  },
  {
    id: 3,
    year: '2016-2017',
    universityName: 'LUCKNOW PUBLIC SCHOOL (ISC)',
    department: 'INTERMEDIATE - 83.5%',
    description: '',
  },
  {
    id: 3,
    year: '2014-2015',
    universityName: ' LUCKNOW PUBLIC SCHOOL (ICSE)',
    department: 'HIGH SCHOOL - 84.6',
    description: '',
  }
];

export const projects = [
  {
    id: 1,
    image: 'https://signmantra-theta.vercel.app/assets/navbarlogo.png',
    name: 'SIGNMANTRA',
    description: `Engineered a web application for SignMantra, a design agency which provide consulting services through the
integration of diverse disciplines. This solution boosted operational efficiency and increased revenue by 25%..`,
    tools: [ 'react', 'Nodejs','Express','postgreSQL'],
    live: 'https://www.signmantra.in/',
    source: '/',
  },
  {
    id: 2,
    image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png',
    name: 'CASHFLOW360',
    description: `Developed a dynamic budget planner application using Angular for a responsive front-end, Node.js and Express
for efficient back-end processing, and secure authentication. Implemented RESTful APIs for seamless data
exchange, optimized server-side logic and database interactions for real-time updates, and enhanced overall
performance while resolving technical issues.`,
    tools: ['Angular', 'Nodejs','Express','postgreSQL'],
    live: '/',
    source: 'https://github.com/SrijanTrivedi00',
  },
  {
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png?20200513123442',
    name: 'My Portfolio Website',
    description: `This is my Portfolio Website. Also this is a part of projects. Where people can see some information \
    about me. There are 6 pages like Home, Resume, Portfolio, Contacts, Skills and Educations. For this project i \
    used 'React' for front end and 'Material-UI'.`,
    tools: ['javascript', 'react'],
    live: '/',
    source: 'https://github.com/SrijanTrivedi00',
  },
];

export const skills = [
  {
    title: 'ReactJS',
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  },
  {
    title: 'Angular',
    logo: 'data:image/png;base64,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',
  },
  {
    title: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    title: 'PostgreSQL',
    logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
  },

  {
    title: 'CSS',
    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
  },
  {
    title: 'HTML',
    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  },
  {
    title: 'Java',
    logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
  },
  
  {
    title: 'TailwindCSS3',
    logo: 'https://www.svgrepo.com/show/333609/tailwind-css.svg',
  },
 
  // msql
  {
    title: 'MySQL',
    logo: 'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png',
  },

 

  {
    title: 'NodeJS',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  },
  {
    title: 'AWS',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  },
  {
    title: 'VS Code',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEVHcEwAesEPj9gkq/UKhMsAgsoAebsAbbAmtPUiqPIOjtUAeLoAe8IlsPMjqPIAdrgAfMMAi9MAjtUAaK0AfcMkrPMAjdUAb7MAdLYAitMjqfIAfMoAhdEAZqsAgM8hpfIAgM8Dg9EgofIAdMggn/AAcMcJFOONAAAAJHRSTlMAjPGdFrz///+6Jt0I/4j/QZf/+mX/45///////+P//93+//Rp+cbUAAAA80lEQVR4AX3TRQLDMAxE0Qm6YWam+1+xspUyfC1fODa+pOmGiR9ZtrhcHPerebbEr+yTEQYBcfhmJhGj7NVcZdETuneL7egNk1Q/OY7OshPJqFxaHtlsHgoORJQFaNGZhjvGrGUlai7GA+E2VNqkkVLPB9VyAEyp5J0QdQW8IvySuc9ifOLQN9wnmkJkI51HNQnjxAGuqEk7Iumzr7BVg1iohqQ/i5/OZKsA7abaAytp/Pn6fqTplxnTqobOEJkJVTyebdO6rvu0v/4yOlN20Fk7HYCXXBLGXQ5eM6V1x7Sr8N4scVUW4lM7xu8r1yJk+rsdrslQJWvXo+KOAAAAAElFTkSuQmCC',
  },

  {
    title: 'ExpressJS',
    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  },{
    title: "C++",
    logo: 'https://cdn.worldvectorlogo.com/logos/c.svg',
  },

  {
    title: 'Git',
    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  },
 
  {
    title: 'LEETCODE',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA4CAMAAABaKlG9AAAApVBMVEX///8AAADnpB+zsbCxr67Jx8bLysnlnQDlmwCHh4dwcHDmoADvxYbBwcH8/PyLi4v237/mohHn5+dYPw3vqSD348cxMTH02bG6urpra2unp6eTk5N0eH5ZOwD6z4356NHorEDqsU9aRiL51J/67d7rtFrz0qPsuWfa2dnz8/MPDg5jY2EYGBh0cWx7e3uenp789+61egCgchXJjx1yUhJsRwCxfhZZMPPLAAABg0lEQVRIic2VbV/CIBDAATehwDXWHmpWs0ynaWVlff+P1pq4h8YhvOnXvdT/nzu4gyEEx1WKryPD/7/iAv+EI45zNxxP3XDsu+Hn/wA/+5vVb9zw27vCBb+MJZslDjghRDLhglfB751ws9BulXPK5SmhwR/myWOxXFAlAHsYdDVUAtUKmiFIGCxoZwYWgBELlcAKK7wR+NIOPwq0NxjGAQ6ZlP0eTMzzXpRlb7uB2/VoqrHEkSPuH/DUEkfTA999h1c+EOM1QpvB8hMPjjV6qvlNi0f5CI4J2tb8c6caz8CPUOqyvuejl5rfduof56b6Xw/n033mozEQq6AqV/XL9vzVAdk3zFMJ0sBSSLFbhggbM2SElrveL82F0WUQ1YXkMwQIgwyifrRoAQlanPAMQUKgwQnbIVDQ4eFwX5oMmQHvCiq54Ca8I7wtsiwT8gTeCu+S8+PnhVAQb4QP0ob+Y9ET9rEtXt2G/edXi0u49ibmMZV17ZKzctAmXSRiUeEzEerobzQDGi5kOdfhAAAAAElFTkSuQmCC',
  },
  {
    title: 'GitHub',
    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
  },
  {
    title: 'Excel',
    logo: 'https://cdn.worldvectorlogo.com/logos/excel-4.svg',
    
  },
];
