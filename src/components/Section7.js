import { Flex, Text, Heading, Stack } from "@chakra-ui/react";
import ideia from "../resources/images/ideia.jpeg";
import SugestForm from "./SugestForm";

export default function Section8() {
  return (
    <Flex
      position="relative"
      backgroundImage={`url(${ideia})`}
      color="white"
      width="full"
      height="740px"
      backgroundAttachment="fixed"
      className="smt"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize="cover"
      id="reviews"
      justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
      paddingBlock="120px"
      paddingInline={["20px", "20px", "20px", "116px", "116px"]}
    >
      <Stack
        textAlign={["center", "center", "center", "left", "left"]}
        maxWidth="512px"
        minWidth="260px"
        gridGap="20px"
      >
        <Heading as="h4" fontSize="40px" textTransform="capitalize">
          Sugestão / Denúncia
        </Heading>
        <Text lineHeight="28px">
        Envie sua Sugestão ou Denúncia sobre práticas sustentáveis na Nossa Cidade. Sua contribuição pode aparecer no nosso PAINEL abaixo!
        </Text>
        <SugestForm />
      </Stack>
    </Flex>
    
  );
}
