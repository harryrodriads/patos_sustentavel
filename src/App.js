import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import theme from "./theme";

export default function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Section1 />
        <Section2 />
        <Section4 />
        <Section5 />
        <Section7 />
        <Section8 />
        <Section9 />
      </Layout>
    </ChakraProvider>
  );
}
