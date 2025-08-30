import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/header/header";
import LandingSection from "../components/landingSection/LandingSection";
import ProjectsSection from "../components/projectSection/ProjectSection";
import ContactMeSection from "../components/contactMeSection/ContactMeSection";
import Footer from "../components/footer/Footer";
import { AlertProvider } from "../context/alertContext/AlertContext";
import Alert from "../components/alert/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
