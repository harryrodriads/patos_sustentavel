import { Flex, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Importando Link
import bgImageSection2 from "../resources/images/ps.jpeg";
import CardServices from "./ServiceCard";

const rightCards = [
  {
    title: "Consumo Consciente de Água",
    description: "Repense e otimize a forma como a utilizamos esse recurso!",
    link: "/agua", // Adicionando o link para a página de praças
  },
  {
    title: "Reciclagem",
    description: "Práticas Sustentáveis com Reciclagem.",
    link: "/reciclagem", // Adicionando o link para a página de reciclagem
  },
];

export default function Section2() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection2})`}
      color="white"
      width="full"
      className="smt"
      paddingBlock="120px"
      paddingInline={["0", "0", "0", "116px", "116px"]}
      height={["auto", "auto", "auto", "740px", "740px"]}
      backgroundAttachment="fixed"
      backgroundPosition="top"
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      justifyContent={["center", "center", "center", "flex-end", "flex-end"]}
      id="artigos"
    >
      <Flex
        gridGap="10px"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="center"
      >
        <Stack direction="column" gridGap="10px">
          {rightCards.map((card, key) => (
            <Link to={card.link} key={key}> {/* Envolvendo cada cartão com Link */}
              <CardServices
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </Link>
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}
