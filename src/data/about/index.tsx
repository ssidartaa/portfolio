import UsernameIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import FormationIcon from "@mui/icons-material/School";
import RoleIcon from "@mui/icons-material/Layers";
import LocationIcon from "@mui/icons-material/Home";

import {
  IInfo,
  InfoType,
  IQualifications,
  ISkills,
  QualificationType,
  SkillsType,
} from "./interfaces";

export const info: IInfo = {
  [InfoType.USERNAME]: {
    title: "Sidarta Oliveira",
    icon: <UsernameIcon />,
  },
  [InfoType.GITHUB]: {
    title: "ssidartaa",
    icon: <GitHubIcon />,
  },
  [InfoType.EMAIL]: {
    title: "ssidataaoli@gmail.com",
    icon: <EmailIcon />,
  },
  [InfoType.WHATSAPP]: {
    title: "+5568992571066",
    icon: <WhatsAppIcon />,
  },
  [InfoType.LINKEDIN]: {
    title: "ssidartaa",
    icon: <LinkedInIcon />,
  },
  [InfoType.X_TWITTER]: {
    title: "ssidartaa",
    icon: (
      <div className="flex gap-2 items-center">
        <XIcon />
        <TwitterIcon />
      </div>
    ),
  },
  [InfoType.FORMATION]: {
    title: "Bachelor's Degree in Computer Science",
    icon: <FormationIcon />,
  },
  [InfoType.ROLE]: {
    title: "Software Engineer - Full Stack/GIS Developer",
    icon: <RoleIcon />,
  },
  [InfoType.LOCATION]: {
    title: "Curitiba - Paraná, Brazil",
    icon: <LocationIcon />,
  },
};

