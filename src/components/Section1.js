import { Flex, Stack, Text, Heading } from "@chakra-ui/react";
import patos_sustentavel from "../resources/images/escritorio.jpg";
import Button from "./ButtonBlob";
import { Link } from 'react-scroll';

export default function Section1() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${patos_sustentavel})`}
      color="#008037"
      width="full"
      className="smt"
      paddingBlock="140px"
      paddingInline={["16px", "16px", "16px", "116px", "116px"]}
      height="800px"
      backgroundAttachment="fixed"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      id="inicio"
    >
      <Stack
        justifyContent="center"
        marginInline="auto"
        alignItems={["center", "center", "center", "flex-start", "flex-start"]}
        textAlign={["center", "center", "center", "left", "left"]}
        width={["300px", "300px", "400px", "full", "full"]}
        marginBlockStart={["0", "0", "0", "-100px", "-100px"]}
      >
        <Heading
          as="h2"
          fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
          lineHeight="1.2em"
          zIndex="2"
        >
          Patos de Minas,  <br />se preocupa com o Meio Ambiente!<br />
          
        </Heading>
        <Text
          fontSize="22px"
          lineHeight="30px"
          letterSpacing="0.2px"
          marginBlockEnd="36px !important"
        >
          <br />Este é um Projeto para a sociedade poder colaborar<br /> para a preservação e conservação do meio ambiente! 
        </Text>
        <Link to="meu-bairro" smooth={true} duration={800}>
          <Button
            textTransform="capitalize"
            color="#008037"
            backgroundColor="white"
            blobColor="#008037"
            type="submit"
            _before="none"
            _hover={{ color: "#7ED957" }}
            _focus={{ color: "#7ED957" }}
          >
            LEIA MAIS
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
}
