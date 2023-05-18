// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import php from "./assets/techstack/php.png";
import laravel from "./assets/techstack/laravel.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Khalil ZAATARI",
  tagline: "I love IT",
  img: profile,
  about: `Je suis Khalil ZAATARI, étudiant en 1ère année 2ITE à ENSA El Jadida, 
  intéressé par le monde d'informatique et future ingénieur.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "2ITE - 1ère année",
    Company: "ENSA - EL Jadida",
    Location: "El Jadida",
    Type: "Full Time",
    Duration: "Sep 2022 - Present",
  },
  {
    Position: "Cycle Prépratoire",
    Company: `ENSA - El Jadida`,
    Location: "El Jadida",
    Type: "Full Time",
    Duration: "Sep 2020 - Jun 2022",
  },
  {
    Position: "Bac Sciences Maths - A",
    Company: `Lycée AlJoulane`,
    Location: "Biougra - Chtouka Ait Baha",
    Type: "Full Time",
    Duration: "Sep 2019 - Jun 2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  php: php,
  laravel: laravel,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Rooms Manager",
    image: projectImage1,
    description: `A project that helps the administration manag the rooms and the computers in each room`,
    techstack: "Laravel / AJAX",
    previewLink: "https://google.com",
    githubLink: "https://github.com/MohamedOuhami/Rooms",
  },
  {
    title: "ENSAJPlanner",
    image: projectImage2,
    description: `Our PFA project that help manage the school, and generate timetables automatically`,
    techstack: "Laravel / Bootstrap / Python",
    previewLink: "https://google.com",
    githubLink: "https://github.com/MohamedOuhami/ENSAJPlanner",
  },
  {
    title: "Library Manager",
    image: projectImage3,
    description: `This is a project for managing a library which includes managin the books, students, teachers and loans`,
    techstack: "Java / Java Swing",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "khalilzaatari1@gmail.com",
  phone: "+212 626295072",
};
