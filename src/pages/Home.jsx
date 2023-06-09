import React from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Partners from "../components/partners/Partners";
import Process from "../components/process/Process";
import History from "../components/history/History";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Partners />
      <Process />
      <History />
    </div>
  );
}
