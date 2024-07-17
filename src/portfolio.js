/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tanay Pai",
  description: "",
  og: {
    title: "Tanay Pai",
    type: "website",
    url: "http://tanaypai.live/",
  },
};

//Home Page
const greeting = {
  title: "Tanay Pai",
  logo_name: "Tanay Pai",
  nickname: "tanaypai",
  subTitle: "Software Engineering Graduate Intern at Dell Technologies",
  resumeLink:
    "https://drive.google.com/file/d/1pE0Mwgy4diOOr8MRrPlMXe8NrGde_Xwf/view?usp=sharing",
  portfolio_repository: "https://github.com/tanaypai/masterPortfolio",
  githubProfile: "https://github.com/tanaypai",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/tanaypai",
  // linkedin: "https://www.linkedin.com/in/tanaypai/",
  // gmail: "tanayvpai@gmail.com",

  {
    name: "Github",
    link: "https://github.com/tanaypai",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tanaypai/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:tanayvpai@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "• Use Java and Spring Boot to build RESTful backend services that connect to databases like Postgres with JDBC. Expose APIs for the frontend.",
        "• Build interactive user interfaces with React and libraries like Leaflet. Use JavaScript, HTML, and CSS for frontend code. ",
        "• Leveraging disparate database technologies like Redis (key-value store) and TigerGraph (graph database) to build efficient solutions.",
        "• Implement continuous integration with tools like Bamboo and deploy the entire application to OpenShift with Docker containers using DevOps practices.",
        "• Apply Agile methodologies like Scrum and DevOps practices with CI/CD pipelines to develop, test, deploy, and monitor the application. Use tools like Jira, Bamboo, SonarQube for project management and quality assurance.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "logos:dotnet",
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "logos:kafka",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "TigerGraph",
          imageSrc: "tigergraph_logo.png",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "OpenShift",
          fontAwesomeClassname: "logos:openshift",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Bamboo",
          fontAwesomeClassname: "logos:bamboo",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Octopus Deploy",
          fontAwesomeClassname: "logos:octopus-deploy",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Coverity",
          fontAwesomeClassname: "logos:coverity",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "SonarQube",
          fontAwesomeClassname: "logos:sonarqube",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Leaflet",
          fontAwesomeClassname: "simple-icons:leaflet",
          style: {
            color: "#bae568",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: {
            color: "#f17c1c",
          },
        },
        {
          skillName: "JUnit",
          fontAwesomeClassname: "simple-icons:junit5",
          style: {
            color: "#04a45c",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#a53b4e",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            color: "#04b404",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#fc5b19",
          },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#5cec04",
          },
        },
      ],
    },
    {
      title: "Programming Languages",
      fileName: "ProgrammerImg",
      skills: [
        "• I have extensively used Java, Python, and JavaScript on projects. I have experience coding in Java for over five years, Python for over three years, and JavaScript for two years.",
        "• I have migrated code from C# and C++ codebases and am familiar with the syntax and various features of both languages.",
        "• I have had to use C, R, MATLAB, and Verilog as a part of coursework and labs during my undergraduate and graduate degrees.",
        "• I understand the fundamentals of SQL and have used Postgres, MySQL, and Microsoft SQL Server in projects at Honeywell.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "devicon:c",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "devicon:matlab",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Verilog",
          fontAwesomeClassname: "vscode-icons:file-type-light-systemverilog",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "PostgresSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Microsoft SQL Server",
          fontAwesomeClassname: "devicon-plain:microsoftsqlserver-wordmark",
          style: {
            color: "#e6283b",
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/tanaypai/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/tanaypai",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Arizona State University",
      subtitle: "Master of Science in Computer Science",
      logo_path: "asu_logo.png",
      alt_name: "ASU",
      duration: "Expected May 2025",
      gpa: "4.00/4.00",
      descriptions: [
        "Coursework (Grades - 4.00 GPA Scale):",
        "CSE 551: Foundations of Algorithms (A - 4.00)",
        "CSE 575: Statistical Machine Learning (A - 4.00)",
        "CSE 520: Computer Architecture II (A+ - 4.33)",
        "CSE 340: Principles of Programming Languages (Prerequisite Course)",
        "CSE 463: Introduction to Human Computer Interaction (A+ - 4.33)",
        "CSE 536: Advanced Operating Systems (A+ - 4.33)",
        "CSE 578: Data Visualization (A+ - 4.33)",
        "CSE 310: Data Structures and Algorithms (Audit)",
      ],
      website_link: "https://www.asu.edu/",
      transcripts_link:
        "https://drive.google.com/file/d/1dR2tZcoE-ExgWvq8H6UD7f0XSAtEjkUD/view?usp=sharing",
    },
    {
      title: "Manipal Institute of Technology",
      subtitle:
        "Bachelor of Technology in Electronics and Communication Engineering",
      logo_path: "manipal_logo.png",
      alt_name: "MIT, Manipal",
      duration: "2018 - 2022",
      gpa: "8.60/10.00",
      descriptions: [
        "Relevant Coursework (Grades - 10.0 GPA Scale):",
        "ECE 4070: Data Structures and Algorithms (A - 9.0)",
        "ECE 4080: Object Oriented Programming Using C++ (A+ - 10.0)",
        "ECE 4081: Operating Systems for Advanced Processors (A - 9.0)",
        "CSE 4305: Principles of Soft Computing (A - 9.0)",
        "CSE 4307: Programming in C# (A - 9.0)",
        "CRA 4060: Introduction to Data Science (A+ - 10.0)",
        "CRA 4059: Data Scientists' Toolbox and R Programming (A+ - 10.0)",
        "CRA 4061: Data Science Part - II (A - 9.0)",
        "CRA 4062: Advanced Data Science Part - III (A+ - 10.0)",
        "ICT 4305: Networking with TCP/IP (B - 8.0)",
        "ECE 2151: Computer Organization and Architecture (B - 8.0)",
        "CSE 1051: Problem Solving Using Computers (A - 9.0)",
      ],
      website_link: "https://manipal.edu",
      transcripts_link:
        "https://drive.google.com/file/d/1PBukomVx6E0FQ8yd_buIVZgjS0eM7pgo/view?usp=sharing",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Supervised Machine Learning: Regression and Classification ",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/YTB6P84E7NRG",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Principles of Programming Languages",
      subtitle: "- Ayan Banerjee",
      logo_path: "asu_logo.png",
      certificate_link:
        "https://api.badgr.io/public/assertions/4Fi902W9SVuc7Wcx4f_QSA",
      alt_name: "asu",
      color_code: "#a40444",
    },
    {
      title: "Data Science Specialization",
      subtitle: "- Jeff Leek, Roger Peng, and Brian Caffo",
      logo_path: "jhu_logo.jpeg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/TUGYWDTEGTUA",
      alt_name: "jhu",
      color_code: "#042c73",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "- Charles Russell Severance",
      logo_path: "um_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/B7X8BGRKDLJF",
      alt_name: "um",
      color_code: "#00274c",
    },
    {
      title: "Python Data Structures",
      subtitle: "- Charles Russell Severance",
      logo_path: "um_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/AR2Q5SBQV7WA",
      alt_name: "um",
      color_code: "#00274c",
    },
    {
      title: "Python for Data Science, AI & Development",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/4V35P7VYYYCQ",
      alt_name: "ibm",
      color_code: "#FFFFFF",
    },
    {
      title: "Introduction to Cloud Development with HTML, CSS, JavaScript",
      subtitle: "- Upkar Lidder, Rav Ahuja, and Michelle Saltoun",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/FT7MAHPXWUVC",
      alt_name: "ibm",
      color_code: "#FFFFFF",
    },
    {
      title: "Docker - Introducing Docker Essentials, Containers, and more",
      subtitle: "- David Joseph Katz",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy.com/certificate/UC-961e373a-362c-486f-a6b7-6482ee72b219",
      alt_name: "udemy",
      color_code: "#000000",
    },
    {
      title: "The Complete React Js & Redux Course - Build Modern Web Apps",
      subtitle: "- Rayan Slim, Rob Percival, Jad Slim",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy.com/certificate/UC-030c9881-9510-423c-9840-d82388f6290e",
      alt_name: "udemy",
      color_code: "#000000",
    },
    {
      title: "NestJS Zero to Hero - Modern TypeScript Back-end Development",
      subtitle: "- Ariel Weinberger",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy.com/certificate/UC-da0021ef-e8bb-42ee-8b5b-8e6c37e88660",
      alt_name: "udemy",
      color_code: "#000000",
    },
    {
      title: "C# Basics for Beginners: Learn C# Fundamentals by Coding",
      subtitle: "- Mosh Hamedani",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy.com/certificate/UC-df50a0c2-4ff5-40d6-9e60-10d633817500/",
      alt_name: "udemy",
      color_code: "#000000",
    },
    {
      title: "Complete Katalon Studio 2020 for Web + API Test Automation",
      subtitle: "- Peter Jenkins",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy.com/certificate/UC-66eb9484-19fc-434d-a534-5cca5b570ef1",
      alt_name: "udemy",
      color_code: "#000000",
    },
    {
      title: "Agile Transformation and Scaled Agile",
      subtitle: "- ICAN Consultancy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy.com/certificate/UC-fed6d4ef-08d6-4727-a38c-297f7d6c3652",
      alt_name: "udemy",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteering",
  description: "",
  // todo: Add work summary
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work and Internships",
      work: true,
      experiences: [
        {
          title: "Software Engineering Intern",
          line_height: 300,
          company: "Dell",
          company_url: "https://dell.com/",
          logo_path: "dell_logo.png",
          duration: "May 2024 - Present",
          location: "Austin, TX",
          description:
            "" +
            "Delivered an initiative to modernize commodity datasets by importing them into TigerGraph and building a UI for easy retrieval and editing, significantly increasing productivity.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer I",
          line_height: 300,
          company: "Honeywell",
          company_url: "https://honeywell.com/",
          logo_path: "honeywell_logo.png",
          duration: "October 2022 - June 2023",
          location: "Hyderabad, Telangana, India",
          description:
            "" +
            "Successfully led a multifaceted project at Honeywell, encompassing the transformation of the UI/UX for the BA Dashboard website, resulting in a significant enhancement of flight tracking accuracy to over 95% in various scenarios. Additionally, orchestrated the migration of extensive legacy applications from .NET C# to Java Spring Boot, streamlined API development and testing processes through the introduction of Swagger and Portman CLI, generating substantial annual cost savings exceeding $10,000. Furthermore, provided leadership for a team of 9 members in a hackathon initiative, delivering a cutting-edge 3D flight tracking feature using MapBox GL JS and introduced an engaging AR-powered user onboarding experience.",
          color: "#0879bf",
        },
        {
          title: "Software Engineering Intern",
          line_height: 300,
          company: "Honeywell",
          company_url: "https://honeywell.com/",
          logo_path: "honeywell_logo.png",
          duration: "January 2022 - July 2022",
          location: "Hyderabad, Telangana, India",
          description:
            "Accomplished a range of critical tasks in software development, including the creation of a Java Spring Boot application that harnessed real-time flight data from Kafka for geofence monitoring in conjunction with PostGIS. This application not only checked flights against predefined geofences but also incorporated a user notification system based on individual preferences. Self-sufficiently managed all aspects of the project, from inception and coding to testing and deployment." +
            "Furthermore, streamlined functional testing procedures by automating user interactions on dashboard pages through Python scripts utilizing the Selenium WebDriver library. This testing effort involved simulating over 100 concurrent users with Locust and analyzing page load times." +
            "Finally, performed a complex transformation task by translating more than 2,000 lines of legacy C++ code into a Java Spring Boot Rest API. By optimizing the system to cache database records in memory and parallelizing SQL queries, achieved a remarkable tenfold improvement in response time.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteering",
      experiences: [
        {
          title: "Volunteer",
          line_height: 200,
          company: "Desert CodeSprouts",
          company_url:
            "https://scai.engineering.asu.edu/desert-codesprouts-workshop/",
          logo_path: "codesprouts_logo.png",
          duration: "March 2024 - Present",
          location: "Tempe, AZ",
          description:
            "Desert CodeSprouts is a workshop organized by the School of Computing and Augmented Intelligence that aims to encourage female participation in computer science by increasing interest and exposure to various topics in the field. Demonstrated the application of HTML and CSS in developing websites by creating presentations and guided participants in creating their own websites.",
          color: "#4285F4",
        },
        {
          title: "Volunteer",
          line_height: 180,
          company: "ASU International Students and Scholars Center",
          company_url: "https://issc.asu.edu/",
          logo_path: "issc_logo.jpg",
          duration: "January 2024 - May 2024",
          location: "Tempe, AZ",
          description:
            "Organized and volunteered in various events hosted by the International Students and Scholars Center at ASU throughout the Spring 2024 semester.",
          color: "#4285F4",
        },
        {
          title: "Volunteer",
          line_height: 0,
          company: "Rotaract Club of Manipal",
          company_url: "https://www.instagram.com/rotaractclubmanipal/",
          logo_path: "rotaract_logo.jpeg",
          duration: "August 2019 - May 2022",
          location: "Manipal, Karnataka, India",
          description:
            "Dedicated more than 50 hours to impactful community service, orchestrating and leading initiatives that included organizing blood donation camps, clothing donation drives, successful fundraisers, and compassionate visits to nursing homes, orphanages, and rehabilitation centers.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "",
  // todo: add description
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    // "I have worked on and published a few research papers and publications of my own.",
    "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tanay_avi.png",
    description:
      "If you have any questions or would like to reach out, please send a mail to ",
    link: "mailto:tanayvpai@gmail.com",
    mail: "tanayvpai@gmail.com",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Location",
    subtitle: "Tempe, AZ",
    // locality: "Kanodar",
    // country: "IN",
    // region: "Gujarat",
    // postalCode: "385520",
    // streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/C98euRPjK5rHfE4D8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
