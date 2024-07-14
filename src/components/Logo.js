import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/react";

import logoWithWhiteLetters from "../resources/images/newlogo2.png";

export default function Logo({ width, height, variant = "white", ...rest }) {
  return (
    <Box as="figure" objectFit="cover" {...rest}>
      <Image src={logoWithWhiteLetters} width={200} height={75} />
    </Box>
  );
}
