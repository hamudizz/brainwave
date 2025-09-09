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
    title: "Services",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Platform",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Features",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Subjects",
    url: "https://lms.gobezacademy.com/lms/courses",
  },
  {
    id: "5",
    title: "Contact",
    url: "#contact-us",
  },
  {
    id: "6",
    title: "About Us",
    url: "#about-us",
  },

  {
    id: "7",
    title: "Blog",
    url: "https://lms.gobezacademy.com/blog ",
  },
  {
    id: "8",
    title: "Register",
    url: "https://lms.gobezacademy.com/register/new",
    onlyMobile: true,
  },
  {
    id: "9",
    title: "Sign in",
    url: "https://lms.gobezacademy.com/login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo];

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
    date: "July 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Parent Portal",
    text: "Developing communication tools for parents and teachers to monitor student progress and collaborate effectively.",
    date: "July 2025",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Offline Learning Mode",
    text: "Implementing features that allow students to download lessons for offline access, crucial for areas with limited internet.",
    date: "March 2026",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "National Exam Preparation Dynamic Mock Exams",
    text: "Creating specialized resources for Ethiopian national exams with practice tests and performance analytics.",
    date: "July 2025",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Gobez Academy combines Ethiopian educational expertise with cutting-edge technology to deliver quality learning accessible to all students.  ";
export const collabText2 =
  "Video lessons, notes, quizzes, assessments, exam prep, and more.";   
export const collabText3 =
  "Pedagogically designed for effective learning.";
export const collabContent = [
  {
    id: "0",
    title: "Dynamic Learning Options",
    text: collabText2,
  },
  {
    id: "1",
    title: "Well-Structured Resources",
    text: collabText3,
  },
  //{
 //   id: "2",
 //   title: "Parent-Friendly",
 // },
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
    title: "Subscription Options",
    description: "Access All plans include video lessons, quizzes, e-textbooks, progress tracking, gamified learning, and parent communication tools.core subjects and limited features",
    price: "",
    features: [
     
      "Monthly: ETB 300",
      "3 Months (10% off): ETB 810",
      "6 Months (15% off): ETB 1,530",
      "1 Year (20% off): ETB 2,880",

    ],
  },
  {
    id: "1",
    title: "Exam Packages",
    description: "Full curriculum access with premium features",
    price: "",
    features: [
      "First Semister all Grade Exams: ETB 200",
      "Second Semister all Grade Exams: ETB 200",
      "National Exams: ETB 300",
    ],
  },
  {
    id: "2",
    title: "Premium",
    description: "Custom solutions for schools and institutions",
    price: "",
    features: [
      "All subject access for student grade",
      "Grade exam preparation resources",
      "National exam preparation resources",
    ],
  },

];

export const benefits = [
  {
    id: "0",
    title: "Ethiopian Curriculum Focus",
    text: "All resources are developed to align with the Ethiopian curriculum frameworks and educational standards.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Expert Ethiopian Educators",
    text: "Our lessons are created and delivered by highly qualified and experienced teachers who are familiar with the local educational context.",
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
    url: "https://t.me/Gobezacademyapp",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://web.facebook.com/profile.php?id=61576225864433",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/gobezacademy?igsh=MXQyaTA0bjRxczVvYw==",
  },
  //{
   // id: "3",
   // title: "YouTube",
    //iconUrl: youtube,
 //   url: "https://www.youtube.com/@Gobezacademy",
  //}
]