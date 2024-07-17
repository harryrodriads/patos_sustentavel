import React, { useState, useEffect } from "react";
import { Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";
import patos_sustentavel from "./resources/images/bike.jpeg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Agua() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedButtonState = localStorage.getItem("activeButton");
    if (storedButtonState) {
      setActiveButton(storedButtonState);
    }
  }, []);

  const goToHomePage = () => {
    navigate('/#artigos');
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    localStorage.setItem("activeButton", buttonType);
  };

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
      paddingBlock="20px"
    >
        <Stack
          justifyContent="center"
          alignItems={["center", "center", "center", "flex-start", "flex-start"]}
          textAlign={["center", "center", "center", "left", "left"]}
          direction="column"
          width={["100%", "100%", "100%", "60%", "60%"]}
        >
        <Heading
          as="h3"
          textAlign="center"
          color="charlestonGreen.900"
          fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
          lineHeight="1.2em"
          zIndex="2"
        >
          Transportes Sustentáveis<br /> 
        </Heading>
          <Text
            color="charlestonGreen.900"
            lineHeight="30px"
            letterSpacing="0.2px"
            marginBlockEnd="36px !important"
          >
            <br /> Congestionamentos e filas intermináveis são problemas comuns na maioria dos centros urbanos.
             O uso excessivo de automóveis causa poluição do ar e aquecimento global devido aos gases de efeito estufa, além de poluição sonora e desperdício de tempo.
            <br /> O suposto bem-estar individual de andar em um carro não compensa todos esses impactos negativos.
            <br />
            <br /> Optar por meios de transporte mais sustentáveis, como transporte coletivo, compartilhado, bicicletas ou caminhar, ajuda a reduzir o volume de carros nas ruas. Que tal nesta semana deixar o carro em casa pelo menos um dia?
            <br />
            <br />• <strong>Use Bicicletas:</strong> Pedalar é uma ótima maneira de reduzir a quantidade de carros nas ruas.
            <br />• <strong>Compartilhe Caronas:</strong> Peça ou dê uma carona para seu vizinho.
            <br />• <strong>Utilize Transporte Público:</strong> Escolha o transporte público que melhor atenda às suas necessidades.
            <br />
            <br /><strong>Pense nisso:</strong> Como suas pequenas escolhas diárias podem ajudar a reduzir a poluição e contribuir para um ambiente mais sustentável?
          </Text>
        <Flex direction="row" align="center" marginTop="20px">
          <Button
            colorScheme="teal"
            leftIcon={<FaThumbsUp />}
            marginRight="10px"
            backgroundColor={activeButton === 'like' ? "teal.700" : "teal.500"}
            color="white"
            _hover={{ backgroundColor: "teal.600" }} 
            onClick={() => handleButtonClick('like')}
          >
            Curtir 
          </Button>
          <Button
            colorScheme="red"
            leftIcon={<FaThumbsDown />}
            backgroundColor={activeButton === 'dislike' ? "red.700" : "red.500"} 
            color="white" 
            _hover={{ backgroundColor: "red.600" }} 
            onClick={() => handleButtonClick('dislike')}
          >
            Descurtir
          </Button>
          <Button
            marginLeft="20px"
            colorScheme="blue"
            onClick={goToHomePage}
            backgroundColor="blue.500"
            color="white"
            _hover={{ backgroundColor: "blue.600" }}
          >
            Voltar
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
