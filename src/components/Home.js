import React, { Component } from "react";
import Projects from "./Projects/Projects";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <section className="about-section">
          <div className="container">
              <div className="section__heading">./components/About</div>

              <p className="section__description">
                This component was created to provide an overview of the project.
                {/* I created this project for the fullfillment of the recuiting process at MindOrks. */}
              </p>
          </div>
        </section>
        <Projects />
      </main>
    );
  }
}

export default Home;
