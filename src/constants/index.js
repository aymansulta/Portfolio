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
    carrent,
    jobit,
    tripguide,
    threejs,
    avc,
    basata,
    ptv,
    bee,
    github,
    firebase,
    bootstrap,
    materialui,
    nextjs,
    restaurant,
    todolist,
    orange,
    utkur,
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
      title: "UX/UI Designer",
      icon: creator,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Next js",
    //   icon: nextjs,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Material UI",
      icon: materialui,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "github",
      icon: github,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Front-End Developer & Technology Leader",
      company_name: "Basata",
      icon: basata,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Front-End Developer & Technology Leader",
      company_name: "PTV",
      icon: bee,
      iconBg: "#E6DEDD",
      date: "Sep 2018 - Dec 2023",
      points: [
        "Highly motivated and results-oriented Front-End Developer Engineer and building dynamic and user-friendly web applications.",
        "Proficient in React, Redux, and best practices for responsive design and accessibility.",
        "Proven ability to deliver high-quality code and collaborate effectively within cross-functional teams.",
        "Seeking a challenging opportunity to contribute my expertise to a rapidly growing company.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "Payment Terminal Venture - PTV",
      icon: ptv,
      iconBg: "#383E56",
      date: "Nov 2013 - Aug 2018",
      points: [
        "Develop new user-facing features using HTML, CSS, and JavaScript frameworks.",
        "Build reusable code and libraries for future use.",
        "Ensure the technical feasibility of UI/UX designs.",
        "Collaborate with other team members and stakeholders.",
        "Implement responsive design for cross-platform and cross-browser compatibility.",
        "Optimize applications for maximum speed and scalability.",
        "Debug and troubleshoot issues in a timely manner.",
        "Write and maintain technical documentation.",
      ],
    },
    {
      title: "System Administrator",
      company_name: "AVC",
      icon: avc,
      iconBg: "#E6DEDD",
      date: "May 2012 - Oct 2013",
      points: [
        "Install, configure, and maintain server hardware and software.",
        "Manage and support virtualization environments.",
        "Monitor system performance, availability, and security and troubleshoot and resolve hardware, software, and network issues.",
        "Perform regular data backups and recovery operations.",
        "Implement and manage security measures, including firewalls, antivirus software, and intrusion detection systems.",
        "Manage user accounts, permissions, and access control.",
        "Monitor and manage network infrastructure, including routers, switches, and wireless access points.",
        "Provide technical support and training to end-users.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "After Ayman optimized our software, our traffic increased by 50%. We can't thank him enough!",
      name: "Utkur Aref",
      designation: "CEO",
      company: "Payment Terminal Venture - PTV",
      image: utkur,
    },
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Ayman proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Ayman does.",
      name: "Chris Brown",
      designation: "CTO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Restaurant",
      description:
        "A dynamic restaurant website showcasing special offers and main dishes, with features for table reservations and custom menu creation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://github.com/aymansulta/Capstone",
    },
    {
      name: "To-Do List",
      description:
        "A sleek and efficient todo list application designed to help users manage their tasks and stay organized.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "json-server",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/aymansulta/to-do_list",
    },
    {
      name: "Juice Shop",
      description:
        "A vibrant juice shop website highlighting a variety of fresh juices, complete with an easy-to-navigate product catalog and online ordering functionality.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: orange,
      source_code_link: "https://github.com/aymansulta/Orange-fruits",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };