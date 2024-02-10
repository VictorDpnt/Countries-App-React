import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Les pays</h1>
      <Countries />
    </div>
  );
};

export default Home;
