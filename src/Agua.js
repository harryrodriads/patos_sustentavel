import React, { useEffect, useState } from "react";
import { Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";
import patos_sustentavel from "./resources/images/arvore.jpg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Agua() {
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    window.scrollTo(0, 0);
    // Atualiza o contador de acessos no localStorage
    updateAccessCount();
  }, []);

  // Função para atualizar o contador de acessos
  const updateAccessCount = () => {
    const currentCount = parseInt(localStorage.getItem("accessCount")) || 0;
    localStorage.setItem("accessCount", currentCount + 1);
    setAccessCount(currentCount + 1);
  };

  // Estado para armazenar o número de acessos
  const [accessCount, setAccessCount] = useState(parseInt(localStorage.getItem("accessCount")) || 0);

  // Estados para os likes e dislikes
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Funções para manipular likes e dislikes
  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  // Função para voltar à página inicial
  const goToHomePage = () => {
    navigate('/');
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
        marginInline="auto"
        alignItems={["center", "center", "center", "center", "center"]}
        textAlign={["center", "center", "center", "left", "left"]}
        direction="column"
        width={["300px", "300px", "400px", "60%", "60%"]}
      >
        <Heading
          as="h3"
          textAlign={"center"}
          color="charlestonGreen.900"
          fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
          lineHeight="1.2em"
          zIndex="2"
        >
          Consumo Consciente<br /> 
        </Heading>
        <Text
          color="charlestonGreen.900"
          lineHeight="30px"
          letterSpacing="0.2px"
          marginBlockEnd="36px !important"
        >
          <br /> A água é essencial para a vida humana, mas apenas 1% da água disponível no planeta é potável. Com 70% da Terra coberta por água, <br />
          é crucial adotar práticas para o consumo consciente deste recurso. O uso responsável não implica em abandonar a água,
          mas em repensar <br />e otimizar sua utilização. Dicas para um Consumo Consciente:
          <br />
          <br />• <strong>Torneiras Fechadas:</strong> Feche a torneira ao escovar os dentes, fazer a barba ou ensaboar a louça. Economize até 13,5 litros em dois minutos.
          <br />• <strong>Banhos Curtos:</strong> Reduza o tempo no chuveiro a cinco minutos e feche o registro ao se ensaboar. Economize até 30 mil litros por ano.
          <br />• <strong>Evite Duchas de Alta Pressão:</strong> Prefira duchas com menor fluxo para economizar até 300 litros em um banho de 10 minutos.
          <br />• <strong>Lave a Louça com Economia:</strong> Use uma bacia para molho e lave toda a louça de uma vez. Materiais biodegradáveis também ajudam.
          <br />• <strong>Cobre sua Piscina:</strong> Utilize uma capa para evitar a perda de até 90% da água por evaporação.
          <br />• <strong>Limpeza Eficiente:</strong> Use uma vassoura para áreas externas e equipamentos de limpeza a jato para economizar água.
          <br />• <strong>Limpeza do Carro:</strong> Prefira balde e pano em vez de mangueiras.
          <br />• <strong>Conserte Vazamentos:</strong> Pequenos vazamentos podem desperdiçar até 3.200 litros por dia. Verifique e conserte.
          <br />
          <br /><strong>Pense nisso:</strong> Como suas pequenas escolhas diárias podem impactar a preservação da água em nossa comunidade e no planeta?
        </Text>
        <Flex direction="row" align="center" marginTop="20px">
          <Button
            colorScheme="teal"
            leftIcon={<FaThumbsUp />}
            onClick={handleLike}
            marginRight="10px"
            backgroundColor="teal.500"
            color="white"
            _hover={{ backgroundColor: "teal.600" }} 
          >
            Curtir {likes}
          </Button>
          <Button
            colorScheme="red"
            leftIcon={<FaThumbsDown />}
            onClick={handleDislike}
            backgroundColor="red.500" 
            color="white" 
            _hover={{ backgroundColor: "red.600" }} 
          >
            Descurtir {dislikes}
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
