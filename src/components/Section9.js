import { Flex } from "@chakra-ui/react";
import cidade from "../resources/images/ps.jpeg";
import RatingCard from "./RatingCard";

const ratingCard = [
  {
    description:
      "Patos de Minas está arrasando na sustentabilidade, cheia de projetos verdes, melhorando a qualidade de vida e focando no desenvolvimento sustentável. 👏💚",
    created_at: "24-Julho-2024",
  },
];

export default function Section9() {
  return (
<Flex
      position="relative"
      backgroundImage={`url(${cidade})`}
      color="white"
      width="full"
      height="740px"
      as="section"
      backgroundAttachment="fixed"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize="cover"
      id="reviews"
      alignItems="center"
      paddingBlock="120px"
      paddingInline={["0", "0", "0", "116px", "116px"]}
      justifyContent={[
        "center",
        "center",
        "center",
        "flex-start",
        "flex-start",
      ]}
      className="smt"
      
    >
      {ratingCard.map((card, key) => (
        <RatingCard key={key} data={card} />
      ))}
      
    </Flex>
  );
}
