import React, { useState, useEffect } from "react";
import { Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";
import patos_sustentavel from "./resources/images/jarro_planta.jpg";
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
          textAlign={"center"}
          color="charlestonGreen.900"
          fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
          lineHeight="1.2em"
          zIndex="2"
        >
          Dicas Úteis para o Dia-a-Dia<br /> 
        </Heading>
        <Text
          color="charlestonGreen.900"
          lineHeight="30px"
          letterSpacing="0.2px"
          fontSize="18px"
          marginBlockEnd="36px !important"
        >
          <br /> Cuidar da nossa casa e das praças do nosso bairro é fundamental para manter um meio ambiente sustentável e garantir a qualidade de vida de todos. Aqui estão algumas dicas úteis:
          <br />
          <br />• <strong>Vegetação Adequada:</strong> Plante árvores e arbustos nativos ao longo das calçadas. Isso ajuda a melhorar a qualidade do ar e oferece sombra, tornando a caminhada mais agradável.
          <br />• <strong>Limpeza Regular:</strong> Varra regularmente as calçadas para remover folhas, lixo e detritos. Evite usar mangueiras para lavar, preferindo métodos secos que economizam água.
          <br />• <strong>Participação Comunitária:</strong> Incentive a comunidade a participar ativamente da manutenção das praças. Organize mutirões de limpeza, plantio de árvores e flores, e ações de conscientização sobre a importância desses espaços.
          <br />• <strong>Conservação da Vegetação:</strong> Ajude a preservar a vegetação existente e plante novas espécies nativas. Áreas verdes bem cuidadas são essenciais para a biodiversidade local e proporcionam um ambiente mais fresco e agradável.
          <br />• <strong>Descarte Correto do Lixo:</strong> Disponibilize lixeiras e incentive os moradores a usá-las corretamente. Promova a reciclagem e o descarte consciente, evitando que o lixo se acumule nas calçadas e praças.
          <br />• <strong>Uso Consciente da Água:</strong> Se houver fontes ou áreas de irrigação, use a água de forma consciente. Prefira regar as plantas nas primeiras horas da manhã ou no final da tarde para minimizar a evaporação.
          <br />
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
