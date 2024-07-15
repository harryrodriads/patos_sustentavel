import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section5 from "./components/Section5";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Ipanema from "./Ipanema";
import Pracas from "./Pracas";
import Reciclagem from "./Reciclagem";
import theme from "./theme";
import ScrollToTop from "./hooks/useScrollToTop"; // Atualize o caminho conforme necessário

export default function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Router>
        <ScrollToTop /> {/* Adicione o ScrollToTop aqui */}
        <Layout>
          <Routes>
            <Route path="/" element={
              <>
                <Section1 />
                <Section2 />
                <Section5 />
                <Section7 />
                <Section9 />
                <Section8 />
              </>
            } />
            <Route path="/pracas" element={<Pracas />} />
            <Route path="/reciclagem" element={<Reciclagem />} />
            <Route path="/ipanema" element={<Ipanema />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}
