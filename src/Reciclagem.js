import React, { useEffect, useState } from "react";
import { Flex, Heading, Stack, Text, Button, Image } from "@chakra-ui/react";
import patos_sustentavel from "./resources/images/arvore.jpg";
import reciclagem from "./resources/images/cores.jpg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Reciclagem() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    updateAccessCount();
  }, []);

  const updateAccessCount = () => {
    const currentCount = parseInt(localStorage.getItem("accessCount")) || 0;
    localStorage.setItem("accessCount", currentCount + 1);
    setAccessCount(currentCount + 1);
  };

  const [accessCount, setAccessCount] = useState(parseInt(localStorage.getItem("accessCount")) || 0);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

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
      <Flex
        direction={["column", "column", "column", "row", "row"]}
        align="center"
        justify="space-between"
        width="full"
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
            Recicle o Lixo da Sua Casa<br />
          </Heading>
          <Text
            color="charlestonGreen.900"
            lineHeight="30px"
            letterSpacing="0.2px"
            marginBlockEnd="36px !important"
          >
            O excesso de lixo é um problema ambiental sério, contribuindo para poluição, enchentes e desperdício. Felizmente, é possível adotar práticas simples para reciclar e fazer a diferença.
            <br />
            <br />• <strong>Separe o Lixo Orgânico dos Recicláveis:</strong> Use lixeiras diferentes para resíduos orgânicos e recicláveis. Lave bem itens como plásticos, metais, vidros e papéis para maximizar a reciclagem.
            <br />• <strong>Reaproveite Sacolas e Garrafas Plásticas:</strong> Reutilize sacolas para armazenamento e garrafas PET para líquidos ou projetos artesanais. Na reciclagem, as garrafas podem virar vassouras e roupas.
            <br />• <strong>Conheça os Materiais Recicláveis:</strong> Informe-se sobre o que pode ser reciclado, como o óleo de cozinha e papel não amassado. Pesquise e descubra a melhor forma de reciclar e onde encontrar centros de reciclagem.
            <br />• <strong>Repense Seus Hábitos de Consumo:</strong> Evite desperdícios de alimentos e compras excessivas. Adotar um consumo mais consciente reduz a quantidade de lixo e promove um estilo de vida sustentável.
            <br />
            <br /><strong>Pense nisso:</strong> Como suas ações diárias podem ajudar a reduzir o lixo e contribuir para um ambiente mais sustentável?
          </Text>
          <Flex direction="row" align="center" marginTop="20px" gap="10px">
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
      </Flex>
    </Flex>
  );
}