export const qualifications: IQualifications<QualificationType>[] = [
  {
    title: QualificationType.EDUCATION,
    data: [
      {
        school: "Kenzie Academy Brasil",
        qualification: "Full Stack Developer",
        years: "Mar 2022 - Mar 2023",
        location: "Cruzeiro do Sul - Acre, Brazil (Remote)",
      },
      {
        school: "Estácio",
        qualification: "Bachelor's Degree in Computer Science",
        years: "Jan 2023 - Today",
        location: "Curitiba - Paraná, Brazil (Remote)",
      },
    ],
  },
  {
    title: QualificationType.EXPERIENCE,
    data: [
      {
        company: "SENOGRAFIA DESENVOLVIMENTO E SOLUÇÕES",
        role: "Frontend Junior Developer",
        years: "Jan 2025 - Today",
        location: "Curitiba - Paraná, Brazil (In-Person)",
        description: [
          "Leadership in the development of customized technological solutions for a diverse range of clients, including municipal governments, state entities, and private corporations.",
          "Implementation of innovative tools focused on web development and geospatial applications, ensuring robust and efficient solutions.",
          "Proficiency and effective application of a wide range of programming languages ​​and frameworks, including JavaScript, TypeScript, React, Python, and NodeJS.",
          "Expertise in the use of tools such as ArcGIS REST API and ArcGIS Maps SDK for JavaScript, contributing to the accuracy and effectiveness of geospatial solutions.",
          "Management and optimization of databases using PostgreSQL, ensuring data integrity and security.",
          "Proficiency in the use of collaborative development and version control tools, such as Jira, GIT, Github, and Bitbucket, promoting effective collaboration and continuous delivery of projects.",
        ],
        technologies: [
          "ArcGIS Maps SDK for JavaScript",
          "ArcGIS REST API",
          "BitBucket",
          "CSS",
          "Chat GPT",
          "Git",
          "HTML",
          "JavaScript",
          "Jira",
          "POO (JavaScript)",
          "React JS",
          "Typescript",
        ],
      },
      {
        company: "SUPER MEGAVENDAS",
        role: "Full Stack Developer",
        years: "May 2024 - Jun 2024",
        location: "Cruzeiro do Sul - Acre, Brazil (Remote)",
        description: [
          "I developed and maintained SMVFlow, an internal management system, integrating payment systems and third-party tools.",
        ],
        technologies: [
          "NextJS 14",
          "TailwindCSS",
          "SASS",
          "Typescript",
          "Git",
          "GitHub",
          "Jira",
          "TypeORM",
          "Figma",
          "POO (JavaScript)",
          "JavaScript",
          "HTML",
          "CSS",
          "Node JS",
          "React JS",
          "Chat GPT",
        ],
      },
      {
        company: "Innovation Serviços Digitais LTDA",
        role: "Desenvolvedor Front End",
        years: "Jun 2023 -  Dec 2023",
        location: "Cruzeiro do Sul - Acre, Brazil (Remote)",
        description: [
          "Development of complete web applications, from the Front End layer to the Back End layer, using technologies such as HTML5, CSS3, JavaScript, TypeScript, ReactJS, NextJS and NestJS.",
          "Implementation of new features and functionalities, in addition to making adjustments and optimizations as necessary, using ContextAPI, Git and Gitflow for version control and collaboration.",
          "Collaboration with multidisciplinary teams to understand project requirements and ensure the delivery of high-quality solutions, following agile methodologies such as SCRUM.",
          "Solving complex problems using various technologies and programming languages, in addition to Rest, HTTP and JSON APIs for integrations.",
        ],
        technologies: [
          "CSS",
          "Chat GPT",
          "Figma",
          "Git",
          "Git",
          "GitHub",
          "HTML",
          "JavaScript",
          "NextJS 13",
          "NextJS 13",
          "Node JS",
          "POO (JavaScript)",
          "Prisma",
          "React JS",
          "SASS",
          "SQL",
          "Slack",
          "TailwindCSS",
          "TypeORM",
        ],
      },
      {
        company: "Kenzie Academy Brasil",
        role: "UTA (undergraduate training assistant)",
        years: "May 2022 - Feb 2023",
        location: "Remoto",
        description: [
          "Monitoring and practical guidance on HTML, CSS, JavaScript, POO, DOM, TypeScript, Express, NodeJS, TypeORM, Python, Django rest-framework, Flask and SQL.",
          "Helping beginner students with questions about assessments, projects and activities.",
          "Correction of assessments and activities for students in the modules.",
        ],
        technologies: [
          "CSS",
          "DOM",
          "Django",
          "Express",
          "Flask",
          "Git",
          "GitHub",
          "HTML",
          "JavaScript",
          "NestJS",
          "NodeJS",
          "POO (JavaScript)",
          "Prisma",
          "Python",
          "Rest Frameworks",
          "SQL",
          "TypeORM",
          "TypeScript",
        ],
      },
    ],
  },
];

export const skills: ISkills = {
  [SkillsType.SKILLS]: [
    "C#",
    "CSS",
    "Django",
    "Docker",
    "Express",
    "Flask",
    "HTML",
    "JavaScript",
    "Jest",
    "Markdown",
    "Material UI",
    "MongoDB",
    "MySQL",
    "NestJS",
    "NextJS",
    "NodeJS",
    "NPM",
    "PHP",
    "PNPM",
    "PostgreSQL",
    "Prisma",
    "Python",
    "ReactJS",
    "Regex",
    "SASS",
    "SQLite",
    "Styled Components",
    "TailwindCSS",
    "TypeORM",
    "TypeScript",
  ],
  [SkillsType.TOOLS]: [
    "AWS",
    "Bash",
    "BitBucket",
    "FastApi",
    "Figma",
    "Firebase",
    "Git",
    "Github",
    "Github Actions",
    "Google Cloud Platform",
    "Gmail",
    "Heroku",
    "Insomnia",
    "Jira",
    "Linux",
    "Microsoft Office",
    "Microsoft Teams",
    "Notion",
    "Postman",
    "Powershell",
    "Ubuntu",
    "Vercel",
    "Vite",
    "VsCode",
    "Windows",
    "Yarn",
  ],
};

export const works = [];

export const services = [];
