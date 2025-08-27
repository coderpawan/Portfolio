// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  meta,
  starbucks,
  tesla,
  project1,
  project2,
  project3,
  project4,
  linkedin,
  github,
  collab,
  data,
  excel,
  ml,
  mysql,
  problem,
  python,
  sql,
  statistics,
  tableau,
  team
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Kanhaiya2002",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Consultant",
    icon: mobile,
  },
  {
    title: "Product Analyst",
    icon: backend,
  },
  {
    title: "Business Analyst",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "ml",
    icon: ml,
  },
  {
    name: "collab",
    icon: collab,
  },
  {
    name: "excel",
    icon: excel,
  },
  {
    name: "data",
    icon: data,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "tableau",
    icon: tableau,
  },
  {
    name: "team",
    icon: team,
  },
  {
    name: "problem",
    icon: problem,
  },
  {
    name: "statistics",
    icon: statistics,
  },
  {
    name: "sql",
    icon: sql,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Data Analytics Intern",
    company_name: "Costylee Apparels Private Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Performed data cleaning and pre-processing on a dataset of 50,000+ records using Numpy and Pandas libraries.",
      "Applied Logistic Regression for customer segmentation using statistical techniques and machine learning tools.",
      "Developed a customer retention strategy based on insights to target key customers, leading to a 4% increase.",
      "Enhanced overall sales performance by leveraging data-driven approaches to reduce customer dropout rates.",
    ],
  },
  {
    title: "Festivals Committee Convener",
    company_name: "Students' Parliament IIT BHU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Led IIT BHU's major festivals—Spardha, Kashiyatra, and Technex—each attracting over 15,000 attendees, including the management of high-profile pro-nights.",
      "Managed a budget of ₹2.5 Crores across festivals, ensuring optimal allocation and financial efficiency.",
      "Increased event participation by 25% and introduced streamlined guidelines for registration and pass distribution.",
      "Coordinated logistics and safety operations, securing permissions from college authorities and local police for seamless pro-night execution."
    ],
  },
  {
    title: "Training and Placement Cell Coordinator",
    company_name: "IIT BHU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "Part of a team responsible for the annual campus placements and internships of 1000+ students.",
      "Collected and recorded 200+ leads ranging from top recruiters to alumni for the campus recruitment drive.",
      "Point of contact for all internship and placement-related queries for the Civil Department, helping 150+ Students."
    ],
  },
  {
    title: "Co-convener",
    company_name: "Shilp'24 IIT BHU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Led a team of 100+ in organizing events, workshops, and Guest talks for Shilp, the Civil Engineering Society's fest.",
      "Collaborated with 5+ industry partners to host impactful workshops, seminars, competitions, and CSR initiatives.",
      "Successfully attracted and managed 250+ participants, driving engagement and ensuring the success of the fest."
    ],
  },
  {
    title: "Event Manager",
    company_name: "SHE | An event based on Women Empowerment | TECHNEX'23",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2023",
    points: [
      "Led a team of 5 in organizing a large-scale event, successfully coordinating all aspects to facilitate participation from over 50 teams.",
      "Secured event sponsorships, proactively reaching out to potential sponsors to ensure robust financial support and enhance the event's profile.",
      "Managed end-to-end planning, including scheduling, securing judges, and overseeing timelines to ensure smooth execution and a memorable experience for all participants."
    ],
  }
] as const;

// Testimonials
export const TESTIMONIALS = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: user1,
  // },
  // // {
  // //   testimonial:
  // //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  // //   name: "Chris Brown",
  // //   designation: "COO",
  // //   company: "DEF Corp",
  // //   image: user2,
  // // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: user3,
  // },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Business statistics and Analysis Capstone Project",
    description:
      "Merged and cleaned American Housing Survey data from 2007, 2009, 2011, and 2013 to ensure data integrity. Conducted Hypothesis Testing to compare market values between vacant and occupied houses. Developed a Predictive Model using Linear Regression in MS Excel, withHoldout Analysis to validate accuracy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MS Excel",
        color: "green-text-gradient",
      },
      {
        name: "Google Collab",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "#",
    live_site_link: "#",
  },
  {
    name: "Data Analysis on Employee Data",
    description:
      "Merged multiple tables of Employee datasets and Performed Data Analysis using MySQL Workbench. Executed advanced SQL queries for department-wise analysis of KPIs like salary, employee counts, gender ratio. Transferred the data & organized different charts into an Interactive Dashboard using Tableau Public.",
    tags: [
      {
        name: "Tableau",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "#",
    live_site_link: "#",
  },
  {
    name: "Identification of Fraudelent Credit Card Transactions",
    description:
      "Employed Pandas and Seaborn for visualizing and pre-processing a highly imbalanced dataset. Achieved a 93% classification recall by optimizing Logistic Regression, KNN, and Decision Tree models. ",
    tags: [
      {
        name: "Logoistic Regression",
        color: "blue-text-gradient",
      },
      {
        name: "KNN",
        color: "green-text-gradient",
      },
      {
        name: "Decision Tree",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://colab.research.google.com/drive/1-4ojqszv1_LmETmqgAP2LtKIoxb4kbu-#scrollTo=SWPRLFv-E2OO",
    live_site_link: "#",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/kanhaiya-kumar-264a02200/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Kanhaiya2002",
  },
] as const;
