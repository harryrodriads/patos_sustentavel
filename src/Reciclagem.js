import React, { useEffect } from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import patos_sustentavel from "./resources/images/escritorio.jpg";


export default function Reciclagem() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
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
          Reciclagem <br /> 
        </Heading>
        <Text
          color="charlestonGreen.900"
          lineHeight="30px"
          letterSpacing="0.2px"
          marginBlockEnd="36px !important"
        >
        <br />
        <br />
        <br />
        <br /><br />
          </Text>
      </Stack>
    </Flex>
  );
}
