import { Flex, Stack } from "@chakra-ui/react";
import bgImageSection2 from "../resources/images/ps.jpeg";
import CardServices from "./ServiceCard";

const rigthCards = [
  {
    title: "Praças",
    description: "Práticas Sustentáveis em Praças.",
  },
  {
    title: "Reciclagem",
    description: "Práticas Sustentáveis com Reciclagem.",
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
      id="about"
    >
      <Flex
        gridGap="10px"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="center"
      >
        <Stack direction="column" gridGap="10px">
          {rigthCards.map((card, key) => (
            <CardServices
              key={key}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}
