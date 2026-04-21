export const portfolioData = {
  profile: {
    name: "Abdelaaziz Khouda",
    title: "Full-Stack Software Engineer",
    tagline:
      "Building scalable and high-performance web applications using the MERN stack.",
    bio: "Passionate about building scalable and user-centric applications. I transform ideas into clean, efficient, and production-ready solutions using modern technologies and best practices.",
    avatar: "/images/profile-pic.png",
    email: "abdelkhouda055@gmail.com",
    github: "https://github.com/abdelaaziz11",
    linkedin: "https://www.linkedin.com/in/abdel-khouda-502b03253/",
    cvUrl:
      "https://drive.google.com/file/d/1cuhCABGzhUvi3fXPWgNRMk4diijPCRsy/view?usp=sharing",
  },

  about: {
    text: "At 21 years old, I am a Full-Stack Software Engineer and graduate of ALX Africa’s rigorous Software Engineering program. I specialize in front-end development, with strong expertise in HTML, CSS, JavaScript, and advanced proficiency in React.js. I have built dynamic, responsive, and user-centered web applications that prioritize performance, scalability, and clean architecture. I completed a Full-Stack Internship at JobInTech in collaboration with YNOV Campus, where I worked on real-world applications using React for the front end, Express.js for the back end, and MongoDB for the database layer. This experience strengthened my understanding of full-stack development workflows, API design, agile teamwork, and delivering production-ready applications. Driven by curiosity and continuous learning, I stay up to date with emerging technologies and best practices. I thrive in collaborative environments where innovation, autonomy, and problem-solving are essential. My goal is to leverage my technical expertise and passion for technology to build impactful, efficient, and scalable digital solutions while continuing to grow as a versatile full-stack engineer.",
    highlights: [
      "Full-stack software engineer with strong MERN stack expertise",
      "Focused on clean architecture, performance, and scalability",
      "Passionate about continuous learning and modern web technologies",
      "Available for internships, freelance, and full-time opportunities",
    ],
  },

  experience: [
    {
      id: 1,
      company: "Jobintech - YNOV Campus",
      role: "Full-stack Developer",
      duration: "Sep 2023 – Feb 2026",
      description:
        "• Full-Stack Development (MERN): Design and development of modern web applications using MongoDB and MySQL for database management (non-relational and relational), Express.js and Node.js for building robust APIs, and React.js for dynamic user interfaces. • Architecture & Security: Implementation of MVC architectures and securing access through JWT authentication and password hashing (Bcrypt). • Quality & Testing: Implementation of unit and integration testing using Jest and Supertest to ensure code reliability and stability. • DevOps & Workflow: Use of Docker for service containerization and version control management with Git/GitHub in an Agile (Scrum) environment.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Docker",
        "Express.js",
        "JWT",
        "Jest",
        "Bcrypt",
        "MySQL",
      ],
    },
    {
      id: 2,
      company: "ALX Africa",
      role: "Full-Stack Software Engineer",
      duration: "Aug 2023 – Oct 2024",
      description:
        "The program lasted 12 months, with around 80 hours of work each week. In terms of technical skills, I am proficient in Shell scripting, which allows me to automate tasks and manage systems efficiently. Additionally, my expertise in the C language enables me to develop robust and efficient programs. Moreover, I have a strong command of Python and Flask, utilizing it for scripting, web development, and data analysis purposes. as a fullStack software engineer I'm Specialized in front-end technologies, mastering HTML, CSS, and JavaScript. Developed advanced proficiency in React JS, building dynamic, responsive, and user-friendly web applications.",
      technologies: [
        "React",
        "Redux",
        "Sass",
        "Jest",
        "Webpack",
        "Shell",
        "C",
        "Python",
        "Flask",
        "Git",
        "GitHub",
        "CI/CD",
        "Agile",
        "JavaScript",
        "HTML",
        "CSS",
        "MYSQL",
        "Docker",
        "Node.js",
        "Postman",
        "ES6+",
        "OOP",
        "REST APIs",
        "Linux",
        "Ubuntu",
        "unit testing",
      ],
    },
  ],

  education: [
    {
      id: 1,
      school: "Université Ibn Zohr",
      degree: "Bachelor's in Science Mathematics and Physics",
      years: "Present",
      description:
        "SMP - Science Mathematics and Physics, GEER - Génie Energétique et Energies Renouvelables",
    },
    {
      id: 2,
      school: "Maroc Ynov Campus",
      degree: "Full-Stack Development",
      years: "Sep 2025 – Feb 2026",
      description:
        "Intensive high-level training focused on modern JavaScript technologies and full-stack best practices.",
    },
  ],

  skills: {
    Frontend: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Sass", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 90 },
      { name: "Redux", level: 80 },
      { name: "Bootstrap", level: 80 },
      { name: "Tailwind", level: 80 },
      { name: "Context API", level: 85 },
    ],
    Backend: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth", level: 85 },
    ],
    Databases: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 75 },
      { name: "Supabase", level: 75 },
    ],
    DevOps: [
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Puppet", level: 80 },
      { name: "NGINX", level: 80 },
      { name: "Linux", level: 80 },
      { name: "Ubuntu", level: 80 },
    ],
    Tools: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 88 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 80 },
      { name: "Supertest", level: 75 },
    ],
    Deployment: [
      { name: "Vercel", level: 88 },
      { name: "Netlify", level: 85 },
      { name: "Render", level: 82 },
      { name: "Railway", level: 80 },
    ],
    Languages: [
      { name: "JavaScript", level: 92 },
      { name: "Python", level: 70 },
      { name: "C", level: 65 },
      { name: "Shell", level: 72 },
    ],
  },

  projects: [
    {
      id: "1",
      title: "Orbit",
      shortDescription:
        "A social platform for developers to share progress, ideas, and technical challenges.",
      fullDescription:
        "Orbit is a developer-focused social platform inspired by Twitter, built to help developers connect, share, and grow together. Users can publish posts about their daily coding progress, share bugs and technical challenges, and follow other developers to stay updated with their work. The platform encourages collaboration and knowledge sharing within the developer community through a clean and interactive interface.",
      problem:
        "Developers often lack a dedicated space to share their daily progress, ask for help, and connect with like-minded peers without the noise of general social media platforms.",
      features: [
        "Create, edit, and delete posts",
        "Follow and unfollow developers",
        "Like and comment on posts",
        "Personalized feed based on following",
        "Join communities",
        "User authentication and profiles",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Redux",
        "JWT",
        "Socket.io",
      ],
      architecture:
        "PERN stack application with a React frontend, Node.js/Express backend, PostgreSQL database, and Socket.io for real-time notifications.",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
      githubUrl: "https://github.com/abdelaaziz11/Orbit",
      liveUrl: "https://orbit-production-0fb7.up.railway.app/login",
      featured: true,
    },
    {
      id: "2",
      title: "Freelancer Management System",
      shortDescription:
        "A platform to manage freelance projects, clients, and payments in one place.",
      fullDescription:
        "The Freelancer Management System is a full-stack web application designed to help freelancers efficiently manage their projects, clients, and payments. It allows users to track ongoing work, organize tasks, manage client communication, and monitor income through a centralized dashboard. The platform simplifies daily freelance operations and improves productivity by reducing manual tracking.",
      problem:
        "Freelancers often struggle to manage multiple clients, track project progress, and organize payments using scattered tools, leading to inefficiency and missed opportunities.",
      features: [
        "Create and manage client profiles",
        "Project and task tracking",
        "Dashboard with project status overview",
        "Invoice and payment tracking",
        "Authentication and secure user sessions",
        "Notifications for deadlines and updates",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      architecture:
        "MERN stack architecture with a React frontend, Express.js backend API, and MongoDB database for flexible data management.",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
      githubUrl: "https://github.com/abdelaaziz11/freelancer-fullstack",
      liveUrl: "https://freelancer-management-system.vercel.app",
      featured: true,
    },
    {
      id: "3",
      title: "Statify",
      shortDescription:
        "A platform that simplifies data collection for census and statistical analysis.",
      fullDescription:
        "Statify is a full-stack web application designed to modernize and simplify the process of collecting statistical data. It enables citizens to securely register, log in, and submit their personal and socio-economic information through an intuitive interface. The platform helps organizations gather accurate and structured data efficiently, reducing manual effort and improving decision-making.",
      problem:
        "Traditional data collection methods are slow, costly, and prone to errors, making it difficult for organizations to gather reliable and up-to-date statistical information.",
      features: [
        "User registration and authentication",
        "Secure data submission forms",
        "Data visualization and insights",
        "Role-based access control",
        "Responsive and user-friendly interface",
      ],
      technologies: ["React", "Flask", "SQLite", "JWT"],
      architecture:
        "Client-server architecture with a React frontend, Flask backend API, and SQLite database, secured with JWT authentication.",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      githubUrl: "https://github.com/abdelaaziz11/Statify_Portfolio",
      liveUrl: "https://statify.vercel.app",
      featured: false,
    },
    {
      id: "4",
      title: "TNS Shop",
      shortDescription:
        "A full-stack e-commerce platform built with the MERN stack.",
      fullDescription:
        "TNS Shop is a full-stack e-commerce web application built using the MERN stack, designed to provide a seamless online shopping experience. Users can browse products by categories, view detailed product information, add items to their cart, and place orders with ease. The platform also includes an administrator dashboard that allows efficient management of products, categories, and customer orders.",
      problem:
        "Small businesses often lack affordable and customizable e-commerce solutions, making it difficult to manage products, track orders, and deliver a smooth online shopping experience.",
      features: [
        "Product catalog with categories and search",
        "Product details page with images and descriptions",
        "Add-to-cart and cart management system",
        "Secure user authentication",
        "Order placement and tracking",
        "Admin dashboard for managing products and orders",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      architecture:
        "MERN stack architecture with a React frontend, Express.js/Node.js backend API, and MongoDB database. Authentication handled باستخدام JWT with a RESTful API structure.",
      thumbnail:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      githubUrl: "https://github.com/abdelaaziz11/tnsshop",
      liveUrl: "https://tnsshop.vercel.app/shop",
      featured: false,
    },
    {
      id: "5",
      title: "Barber Appointment",
      shortDescription:
        "A modern web app for booking barber appointments using React and Firebase.",
      fullDescription:
        "Barber Appointment is a modern web application that allows users to easily book and manage barber services online. Built with React and powered by Firebase, the app provides real-time data synchronization and secure authentication. Users can sign up, log in, select services, and reserve time slots with ease. The platform ensures a smooth and responsive experience while simplifying appointment management for both clients and barbers.",
      problem:
        "Traditional barber booking systems are often manual and inefficient, leading to scheduling conflicts and poor customer experience.",
      features: [
        "User authentication with Firebase (signup/login/logout)",
        "Real-time appointment booking and updates",
        "Service selection (haircut, beard, etc.)",
        "Available time slot management",
        "User dashboard with appointment history",
        "Responsive and user-friendly interface",
      ],
      technologies: ["React", "Firebase", "Firestore", "Firebase Auth"],
      architecture:
        "Frontend built with React, connected to Firebase services including Firestore for real-time database and Firebase Authentication for secure user management. The app follows a client-serverless architecture with direct integration between the frontend and Firebase.",
      thumbnail:
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
      githubUrl: "https://github.com/abdelaaziz11/Barber-appointment",
      liveUrl: "https://barber-appointment-frontend.vercel.app",
      featured: true,
    },
  ],

  formations: [
    {
      id: 1,
      name: "AI Career Essentials (AICE)",
      org: "ALX Africa",
      year: "06/2024 – 08/2024",
      skills: ["AI", "leverage AI",
        "develop essential 21st-century skills",
        "AI tools", "productivity", "creativity"],
      icon: "AI",
    },
    {
      id: 2,
      name: "Professional Foundations",
      org: "ALX Africa",
      year: "08/2024 – 10/2024",
      skills: ["Professional Development Skills", "Career Readiness", "Communication", "Problem-Solving", "Time Management"],
      icon: "PS",
    },
    {
      id: 3,
      name: "AI Starter Kit",
      org: "ALX Africa",
      year: "02/2025 – 03/2025",
      skills: ["AI", "AI Tools"],
      icon: "AI",
    },
  ],
};
