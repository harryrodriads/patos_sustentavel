import { Flex, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bgImageSection2 from "../resources/images/contato.png";
import CardServices from "./ServiceCard";

const rightCards = [
  {
    title: "Consumo Consciente de Água",
    description: "Repense e otimize a forma como a utilizamos esse recurso!",
    link: "/agua",
  },
  {
    title: "Recicle o Lixo da Sua Casa",
    description: "Adote práticas simples para reciclar e fazer a diferença!",
    link: "/reciclagem",
  },
  {
    title: "Transportes Sustentáveis",
    description: "Veja como podemos ajudar a reduzir a poluição!",
    link: "/transporte",
  },
  {
    title: "Dicas Úteis para nosso Dia-a-Dia",
    description: "Transforme seu bairro em um lugar mais agradável!",
    link: "/dicas",
  },
];

export default function Section2() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection2})`}
      color="charlestonGreen.900"
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
      textAlign="center"
    >
      
      <Grid
        templateColumns={["1fr", "1fr", "1fr", "1fr 1fr", "1fr 1fr"]}
        gap={10}
      >
        {rightCards.map((card, key) => (
          <Link to={card.link} key={key}>
            <CardServices
              title={card.title}
              description={card.description}
            />
          </Link>
        ))}
      </Grid>
    </Flex>
  );
}
