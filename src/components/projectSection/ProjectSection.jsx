import FullScreenSection from "../fullScreenSection/FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "../cards/Cards";

// ✅ Import your images at the top
import SMTPhoto from "../../assets/images/Homepage.png";
import FocusMonitorPhoto from "../../assets/images/FocusMonitor.png";
import AgeCalculatorPhoto from "../../assets/images/Age-Calculator.png";
import SynergyInnovations from "../../assets/images/SoftwareSynergySolution.png";

const projects = [
  {
    title: "Smart Travel Companion",
    description:
      "Smart Travel Companion (STC) is a web-based Final Year Project focused on tourism in Khyber Pakhtunkhwa (KPK). The system allows tourists to register and explore the best tour destinations in KPK based on season, popularity, and travel suitability. Users can view recommended routes, suitable vehicles for each destination, and the best time to visit. The platform also helps tourists plan and track their travel budget for a complete and organized tour experience.",
    imageSrc: SMTPhoto,
    link: "https://github.com/Afaq-Ahmad-eng/Travel-Companion"
  },
  {
    title: "Focus Monitor",
    description:
      "It is a desktop application developed as a semester project that uses a webcam to monitor user focus and attention levels. It leverages face detection and landmark recognition (via face-api.js) to track eye gaze and facial expressions in real-time. The system provides basic focus analytics, helping users understand their attention patterns. This project demonstrates practical applications of computer vision and web-based AI in a learning context.",
    imageSrc: FocusMonitorPhoto,
    link: "https://github.com/Afaq-Ahmad-eng/FocusMonitor"
  },
  {
    title: "Age Calculator",
    description:
      "A simple web application developed as an assignment during the Web Development course in the Aziz Jan Trust collaboration with SMIT. The application allows users to enter their date of birth and instantly calculates their current age in years, months, and days. This project demonstrates practical skills in frontend development, form handling, and JavaScript logic, highlighting the ability to create interactive and user-friendly web interfaces.",
    imageSrc: AgeCalculatorPhoto,
    link: "https://agecalculator-afaqahmad.netlify.app/"
  },
  {
    title: "Synergy Innovations",
    description:
      "A corporate website developed for Synergy Innovations, a technology solutions provider. The website showcases the company’s services, portfolio, and client testimonials, featuring a modern design, responsive layouts, and interactive elements. This project highlights skills in web design, user experience (UX), and frontend development using HTML, CSS, and JavaScript. I contributed to the creation and maintenance of the website, ensuring it effectively represents the brand and provides an engaging experience for visitors.",
    imageSrc: SynergyInnovations,
    link: "https://synergyinnovations.tech/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Cards
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
