import { v4 as uuid } from "uuid";
import sui from "../images/sui.png";
import sfashion from "../images/sfashion.png";
import slack from "../images/slack.png";
import streamplus from "../images/streamplus.png";
import buzzepic from "../images/buzzepic.png";
export const projectsData = [
  {
    id: uuid(),
    title: "BuzzEpic",
    about:
      "BuzzEppic is that one app all you need. Share quotes, thoughts, Epic stories. Get connected to the world of crazy Bubbies. ",
    tags: [
      "reactjs",
      "redux-toolkit",
      "react-router-dom",
      "tailwind",
      "material-UI",
    ],
    demo: "https://buzzepic.netlify.app/",
    github: "https://github.com/swethaogeti/buzzepic",
    image: buzzepic,
  },
  {
    id: uuid(),
    title: "Streamplus  ",
    about:
      "Streamplus is a video Streaming Library with number of TV episodes and movies. Watch full seasons of exclusive series, classic favorites, hit movies, current. ",
    tags: ["reactJs", "react-router-dom", "css", "context-API"],
    demo: "https://streamplus.netlify.app/",
    github: "https://github.com/swethaogeti/stream-plus/tree/development",
    image: streamplus,
  },
  {
    id: uuid(),
    title: "S-Fashion",
    about:
      "S-Fashion is online women fashion Hub. Get latest fashion trends with exclusive offers and deals. All you need is S-fashion because 'Style is a way to say who you are without having to speak. '  ",
    tags: ["reactJs", "react-router-dom", "css", "context-API"],
    demo: "https://s-fashion.netlify.app/",
    github: "https://github.com/swethaogeti/s-fashion-react",
    image: sfashion,
  },
  {
    id: uuid(),
    title: "Slack-clone",
    about:
      "Slack is a messaging app for business that connects people to the information they need. By bringing people together to work as one unified team, Slack transforms the way organizations communicate.",
    tags: [
      "reactJs",
      "redux-toolkit",
      "react-router-dom",
      "Styled-components",
      "firebase",
    ],
    demo: "https://slack-clone-c6032.web.app/",
    github: "https://github.com/swethaogeti/slack-clone",
    image: slack,
  },
  {
    id: uuid(),
    title: "Swetha-UI",
    about:
      "Swetha-UI is custom CSS Component Library.Integrated with predefined class styles for various componets. Build your next app faster using Swetha-UI.",
    tags: ["HTML", "CSS"],
    demo: "https://swethaui-component-library.netlify.app/",
    github: "https://github.com/swethaogeti/swetha-UI",
    image: sui,
  },
];
