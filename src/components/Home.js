import React, { Component } from "react";
import Projects from "./Projects/Projects";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="about-section">
          <div className="container">
            <div className="section__heading">./components/About</div>
            <p>
              This component was created to provide an overview of the project.
            </p>
          </div>
        </section>
        <Projects projectCount={3} />
      </>
    );
  }
}

export default Home;
