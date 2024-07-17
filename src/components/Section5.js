import React from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import patos_sustentavel from "../resources/images/escritorio.jpg";
import Button from "./ButtonBlob";
import { Link } from "react-router-dom";

export default function Section5() {
  return (
    <Flex
      className="smt"
      as="section"
      position="relative"
      backgroundImage={`url(${patos_sustentavel})`}
      color="white"
      width="full"
      height="800px"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      id="meu-bairro"
      paddingInline={["16px", "16px", "16px", "116px", "116px"]}
    >
      <Stack
        justifyContent="center"
        marginInline="auto"
        alignItems={["center", "center", "center", "flex-start", "flex-start"]}
        textAlign={["center", "center", "center", "left", "left"]}
        direction="column"
        width={["300px", "300px", "400px", "full", "full"]}
      >
        <Heading
          as="h3"
          color="charlestonGreen.900"
          fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
          lineHeight="1.2em"
          zIndex="2"
        >
          Meu Bairro Sustentável
        </Heading>
        <Text
          color="charlestonGreen.900"
          fontSize="22px"
          lineHeight="30px"
          letterSpacing="0.2px"
          marginBlockEnd="36px !important"
        >
          <br />Ajude a preservar o meio ambiente do seu bairro!<br />Cada pequena ação pode fazer uma grande diferença 
          na conservação <br />ambiental e contribuir para um futuro mais saudável e equilibrado.  <br /><br />
          Explore os bairros disponíveis do Projeto e descubra como ajudar hoje mesmo!
          </Text>
          <Link to="/ipanema">
            <Button
              textTransform="capitalize"
              color="#008037"
              backgroundColor="white"
              blobColor="#008037"
              type="submit"
              _before="none"
              _hover={{ color: "#7ED957" }}
              _focus={{ color: "#7ED957" }}
              mr= "4"
            >
              IPANEMA
            </Button>
            <Button
              textTransform="capitalize"
              color="gray.500"
              backgroundColor="gray.200"
              blobColor="gray.500"
              type="button"
              isDisabled
              _before="none"
              _hover={{ color: "gray.700" }}
              _focus={{ color: "gray.700" }}
              _disabled={{
                backgroundColor: "gray.200",
                color: "gray.400",
                cursor: "not-allowed",
              }}
              mr="4"
            >
              CIDADE NOVA
            </Button>
            <Button
              textTransform="capitalize"
              color="gray.500"
              backgroundColor="gray.200"
              blobColor="gray.500"
              type="button"
              isDisabled
              _before="none"
              _hover={{ color: "gray.700" }}
              _focus={{ color: "gray.700" }}
              _disabled={{
                backgroundColor: "gray.200",
                color: "gray.400",
                cursor: "not-allowed",
              }}
              mr="4"
            >
              PLANALTO
            </Button>
            <Button
              textTransform="capitalize"
              color="gray.500"
              backgroundColor="gray.200"
              blobColor="gray.500"
              type="button"
              isDisabled
              _before="none"
              _hover={{ color: "gray.700" }}
              _focus={{ color: "gray.700" }}
              _disabled={{
                backgroundColor: "gray.200",
                color: "gray.400",
                cursor: "not-allowed",
              }}
              mr="4"
            >
              IPANEMA II
            </Button>
          </Link>
      </Stack>
    </Flex>
  );
}
