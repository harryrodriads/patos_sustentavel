import React, { useEffect } from "react";
import { Flex, Heading, Stack, Text, Box, Button } from "@chakra-ui/react";
import patos_sustentavel from "./resources/images/escritorio.jpg";

export default function Pracas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${patos_sustentavel})`}
      color="white"
      width="full"
      height="800px"
      backgroundPosition="center"
      backgroundSize="cover"
      id="meu-bairro"
      paddingInline={["16px", "16px", "16px", "116px", "116px"]}
      paddingBlock="20px"
    >
      <Flex
        width="full"
        height="full"
        direction={["column", "column", "row", "row"]}
        align="center"
        justify="center"
        gridGap="20px"
      >
        <Stack
          flex="1"
          alignItems={["center", "center", "flex-start", "flex-start"]}
          textAlign={["center", "center", "left", "left"]}
        >
          <Heading
            as="h3"
            color="charlestonGreen.900"
            fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
            lineHeight="1.2em"
            zIndex="2"
          >
            Bairro Ipanema <br />
          </Heading>
          <Text
            color="charlestonGreen.900"
            lineHeight="30px"
            letterSpacing="0.2px"
          >
            meu bairro,<br />
            <br />
            <br />
            <br />
            <br />
            <Button
              textTransform="capitalize"
              color="#008037"
              backgroundColor="white"
              _hover={{ color: "#7ED957" }}
              _focus={{ color: "#7ED957" }}
              mr="4"
              as="a"
              href="/public/Rota 09 - Ipanema  Viação Pássaro Branco.pdf"
              download
              colorScheme="teal"
            >
              BAIXAR
            </Button>
          </Text>
        </Stack>

        <Box
          flex="0.8"
          width="75%"
          height="75%"
          bg="gray.200"
          borderRadius="md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8969.803326821871!2d-46.50955265430764!3d-18.623341138717798!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1721082968488!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          >
          </iframe>
        </Box>
      </Flex>
    </Flex>
  );
}
