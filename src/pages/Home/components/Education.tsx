import { Box, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { me } from "../../../me";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Education = () => {
  return (
    <Flex
      id={"education"}
      minH={"50vh"}
      w={"full"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      p={{
        base: 8,
        md: 16,
      }}
    >
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"3xl"}>
          Education
        </Heading>
        <Stack direction={"column"} spacing={4} mt={8}>
          {me.education.map((education) => (
            <SingleEducation key={education.school} {...education} />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

const SingleEducation = ({
  degree,
  major,
  school,
  graduation,
  courseworks,
}: {
  degree: string;
  major: string;
  school: string;
  graduation: string;
  courseworks: readonly string[];
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <Stack direction={"column"}>
        <Text
          as={"h5"}
          fontSize={"xl"}
          color={useColorModeValue("gray.600", "gray.400")}
          mb={2}
        >
          {graduation}
        </Text>
        <Heading as={"h3"} fontSize={{ base: "3xl", md: "4xl" }}>
          {school}
        </Heading>
        <Text as={"h4"} fontSize={{ base: "2xl", md: "3xl" }}>
          {degree} in {major}
        </Text>

        <Box h={"10px"} />
        {courseworks.map((coursework) => (
          <Heading as={"h5"} fontSize={"xl"} fontWeight={"normal"} key={coursework}>
            {coursework}
          </Heading>
        ))}
      </Stack>
    </motion.div>
  );
};

export default Education;
