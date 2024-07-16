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
          Meu Bairro <br /> Sustentável
        </Heading>
        <Text
          color="charlestonGreen.900"
          fontSize="22px"
          lineHeight="30px"
          letterSpacing="0.2px"
          marginBlockEnd="36px !important"
        >
          Ajude a preservar o meio ambiente do seu bairro!<br />Cada pequena ação pode fazer uma grande diferença 
          na conservação <br />ambiental e contribuir para um futuro mais saudável e equilibrado.  <br /><br />
          Explore os bairros disponíveis e descubra como você pode fazer a diferença hoje mesmo!
          </Text>
          <Link to="/ipanema">
            <Button
              color="#008037"
              textTransform="uppercase"
              blobColor="transparent"
              width="auto"
              src= "/ipanema"
              _before={{
                zIndex: 1,
                left: 0,
                top: 0,
                border: "2px solid",
                borderColor: "#008037",
                position: "absolute",
                content: `""`,
                width: "full",
                height: "full",
                borderRadius: "3xl",
              }}
              _hover={{
                color: "#008037",
              }}
              _focus={{
                color: "#008037",
              }}
              mr="4"
            >
              IPANEMA
            </Button>
            <Button
              color="gray.500"
              textTransform="uppercase"
              blobColor="transparent"
              width="auto"
              src="/cidade-nova"
              isDisabled
              _before={{
                zIndex: 1,
                left: 0,
                top: 0,
                border: "2px solid",
                borderColor: "gray.500",
                position: "absolute",
                content: `""`,
                width: "full",
                height: "full",
                borderRadius: "3xl",
              }}
              _hover={{
                color: "gray.500",
              }}
              _focus={{
                color: "gray.500",
              }}
              _disabled={{
                backgroundColor: "gray.200",
                cursor: "not-allowed",
              }}
              mr="4"
            >
              CIDADE NOVA
            </Button>
            <Button
              color="gray.500"
              textTransform="uppercase"
              blobColor="transparent"
              width="auto"
              src="/planalto"
              isDisabled
              _before={{
                zIndex: 1,
                left: 0,
                top: 0,
                border: "2px solid",
                borderColor: "gray.500",
                position: "absolute",
                content: `""`,
                width: "full",
                height: "full",
                borderRadius: "3xl",
              }}
              _hover={{
                color: "gray.500",
              }}
              _focus={{
                color: "gray.500",
              }}
              _disabled={{
                backgroundColor: "gray.200",
                cursor: "not-allowed",
              }}
              mr="4"
            >
              PLANALTO
            </Button>
            <Button
              color="gray.500"
              textTransform="uppercase"
              blobColor="transparent"
              width="auto"
              src="/jardim-julia"
              isDisabled
              _before={{
                zIndex: 1,
                left: 0,
                top: 0,
                border: "2px solid",
                borderColor: "gray.500",
                position: "absolute",
                content: `""`,
                width: "full",
                height: "full",
                borderRadius: "3xl",
              }}
              _hover={{
                color: "gray.500",
              }}
              _focus={{
                color: "gray.500",
              }}
              _disabled={{
                backgroundColor: "gray.200",
                cursor: "not-allowed",
              }}
              mr="4"
            >
              JARDIM JÚLIA
            </Button>
          </Link>
      </Stack>
    </Flex>
  );
}
