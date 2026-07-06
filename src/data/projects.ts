import type { Project } from "../types/portfolio";
import healthpointImg from "../assets/projects/Healpoint.webp";
import logisticsImg from "../assets/projects/Logistic_Microservices.webp";
import demandForecastingImg from "../assets/projects/Wargikopi.webp";
import pancinginImg from "../assets/projects/Pancingin.webp"; 
import baqiWebsiteImg from "../assets/projects/Baqi.webp";
import smartWasteBinImg from "../assets/projects/SmartWaste.webp";

/**
 * Featured projects ordered by PRD priority.
 * To add a project, append an object. The UI renders them in array order.
 *
 * Image paths point to src/assets/projects/. Replace placeholder
 * paths with real screenshots when available — no layout changes needed.
 */
export const projects: Project[] = [
  {
    title: "HealthPoint",
    role: "Backend Developer",
    category: "Dicoding Coding Camp 2026",
    type: "Team Project",
    description:
      "An AI-assisted healthcare management platform designed to simplify patient consultations and appointment scheduling through integrated digital services.",
    contributions: [
      "Developed RESTful backend APIs",
      "Implemented authentication",
      "Built appointment scheduling services",
      "Collaborated with Frontend and AI teams",
    ],
    stack: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
    image: healthpointImg,
  },
  {
    title: "Logistics Microservices",
    role: "Backend Developer",
    category: "Cloud Computing Final Project",
    type: "Team Project",
    description:
      "A cloud-native logistics platform using microservices architecture to improve delivery operations through independent services.",
    contributions: [
      "Developed Hub Service",
      "Developed Courier Service",
      "Built REST APIs",
      "Integrated Azure deployment",
      "Worked with Jenkins pipeline",
    ],
    stack: ["Express.js", "Docker", "Azure", "Jenkins", "REST API"],
    image: logisticsImg,
  },
  {
    title: "Demand Forecasting Wargi Kopi",
    role: "Full Stack Developer",
    category: "Machine Learning Final Project",
    type: "Team Project",
    description:
      "A demand forecasting dashboard that helps coffee shop owners estimate future product demand and reduce unnecessary inventory waste.",
    contributions: [
      "Designed frontend dashboard",
      "Built backend APIs",
      "Integrated forecasting results",
      "Created data visualization",
    ],
    stack: ["JavaScript", "Node.js", "Machine Learning", "Chart.js"],
    image: demandForecastingImg,
  },
  {
    title: "Pancingin",
    role: "Backend Developer",
    category: "Web & Mobile Programming",
    type: "Team Project",
    description:
      "A community platform that helps anglers discover fishing spots, share catches, discuss fishing experiences, and explore fishing equipment.",
    contributions: [
      "Developed backend APIs",
      "Designed authentication flow",
      "Implemented discussion features",
      "Integrated mobile frontend",
    ],
    stack: ["Node.js", "Express.js", "TypeScript", "Expo"],
    image: pancinginImg,
  },
  {
    title: "BAQI Website",
    role: "Full Stack Developer",
    category: "Organization Website",
    type: "Solo Project",
    description:
      "Official landing website introducing BAQI to prospective members through a modern responsive interface.",
    contributions: [
      "Designed UI",
      "Built responsive frontend",
      "Implemented website independently",
    ],
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    image: baqiWebsiteImg,
  },
  {
    title: "Smart Waste Bin",
    role: "IoT Team Member",
    category: "Internet of Things",
    type: "Team Project",
    description:
      "An intelligent waste bin capable of identifying organic and inorganic waste using computer vision and embedded systems.",
    contributions: [
      "Supported IoT implementation",
      "Collaborated with team members",
      "Participated in system testing",
    ],
    stack: ["ESP32-CAM", "MobileNetV2", "IoT"],
    image: smartWasteBinImg,
  },
];
