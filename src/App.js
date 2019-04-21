import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Components:
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Foobar from "./components/Foobar";
import Footer from "./components/Footer";

// Styles (Global):
import "./bootstrap-grid.min.css";
import "./App.scss";


class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:projectId" component={ProjectDetail} />
          <Route exact path="/foobar" component={Foobar} />
          <Route exact path="/contact" component={Contact} />
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
