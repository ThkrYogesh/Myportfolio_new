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
  hackathon,
  specbits,
  chandigarh,
  bookstoreImage,
  chatAppImage,
  calculator,
  threejs,
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
    title: "Frontend Developer",
    icon: creator,
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
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Hackathon Participant",
    icon: hackathon,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Participated in multiple hackathons focusing on MERN stack applications.",
      "Secured 2nd position in an IoT-based hackathon project.",
      "Worked with cross-functional teams to deliver solutions under tight deadlines.",
      "Developed IoT-integrated web applications using MERN stack technologies.",
    ],
  },
  {
    title: "Full-stack Developer Intern",
    company_name: "SpecBits",
    icon: specbits,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Worked as a full-stack intern, developing web applications using the MERN stack.",
      "Collaborated with senior developers on client projects and learned industry-standard best practices.",
      "Optimized applications for maximum performance and scalability.",
      "Integrated REST APIs and ensured seamless backend functionality.",
    ],
  },
  {
    title: "BCA Student",
    company_name: "Chandigarh University",
    icon: chandigarh,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Studied core subjects including Data Structures, Algorithms, and Web Development.",
      "Built projects such as the XYZ Books Online Bookstore application.",
      "Engaged in practical applications of IoT and web development technologies.",
    ],
  },
];

const achievements = [
  {
    achievement:
      "Secured 2nd place in a national-level IoT-based hackathon for creating an innovative MERN stack application.",
    date: "May 2023",
  },
  {
    achievement:
      "Successfully completed a full-stack internship at SpecBits, developing scalable web applications using the MERN stack.",
    date: "July 2023",
  },
  {
    achievement:
      "Developed multiple projects including a fully functional online bookstore and a real-time chat application as part of coursework and internships.",
    date: "2022 - Present",
  },
];

const projects = [
  {
    name: "Books Online Bookstore",
    description:
      "A full-fledged online bookstore platform that allows users to browse, search, and purchase books. Features include a shopping cart, payment gateway integration, and an admin panel for managing inventory.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: bookstoreImage,
    source_code_link: "https://github.com/ThkrYogesh/bookStoreApp",
  },
  {
    name: "Chat Application",
    description:
      "A chat application built using the MERN stack, allowing users to send real-time messages. Features include private chat rooms, user authentication, and message storage using MongoDB.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: chatAppImage,
    source_code_link: "https://github.com/ThkrYogesh/Calculator.Js",
  },
  {
    name: "Dynamic Calculator",
    description:
      "A basic dynamic functional calculator that performs arithmetic operations like addition, subtraction, multiplication, and division which makes the user to use it with a good. Built using vanilla JavaScript, HTML, and CSS.",
    tags: [
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/your-calculator-app-link",
  },
];
export { services, technologies, experiences, achievements, projects };
