import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import twitter from "../images/twitter.png";
import linkedIn from "../images/linkedin.png";
import { v4 as uuid } from "uuid";
export const SocialLinks = [
  {
    id: uuid(),
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/swetha-ogeti/",
    icon: linkedIn,
  },
  {
    id: uuid(),
    platform: "Twitter",
    link: "https://twitter.com/SwethaOgeti/",
    icon: twitter,
  },
  {
    id: uuid(),
    platform: "Github",
    link: "https://github.com/swethaogeti/",
    icon: github,
  },
  {
    id: uuid(),
    platform: "Instagram",
    link: "https://www.instagram.com/swetha_ogeti/",
    icon: instagram,
  },
];
