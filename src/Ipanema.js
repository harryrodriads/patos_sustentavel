import React, { useEffect } from "react";
import { Flex, Heading, Stack, Text, Box, Button, Image, Link } from "@chakra-ui/react";
import patos_sustentavel from "./resources/images/escritorio.jpg";
import reciclagem from "./resources/images/cores.jpg";

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
            fontSize="18px"
            lineHeight="30px"
            letterSpacing="0.2px"
          >
            <br />O Bairro Ipanema enfrenta vários desafios ambientais, como o descarte inadequado de lixo, 
            a falta de preservação das árvores das praças e calçadas, o consumo excessivo de água para lavar calçadas, e
            além disso, a sobrecarga de carros em horários de pico que intensifica a poluição do ar e os congestionamentos.         
            Para melhorar a situação, veja o que você pode fazer:
            <br />
            <br />• <strong>Descarte Adequado de Lixo:</strong> Use as lixeiras corretamente como a foto ao lado e separe resíduos recicláveis.{" "}
            <Link href="/reciclagem" color="#008037" textDecoration="underline">
              Veja neste Artigo!
            </Link>
            <br />• <strong>Preservação das Árvores:</strong> Participe de iniciativas de plantio e cuide das árvores das calçadas e das praças.
            <br />• <strong>Economia de Água:</strong> Faça sua parte dentro de casa! Feche as torneiras, tome banhos curtos e conserte vazamentos.{" "}
            <Link href="/agua" color="#008037" textDecoration="underline">
              Veja estas Dicas!
            </Link>
            <br />• <strong>Reduza o Trânsito:</strong> Use transporte público, compartilhe caronas ou ande de bicicleta. Baixe a Rota e Horários do Ônibus: 
            <Button
              textTransform="capitalize"
              color="#7ED957"
              backgroundColor="#008037"
              _hover={{ color: "#7ED957" }}
              _focus={{ color: "#7ED957" }}
              ml="4"
              as="a"
              href="/Rota 09 - Ipanema  Viação Pássaro Branco.pdf"
              download
              colorScheme="teal"
            >
              BAIXAR
            </Button>
          </Text>
        </Stack>
        <Image
          src={reciclagem}
          alt="Imagem de Reciclagem"
          width={["300px", "300px", "400px", "500px", "600px"]}
          height="auto"
          objectFit="contain"
          borderRadius="md"
          marginTop={["20px", "20px", "20px", "0", "0"]}
          marginLeft={["0", "0", "0", "20px", "20px"]}
        />
        <Box
          flex="0.6"
          width="70%"
          height="70%"
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
