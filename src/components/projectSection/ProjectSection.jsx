import FullScreenSection from "../fullScreenSection/FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "../cards/Cards";

// ✅ Import your images at the top
import photo1 from "../../assets/images/Homepage.png";
// import photo2 from "../../assets/images/photo2.jpg";
// import photo3 from "../../assets/images/photo3.jpg";
// import photo4 from "../../assets/images/photo4.jpg";

const projects = [
  {
    title: "Smart Travel Companion",
    description:
      "Smart Travel Companion (STC) is a web-based Final Year Project focused on tourism in Khyber Pakhtunkhwa (KPK). The system allows tourists to register and explore the best tour destinations in KPK based on season, popularity, and travel suitability. Users can view recommended routes, suitable vehicles for each destination, and the best time to visit. The platform also helps tourists plan and track their travel budget for a complete and organized tour experience.",
    imageSrc: photo1,
    link: "https://github.com/Afaq-Ahmad-eng/Travel-Companion"
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    imageSrc: photo1,
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageSrc: photo1,
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageSrc: photo1,
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
