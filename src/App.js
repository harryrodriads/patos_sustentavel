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
import Agua from "./Agua";
import Transporte from "./Transporte";
import Dicas from "./Dicas";
import Reciclagem from "./Reciclagem";
import theme from "./theme";
import ScrollToTop from "./hooks/useScrollToTop";

export default function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Router>
        <ScrollToTop />
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
            <Route path="/agua" element={<Agua />} />
            <Route path="/reciclagem" element={<Reciclagem />} />
            <Route path="/ipanema" element={<Ipanema />} />
            <Route path="/transporte" element={<Transporte />} />
            <Route path="/dicas" element={<Dicas />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}
