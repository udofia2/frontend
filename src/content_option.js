const logotext = "ODIONG";
const meta = {
  title: "Abasiodiong UDOFIA",
  description:
    "I’m Odiong a Fullstack/Backend nodejs software engineer/devloper,currently open to work",
};

const introdata = {
  title: "I’m Abasiodiong Udofia",
  animated: {
    first: "I love solving problems using code",
    second: "I specialize in Backend development",
    third: "I'm a good team player",
  },
  description:
    "Hello Edidiong, let's have some fun time together building products that meets the current market needs.",
  your_img_url: require("./assets/images/mediumSize.png"),
};

const dataabout = {
  title: "background",
  aboutme:
    "A graduate with a Diploma in Computer Science. A backend consultant, a mentor at Google Africa Developer Scholarship, a JavaScript tutor at Malhub, and Kanispace, and a volunteer at Outreachy. I am interested specifically in Javascript/Nodejs opportunities. However, i'm also open to learning this things.",
};

const education = [
  {
    school: "Monogodb University",
    course: "Mongodb for Nodejs Developers",
    date: "2023",
  },
  {
    school: "University of Ilorin",
    course: "Diploma in Computer Science",
    date: "2022",
  },
  {
    school: "University of Ilorin ",
    course: "Chemistry",
    date: "2017",
  },
];

const workExperience = [
  {
    jobtitle: "Backend Engineer",
    where: "AJEO",
    date: "2021",
    description: [
      "Lead in the architectural design of the Aje-o APIs.",
      "Managed the database integration and implemented caching for frequently queried data to optimize speed.",
      "Managed the cloud infrastructures on AWS.",
      "Implemented permanent storage of products, users and sessions.",
      "Supervised the backend interns.",
      "Reviewed the PRs of the backend interns.",
    ],
  },
  {
    jobtitle: "Backend Engineer",
    where: "Outreach",
    date: "2021",
    description: ["Volunteer"],
  },
  {
    jobtitle: "Lead Backend Engineer",
    where: "Odiong & Partners",
    date: "2017",
    description: [
      "Lead in the design, development, and implementation of the Server side logic, APIs and the whole development process.",
      "Delegate tasks to Team members which comprises the UX/UI design team, Front-End Web and Mobile Team, Back-End and DevOps Teams.",
      "Supervise the assessment of all Team progress in order to ensure quality and accuracy of the development process",
      "Oversee the efficient use of production project budgets.",
      "Contributes to Open-Source Repository on Github",
    ],
  },
];

const skills = [
  {
    name: "Nodejs",
    value: 90,
  },
  {
    name: "Nestjs",
    value: 65,
  },
  {
    name: "Javascript",
    value: 98,
  },
  {
    name: "React",
    value: 70,
  },

  {
    name: "SQL",
    value: 60,
  },
  {
    name: "Microservice",
    value: 68,
  },
  {
    name: "Docker",
    value: 70,
  },

  {
    name: "AWS",
    value: 72,
  },
  {
    name: "Mongodb",
    value: 95,
  },
  {
    name: " Github Version Control ",
    value: 98,
  },
  {
    name: "HTML",
    value: 100,
  },
  {
    name: "CSS",
    value: 70,
  },

];


const dataportfolio = [
  {
    img: require("./assets/images/portfolioImages/portfolio/ajeo.jpeg"),
    desctiption: "AWS, Nodejs, Express, Mongodb, Redis, Javascript",
    
  },
  {
    img: require("./assets/images/portfolioImages/portfolio/temadepharm_landingPage.png"),
    desctiption: "HTML, CSS, Mysql, MailChimp, laravel",
    
  },
  {
    img: require("./assets/images/portfolioImages/portfolio/domain_homePage.png"),
    desctiption:
      "Nodejs, mongodb, express, pugjs, whois API integration, html, css, Javascript",
    
  },
  {
    img: require("./assets/images/portfolioImages/portfolio/flowexpresscourier.png"),
    desctiption: "wordpress",
    
  },
  {
    img: require("./assets/images/portfolioImages/portfolio/workflow.png"),
    desctiption:
      "HTML, CSS, BOOTSTRAP, EXPRESS, NODEJS, JAVASCRIPT",
    
  },
];

const contactConfig = {
  YOUR_EMAIL: "enalsy22@gmail.com",
  YOUR_FONE: "(+234)081-3702-4087",
  description:
    "Glad you made it this far. Your are a genius. Please don't hesitate to drop a message. I'll be excited to hear from you",
  YOUR_SERVICE_ID: "service_98f835d",
  YOUR_TEMPLATE_ID: "template_7y3jtzn",
  YOUR_USER_ID: "9ruAHv_-vrxc_BZAE",
};

const socialprofils = {
  github: "https://github.com/udofia2",
  linkedin: "https://linkedin.com/in/udofia",
  twitter: "https://twitter.com/enalsy2",
};

export {
  meta,
  dataabout,
  dataportfolio,
  education,
  workExperience,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
