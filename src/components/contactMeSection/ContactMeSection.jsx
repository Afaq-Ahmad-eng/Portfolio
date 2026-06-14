import { useEffect } from "react";
// We create this css module for the option available in the selection so, the color of
//the option is black (by default it is white then the option not show proper)
import contactMeStyle from "./ContactMeSection.module.css";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Container,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "../fullScreenSection/FullScreenSection";
import useSubmit from "../../hooks/useSubmit/useSubmit.jsx";
import { useAlertContext } from "../../context/alertContext/AlertContext.jsx";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: async (values) => {
      submit("https://formsubmit.co/ajax/koinahe193@gmail.com", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Required")
        .min(35, "Must be at least 35 Characters"),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        onOpen(
          "success",
          `Thank your submission ${formik.values.firstName}, we will get back to you shortly!`,
        );
        formik.resetForm();
      } else if (response.type === "error") {
        onOpen(
          "error",
          response.message || "Something went wrong. Please try again later!",
        );
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#18181b" // 60% Dominant Theme Background
      // FIX 1: Explicitly prevents the wrapper from stretching to 100vh on small screens
      minH={{ base: "auto", md: "100vh" }} 
      // FIX 2: Muted mobile padding to bring the footer up closer to the form card
      py={{ base: 8, md: 20, lg: 24 }}
      spacing={8}
    >
      <Container 
        id="contactme-section" 
        maxW={{ base: "100%", md: "container.md", lg: "container.lg" }}
        px={{ base: 4, sm: 8, md: 0 }}
      >
        <VStack
          width="100%"
          alignItems="stretch"
          spacing={6} // Tightened spacing slightly for mobile balance
        >
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} textAlign="left" color="white">
            Contact me
          </Heading>
          
          <Box bg="#2A4365" p={{ base: 5, md: 8, lg: 10 }} rounded="xl" shadow="2xl" w="100%">
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
              <VStack spacing={5} alignItems="stretch">
                
                <FormControl
                  isInvalid={
                    formik.touched.firstName && formik.errors.firstName
                  }
                >
                  <FormLabel htmlFor="firstName" color="gray.200">Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    bg="#18181b"
                    color="white"
                    focusBorderColor="#512DA8" // 10% Accent Purple Glow
                    border="none"
                    size="lg"
                    {...formik.getFieldProps("firstName")}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <FormLabel htmlFor="email" color="gray.200">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    bg="#18181b"
                    color="white"
                    focusBorderColor="#512DA8"
                    border="none"
                    size="lg"
                    {...formik.getFieldProps("email")}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="type" color="gray.200">Type of enquiry</FormLabel>
                  <Select
                    id="type"
                    name="type"
                    bg="#18181b"
                    color="white"
                    focusBorderColor="#512DA8"
                    border="none"
                    size="lg"
                    {...formik.getFieldProps("type")}
                  >
                    <option value="hireMe" className={contactMeStyle.option}>
                      Freelance project proposal
                    </option>
                    <option
                      value="openSource"
                      className={contactMeStyle.option}
                    >
                      Open source consultancy session
                    </option>
                    <option
                      value="other"
                      color="black"
                      className={contactMeStyle.option}
                    >
                      Other
                    </option>
                  </Select>
                </FormControl>

                <FormControl
                  isInvalid={formik.touched.comment && formik.errors.comment}
                >
                  <FormLabel htmlFor="comment" color="gray.200">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={{ base: 140, md: 220 }} // Slightly scaled back minimum mobile height
                    bg="#18181b"
                    color="white"
                    focusBorderColor="#512DA8"
                    border="none"
                    {...formik.getFieldProps("comment")}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  bg="#512DA8" // 10% Accent Purple
                  color="white"
                  isLoading={isLoading}
                  size="lg"
                  mt={4}
                  _hover={{ bg: "#43258E", transform: "translateY(-2px)" }}
                  _active={{ bg: "#341B75" }}
                  transition="all 0.2s ease-in-out"
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </FullScreenSection>
  );
};

export default ContactMeSection;