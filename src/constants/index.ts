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

import Apollo from "../assets/company/apollo.png";
import Gmail from "../assets/company/gmail.jpg";
import Outsource from "../assets/company/outsource.jpg";
import Approve from "../assets/company/approved.jpg";
import Deal from "../assets/company/deal.png";
import Nordhavn from "../assets/projects/nordhavn.jpeg";
import Electronics from "../assets/projects/electronics.png";
import Social from "../assets/projects/social.png";
import Webdev from "../assets/projects/webdev.png";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "process",
    title: "Process",
    link: null,
  },
  {
    id: "project",
    title: "Projects",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "AI Tools",
    icon: mobile,
  },
  {
    title: "Graphic Designing",
    icon: backend,
  },
  {
    title: "Marketing",
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
    title: "Lead Generation",
    company_name: "Costylee Apparels Private Limited",
    icon: Apollo,
    iconBg: "#383E56",
    date: "First",
    points: [
      "Use Apollo.io to filter and extract high-quality leads based on industry, job role, and company size.",
      "Focus on decision-makers (like founders, CMOs, and marketing heads) who are more likely to need digital services.",
      "Build a lead list with verified email addresses, company names, and personalized info for targeting.",
      "Export and organize leads into a CRM or spreadsheet for seamless tracking and follow-up.",
    ],
  },
  {
    title: "Outreach and Mass Mailing",
    company_name: "Students' Parliament IIT BHU",
    icon: Gmail,
    iconBg: "#E6DEDD",
    date: "Second",
    points: [
      "Craft compelling, value-focused email templates that speak directly to the client's pain points.",
      "Use email automation tools like Lemlist, Instantly, or Mailshake to schedule and send emails in bulk.",
      "Personalize each email (even at scale) using dynamic variables like {FirstName} or {CompanyName}.",
      "Follow up with non-responders strategically—typically 2–3 times over 10 days for maximum reply rates."
    ],
  },
  {
    title: "Closing the Deal",
    company_name: "IIT BHU",
    icon: Deal,
    iconBg: "#E6DEDD",
    date: "Third",
    points: [
      "Once a client responds, engage them with a clear and confident pitch—focus on results, not just services.",
      "Discuss project details (goals, timeline, deliverables) and showcase your past work or social proof.",
      "Be transparent about pricing, offer options if needed, and handle objections with clarity."
    ],
  },
  {
    title: "Outsourcing the Work",
    company_name: "IIT BHU",
    icon: Outsource,
    iconBg: "#E6DEDD",
    date: "Fourth",
    points: [
      "After the deal is confirmed, delegate the work to a reliable freelancer or service provider in your network.",
      "Share detailed briefs, brand assets, and deadlines to ensure the freelancer understands the scope fully.",
      "Always keep quality control in mind—check-in frequently and request milestone updates."
    ],
  },
  {
    title: "Quality Check and Delivery",
    company_name: "Shilp'24 IIT BHU",
    icon: Approve,
    iconBg: "#E6DEDD",
    date: "Fifth",
    points: [
      "Review the deliverables thoroughly and ensure they meet your promised standards and client expectations.",
      "Request revisions from the freelancer if needed before presenting to the client.",
      "Deliver the final output in a polished, professional manner with proper documentation or presentation."
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
    name: "Brand Identity for “Nordhavn Organics” ",
    description:
      "Designed a full branding package for Nordhavn Organics, a Copenhagen-based sustainable skincare brand. The project included a minimalist logo, product packaging design, and a cohesive brand guide to reflect eco-conscious values.",
    tags: [
      {
        name: "Adobe Illustrator",
        color: "blue-text-gradient",
      },
      {
        name: "Photoshop",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: Nordhavn,
    source_code_link: "#",
    live_site_link: "#",
  },
  {
    name: "AI-Based Support Bot for “Lexovia Electronics”",
    description:
      "Built and deployed an AI chatbot for Lexovia, an e-commerce electronics retailer in Canada. The bot handled order queries, product suggestions, and customer support, cutting support response time by 60%.",
    tags: [
      {
        name: "OpenAI GPT API",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Dialogflow",
        color: "pink-text-gradient",
      },
    ],
    image: Electronics,
    source_code_link: "#",
    live_site_link: "#",
  },
  {
    name: "Portfolio Website for “Crypto Nova”",
    description:
      "Built a real-time crypto portfolio tracker and analytics dashboard for CryptoNova, a blockchain startup based in Singapore. The tool featured live price updates, custom watchlists, token performance graphs, and wallet integration for seamless DeFi tracking.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Web3.js",
        color: "green-text-gradient",
      },
      {
        name: "CoinGecko API",
        color: "pink-text-gradient",
      },
    ],
    image: Webdev,
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
