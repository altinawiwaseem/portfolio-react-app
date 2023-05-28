import { FaGraduationCap, FaHistory } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import mernStatic from "../src/assets/img/mern1.png";
import mernGif from "../src/assets/img/mern+.gif";
import covidStatic from "../src/assets/img/covid191.png";
import covidGif from "../src/assets/img/covid19.gif";
import messageboardStatic from "../src/assets/img/messageboard.png";
import messageboardGif from "../src/assets/img/messageboard.gif";
import netflixStatic from "../src/assets/img/netflix.png";
import netflixGif from "../src/assets/img/netflix.gif";
import portfolioStatic from "../src/assets/img/portfolio.png";
import portfolioGif from "../src/assets/img/portfolio.gif";
import cartGif from "../src/assets/img/shoppingCart.gif";
import cartStatic from "../src/assets/img/ShoppingCart.png";
import newsGif from "../src/assets/img/news.gif";
import newsStatic from "../src/assets/img/news.png";

export const resumeData = [
  {
    header: "Education",
    icon: <FaGraduationCap />,
    title: [
      {
        headerDescription:
          "Full Stack Web Development at DCI Digital Career Institute gGmbH",
        detail:
          "Accomplishing a one-year-full-time training, covering Frontend and Backend. Completing multiple practical projects to practice programming skills, and taking German lessons as part of the course",
        date: "2021 to 2022",
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
        headerDescription:
          "Laravel Developer and API Integration internship at “e-Commeleon“",
        date: "01/2023 02/2023",
      },
      {
        headerDescription: "Salesman at “Kamps Bäckerei“",
        date: "2020 till now",
      },
      {
        headerDescription: "Coordinator at “Saudi Arabia Embassy“",
        date: "2019 to 2020",
      },
      {
        headerDescription:
          "Provide technical support and maintain computer systems (IT) at “Fannat Company“",
        date: "2010 to 2015",
      },
      {
        headerDescription: "Customer Service at “Kadmous Company“",
        date: "2007 to 2010",
      },
    ],
  },

  {
    header: "Programming Skills",
    icon: <GiLaptop />,
    title: [
      {
        skill: "HTML",
        level: 5,
      },
      {
        skill: "CSS",
        level: 4.9,
      },
      {
        skill: "Sass",
        level: 4.5,
      },
      {
        skill: "JavaScript",
        level: 5.5,
      },
      {
        skill: "React",
        level: 5.4,
      },
      {
        skill: "Node js",
        level: 4.9,
      },
      {
        skill: "MongoDB",
        level: 4.5,
      },
      {
        skill: "Mongoose",
        level: 4.7,
      },
      {
        skill: "Express Js",
        level: 4.4,
      },
      {
        skill: "PHP",
        level: 4.2,
      },
      {
        skill: "Laravel",
        level: 4,
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "MERN+",
    github: "https://github.com/altinawiwaseem/swm-final-project",
    link: "https://mernplus.onrender.com/",
    detail:
      "Quiz App is a full-stack web application that allows users to take quizzes, solve code challenges, view results, and track progress",
    imgStatic: mernStatic,
    imgGif: mernGif,
  },
  {
    id: 2,
    title: "News Aggregator",
    github: "https://github.com/altinawiwaseem/news-aggregator",
    link: "https://github.com/altinawiwaseem/news-aggregator",
    detail:
      "web application that aggregates news articles from three API sources, allows users to search for news  using various methods, save their search preferences.",
    imgStatic: newsStatic,
    imgGif: newsGif,
  },
  {
    id: 3,
    title: "Covid-19 Tracker ",
    github: "https://github.com/altinawiwaseem/COVID-19-Traker-react-app",
    link: "https://covid-19-traker-react-6mpkbu00r-altinawiwaseem.vercel.app/",
    detail:
      "App to track Covid-19 cases around the world spotting cases on the map and give daily and total deaths, recovers and cases.",
    imgStatic: covidStatic,
    imgGif: covidGif,
  },
  {
    id: 4,
    title: "Message Board",
    github: "https://github.com/altinawiwaseem/message-Board",
    link: "https://github.com/altinawiwaseem/message-Board",
    detail:
      "Fullstack application which serves as an online messageboard. include a full REST API, with user data stored in a MongoDB server.",
    imgStatic: messageboardStatic,
    imgGif: messageboardGif,
  },
  {
    id: 5,
    title: "PHP Shopping Cart ",
    github: "https://github.com/altinawiwaseem/php-shopping-cart",
    link: "https://github.com/altinawiwaseem/php-shopping-cart",
    detail: "PHP shopping cart using relational database mysql",
    imgStatic: cartStatic,
    imgGif: cartGif,
  },
  {
    id: 6,
    title: "Netflix Clone",
    github: "https://github.com/altinawiwaseem/NETFLIX_CLONE",
    link: "https://netflix-clone-react-proj-91d29.web.app/",
    detail: "Netflix clone project to mimic Netflix website",
    imgStatic: netflixStatic,
    imgGif: netflixGif,
  },
  {
    id: 7,
    title: "Portfolio ",
    github: "https://github.com/altinawiwaseem/portfolio-v1",
    link: "https://altinawiwaseem.github.io/portfolio-v1/",
    detail: "A personal portfolio App using HTML & SASS",
    imgStatic: portfolioStatic,
    imgGif: portfolioGif,
  },
];

export const aboutMe = `Hello! I'm Waseem, and I fell in love with programming when I discovered its power to create innovative solutions. I specialize in the MERN stack, including MongoDB, Express.js, React.js, and Node.js, as well as classic languages like JavaScript With a strong foundation in HTML and CSS.\n My passion lies in building new web technologies, developing applications, and creating products in areas related to the cloud. Whenever possible, I also apply my skills in developing products using modern JavaScript libraries and frameworks such as React.js.\n If you'd like to learn more about my skills and experience, please feel free to get in touch with me.`;
