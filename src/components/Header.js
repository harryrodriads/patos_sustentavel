import { Flex, Hide, Show } from "@chakra-ui/react";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const navigation = [
  { title: "Inicio", url: "/" },
  { title: "Artigos", url: "/#artigos" },
  { title: "Meu Bairro", url: "/#meu-bairro" },
  { title: "Sugestões", url: "/#sugestoes" },
  { title: "Contato", url: "/#contato" },
];

export default function Header({ data }) {
  return (
    <Flex
      justifyContent="space-between"
      as="header"
      width="full"
      alignItems="center"
      top="0"
      height="100px"
      zIndex="5"
      position="sticky"
      backgroundColor="white"
      paddingInline={["20px", "20px", "30px", "46px", "46px"]}
    >
      <Logo width={"116px"} height={"66px"} />
      <Hide above="lg">
        <MobileNavigation navigation={navigation} data={data} />
      </Hide>
      <Show above="lg">
        <DesktopNavigation navigation={navigation} />
      </Show>
    </Flex>
  );
}
