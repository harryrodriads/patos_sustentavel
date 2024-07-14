import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import ps from "../resources/images/ps.jpeg";
import ContainerSocialNetworks from "./ContainerSocialNetwokrs";

export default function Section9() {
  return (
    <Flex
      position="relative"
      backgroundImage={`url(${ps})`}
      color="white"
      width="full"
      height="740px"
      className="smt"
      backgroundAttachment="fixed"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize="cover"
      textAlign={["center", "center", "center", "left", "left"]}
      textTransform="capitalize"
      paddingInline={["0", "0", "0", "120px", "120px"]}
      paddingBlockStart="116px"
    >
    </Flex>
  );
}
