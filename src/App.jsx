import React from "react";
import Header from "./components/layouts/header/Header";
import Products from "./components/products/Products";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Footer from "./components/layouts/footer/Footer";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <main className="app__main">
        <Hero />
        <Products />
        <Contact />
        <About />
        <Login />
      </main>
      <Footer />
    </div>
  );
};

export default App;
