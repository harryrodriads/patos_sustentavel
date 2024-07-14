import React from "react";
import SplashFilterIcon from "../resources/icons/SplashFilterIcon";
import Footer from "./Footer";
import Header from "./Header";

const data = {
  copyRight: `Todos os Direitos Reservados - ${new Date().getFullYear()} `,
  dev: "Patos Sustentável",
};

export default function Layout({ children }) {
  return <>
    <Header data={data} />
    {children}
    <SplashFilterIcon />
    <Footer data={data} />
  </>;
}
