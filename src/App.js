import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Home from "./components/home/Home.js";
import About from "./components/about/About.js";
import Ingridients from "./components/ingridients/Ingridients.js";
import NotFound from "./components/notfound/NotFound.js";
import MoreInfo from "./components/moreinfo/MoreInfo.js";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/about" component={() => <About />} />
            <Route exact path="/:name" component={() => <Ingridients />} />
            <Route exact path="/:name/:id" component={() => <MoreInfo />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
