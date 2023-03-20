import { FaGraduationCap, FaHistory } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { GoProject } from "react-icons/go";
export const resumeData = [
  {
    header: "Education",
    icon: <FaGraduationCap />,
    title: [
      {
        headerDescription:
          "Full Stack Web Development at DCI Digital Career Institute gGmbH",
        detail:
          "Accomplishing a one-year-full-time training, covering Frontend and Backend Completing multiple practical projects to practice programming skills Taking German lessons as part of the course",
        date: "2021 till now",
      },
      {
        headerDescription:
          "Master's degree Anglophone Modernities in Literartur and   Culture",
        detail: "University of Potdam ",
        date: "2018 till now",
      },
      {
        headerDescription: "Bachelor's degree in English Literature",
        detail: "Damascus University",
        date: "2005 to 2010",
      },
    ],
  },

  {
    header: "Work History",
    icon: <FaHistory />,
    title: [
      {
        headerDescription: "Salesman in Kamps Bäckerei (Germany)",
        date: "2020 till now",
      },
      {
        headerDescription: "Coordinator in Saudi Embassy (Switzerland)",
        date: "2019 to 2020",
      },
      {
        headerDescription: "Supervisor at “Fannat Company“ (Syria)",
        date: "2010 to 2014",
      },
      {
        headerDescription: "Customer Service “Kdmous Company“ (Syria)",
        date: "2007 to 2010",
      },
    ],
  },

  {
    header: "Programming Skills",
    icon: <GiLaptop />,
    title: [
      {
        headerDescription: "HTML",
      },
      {
        headerDescription: "CSS",
      },
      {
        headerDescription: "Sass",
      },
      {
        headerDescription: "JavaScript",
      },
      {
        headerDescription: "React",
      },
      {
        headerDescription: "Node js",
      },
      {
        headerDescription: "MongoDB",
      },
      {
        headerDescription: "Mongoose",
      },
      {
        headerDescription: "Express Js",
      },
    ],
  },

  {
    header: "Projects",
    icon: <GoProject />,
    title: [
      {
        headerDescription: "Netfilx Clone",
        detail:
          "https://netflix-clone-react-proj-91d29.web.app/ \n Creating a Netflix clone project to mimic Netflix website with login logout authentication Technologies used: HTML, CSS, JavsScript, React, Api, Firebase",
      },
      {
        headerDescription: "Covid-19 Tracker ",
        detail:
          "https://covid-19-traker-react-app-git-main-altinawiwaseem.vercel.app/ \n Creating App to track Covid-19 cases around the world spotting cases on the map and give daily and total deaths, recovers and cases statistics as well as the ability to search certain country Technologies used: HTML, CSS, JavsScript, React, Api, Leafletjs-map ,Chart.js, React-chartjs-2, Vercel",
      },
    ],
  },
];

export const aboutMe = `Hello! I'm Waseem, and I fell in love with programming when I discovered its power to create innovative solutions. I specialize in the MERN stack, including MongoDB, Express.js, React.js, and Node.js, as well as classic languages like JavaScript With a strong foundation in HTML and CSS.\n My passion lies in building new web technologies, developing applications, and creating products in areas related to the cloud. Whenever possible, I also apply my skills in developing products using modern JavaScript libraries and frameworks such as React.js.\n If you'd like to learn more about my skills and experience, please feel free to get in touch with me.`;
