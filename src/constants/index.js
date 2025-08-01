import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Ethiopian Curriculum Aligned Content",
  "Certified Teacher-Led Video Lessons",
  "Offline Access for Low Connectivity",
  "Amharic & English Language Support",
  "Parent Progress Monitoring Dashboard",
  "Affordable Pricing for Ethiopian Families",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Localized Content Expansion",
    text: "Adding more subjects aligned with Ethiopian educational standards and translating key materials into Amharic and other local languages.",
    date: "September 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Parent-Teacher Portal",
    text: "Developing communication tools for parents and teachers to monitor student progress and collaborate effectively.",
    date: "December 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Offline Learning Mode",
    text: "Implementing features that allow students to download lessons for offline access, crucial for areas with limited internet.",
    date: "March 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Exam Preparation Hub",
    text: "Creating specialized resources for Ethiopian national exams with practice tests and performance analytics.",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Gobez Academy combines Ethiopian educational expertise with cutting-edge technology to deliver quality learning accessible to all students.";

export const collabContent = [
  {
    id: "0",
    title: "Curriculum-Aligned",
    text: collabText,
  },
  {
    id: "1",
    title: "Teacher-Approved",
  },
  {
    id: "2",
    title: "Parent-Friendly",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Access to core subjects and limited features",
    price: "0",
    features: [
      "Free access to mathematics and science basics",
      "Sample lessons from all grade levels",
      "Community support forum access",
      "Limited progress tracking",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Full curriculum access with premium features",
    price: "199",
    features: [
      "Complete Ethiopian curriculum coverage",
      "Unlimited access to all subjects and grades",
      "Detailed progress reports and analytics",
      "Priority customer support",
      "Parent monitoring dashboard",
    ],
  },
  {
    id: "2",
    title: "School",
    description: "Custom solutions for schools and institutions",
    price: null,
    features: [
      "Bulk licensing for classrooms",
      "Administrator dashboard",
      "Custom content integration",
      "Teacher training and support",
      "Detailed performance analytics",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ethiopian Curriculum Focus",
    text: "All content is specifically designed to align with Ethiopia's national education standards and examination requirements.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Expert Ethiopian Educators",
    text: "Our lessons are created and delivered by certified Ethiopian teachers who understand the local education context.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Accessible Anywhere",
    text: "Students can learn from home, school, or anywhere with our mobile-friendly platform designed for Ethiopian internet conditions.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Multilingual Support",
    text: "Key materials available in both Amharic and English to support better understanding for all students.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Exam Preparation",
    text: "Specialized resources for Ethiopian national exams including practice tests and past paper solutions.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Affordable Quality",
    text: "Premium education at a fraction of traditional tutoring costs, with scholarships available for needy students.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "YouTube",
    iconUrl: twitter,
    url: "#",
  },
];