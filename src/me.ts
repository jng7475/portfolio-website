import {
  FaDocker,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaPager,
  FaReact,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiC,
  SiCplusplus,
  SiFirebase,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript,
} from "react-icons/si";

import { IMe } from "./me.interface";

export const me = {
  name: 'Trung "Jason" Nguyen',
  subtitle: "Computer Science Student at UT Dallas",
  tagline:
    "",
  bigHeading: {
    black: "Hello",
    blue: "There",
  },
  about:
    "I am a senior studying Computer Science at The University of Texas at Dallas",
  location: "Dallas, TX",
  image: "/src/images/JN.jpg",
  education: [
    {
      degree: "Bachelors of Science",
      major: "Computer Science",
      school: "The University of Texas at Dallas",
      graduation: "December 2024",
      courseworks: ["Courseworks: Data Structures and Algorithmic Analysis, Database Systems, Artificial Intelligence, Machine Learning, Advanced Operating Systems, Operating Systems, C/C++ Programming in a UNIX Environment"],
    },
  ],
  experience: [
    {
      company: "Wayfair",
      location: "Austin, TX, USA",
      position: "Software Engineer Intern",
      duration: "June 2024 - August 2024",
      bullets: [
        "Worked with the Inbound Execution team to build transportation management tools for Wayfair’s freight forwarding service serving 11000+ customers",
        "Implemented a new exception type with Python, PostgreSQL, and SQLAlchemy, improving the accuracy of milestone updates for 36000+ containers annually by 10%",
        "Refactored a strategy class for fuel cost calculation and initiated a new data handling method with Python, resulting in an increase of 50% in maintainability and 80% in reusability",
        "Built a full-stack feature for retrieving and updating shipments’ canal transit information with GraphQL, Python, ReactJS, and TypeScript, averaging 3300 user interactions per day",
        "Pioneered new UAT and integration testing strategies for a new service, ensuring 100% accuracy and consistency with data from business teams across all tests and enabling a successful deployment"
      ]
    },
    {
      company: "UT Dallas Jonsson School of Engineering and Computer Science",
      location: "Richardson, TX, USA",
      position: "Software Developer",
      duration: "May 2023 - May 2024",
      bullets: [
        "Developed and maintained the Engineering School and 14 department websites, utilizing HTML, CSS, JavaScript",
        "Created 40+ news pages, announcement pages, and email templates, ensuring seamless integration with the websites",
        "Initiated 5 reusable components and 5 custom CSS classes used in the migration of a website redesign which improved the efficiency of the development process by 30%",
        "Designed a responsive menu system for the new Undergraduate Education Office website, allowing fluid navigation between 20 subpages and improving user accessibility"
      ]
    },
    {
      company: "Enouvo",
      location: "Da Nang, Vietnam",
      position: "Software Engineer Intern",
      duration: "April 2022 - June 2022",
      bullets: [
        "Developed features for 3 web applications (user, admin, and CMS) of a marketplace platform for early childhood education in Australia, receiving 1 million+ visits annually",
        "Implemented a high-impact call-to-action button system in the user website with ReactJS, improving the efficiency of user interaction with childcare centers comparison tools by 75%",
        "Coordinated with back-end and design teams to improve 15+ existing features using ReactJS, JavaScript, NextJS"
      ]
    }
  ],
  projects: [
    {
      name: "CarAssit",
      description:
        "A Virtual Assistant mobile app that enables information support and car-to-car communication",
      contribution:
        "I trained a large language model (LLM) using LangChain and FAISS on custom car manuals, achieving 95% accuracy. I also built a back-end server with Python FastAPI to facilitate the communication between the mobile app and the ML model",
      technologies: [
        "Python",
        "FastAPI", 
        "LangChain", 
        "FAISS", 
        "Firebase"
      ],
      links: [],
      image: "",
    },
  ],
  skills: [
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "Kafka",
      icon: SiApachekafka,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "Java",
      icon: FaJava,
    },
    {
      name: "C++",
      icon: SiCplusplus,
    },
    {
      name: "Firebase",
      icon: SiFirebase,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },

    {
      name: "Google Cloud",
      icon: SiGooglecloud,
    },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "https://drive.google.com/file/d/1p6yLHoEZlWRexw0ALByqFVpJsOlBQC0c/view?usp=sharing",
      hover: {
        bg: ["red.500", "red.600"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/jng7475",
      hover: {
        bg: ["gray.900", "gray.600"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/trungnt281/",
      hover: {
        bg: ["blue.400", "blue.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "trungnt281@gmail.com",
    phone: "(+1) 469-924-1564",
  },
} as IMe;
