import React, { Component } from "react";
import { Link } from "react-router-dom";

// Data:
import projectsData from "./projectsData.json";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true
    };
  }

  fetchProjects = count => {
    this.fakeFetchTimeout = setTimeout(() => {
      this.setState({
        projects: count
          ? projectsData.projects.slice(0, count)
          : projectsData.projects,
        isFetching: false
      });
    }, 1000);
  };

  componentDidMount() {
    this.fetchProjects(this.props.projectCount);
  }

  componentWillUnmount() {
    clearInterval(this.fakeFetchTimeout);
  }

  render() {
    return (
      <section className="projects-section">
        <div className="container">
          <div className="projects">
            <div className="section__heading">./components/Projects</div>

            <p>
              This component lists the various projects that I have built.
            </p>

            {this.state.isFetching ? (
              <p> Fake Loading... </p>
            ) : (
              <div className="projects__grid">
                {this.state.projects.map((project, index) => {
                  return (
                    <Link
                      to={`/projects/${project.id}`}
                      className="project-container"
                      key={project.id}
                    >
                      <div className="project">
                        <div className="project__title">{project.title}</div>
                        <hr/>
                        <div className="project__skills">
                          {project.skills.map(skill => (
                            <span className="skill" key={skill}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                })}
                {this.props.projectCount && (
                  <Link
                    to="/projects"
                    className="project-container project-container-more"
                  >
                    <div className="project">View More</div>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
