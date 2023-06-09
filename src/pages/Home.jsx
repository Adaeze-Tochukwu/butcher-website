import React from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Partners from "../components/partners/Partners";
import Process from "../components/process/Process";
import History from "../components/history/History";
import Testimonial from "../components/testimonial/Testimonial";
import Products from "../components/products/Products";
import Category from "../components/category/Category";
import Question from "../components/question/question";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Partners />
      <Process />
      <History />
      <Testimonial />
      <Products />
      <Category />
      <Question />
      <Footer />
    </div>
  );
}
