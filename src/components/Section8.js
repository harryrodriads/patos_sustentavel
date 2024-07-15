import { Flex, Text, Heading, Stack } from "@chakra-ui/react";
import contato from "../resources/images/contato.png";
import OrderForm from "./OrderForm";

export default function Section8() {
  return (
    <Flex
      position="relative"
      backgroundImage={`url(${contato})`}
      color="charlestonGreen.900"
      width="full"
      height="740px"
      backgroundAttachment="fixed"
      className="smt"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize="cover"
      id="contato"
      justifyContent={["center", "center", "center", "flex-end", "flex-end"]}
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
          Contato
        </Heading>
        <Text lineHeight="28px">
          Seja parceiro através de sua Empresa ou Órgão Municipal, <br /> para promover Projetos Sustentáveis de Nossa Cidade!
        </Text>
        <OrderForm />
      </Stack>
    </Flex>
  );
}
