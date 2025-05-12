import React from "react";
import Products from "../../components/productlist/Products";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Products />
    </div>
  );
};

export default Home;
