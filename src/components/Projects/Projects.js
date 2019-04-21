import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="projects-section">
        <div className="container">
          <div className="projects">
            <div className="section__heading">./components/Projects</div>

            <p className="section__description">
              This component lists the various projects that I have built.
            </p>

            <div className="projects__grid">
              <Link to="/codeenigma" className="project-container">
                <div className="project">CodeEngima</div>
              </Link>
              <Link to="/grip-wild-tiger" className="project-container">
                <div className="project">Grip Project #2</div>
              </Link>
              <Link to="#" className="project-container">
                <div className="project">React Quiz</div>
              </Link>
              <Link to="#" className="project-container">
                <div className="project">Game of Life</div>
              </Link>
              <Link to="#" className="project-container">
                <div className="project">CPP Suduko</div>
              </Link>
              <Link to="#" className="project-container">
                <div className="project">
                  View More, this will link to Projects page, which has complete
                  list
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
