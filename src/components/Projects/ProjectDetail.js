import React, { Component } from "react";

// Data:
import projectsData from "./projectsData.json";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true
    };
  }

  fetchProject = id => {
    this.fakeFetchTimeout = setTimeout(() => {
      this.setState({
        project: projectsData.projects.find(project => project.id === id),
        isFetching: false
      });
    }, 1000);
  };

  componentDidMount() {
    this.fetchProject(this.props.match.params.projectId);
  }

  componentWillUnmount() {
    clearInterval(this.fakeFetchTimeout);
  }

  render() {
    console.log(this.props);
    return (
      <section className="project-details-section">
        <div className="container">
          {this.state.isFetching ? (
            <p> Fake Loading... </p>
          ) : (
            <>
              <div className="section__heading">
                ./components/Projects/ {this.state.project.title}
              </div>
              <p>{this.state.project.description}</p>

              <div className="project__skills">
                {this.state.project.skills.map(skill => (
                  <span className="skill" key={skill}>{skill}</span>
                ))}
              </div>

              <div className="project__links">
                <button
                  className="primaryButton"
                  onClick={() => this.props.history.goBack()}
                >
                  Go Back
                </button>
                <a
                  className="primaryButton"
                  href={this.state.project.repository}
                  target="__blank"
                >
                  Repository
                </a>
                {this.state.project.live && (
                  <a
                    className="primaryButton"
                    href={this.state.project.live}
                    target="__blank"
                  >
                    Live
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default ProjectDetail;
