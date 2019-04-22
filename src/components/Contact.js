import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("Form submitted");
  }

  render() {
    return (
      <section className="contact-section">
        <div className="container">
          <div className="contact">
            <div className="section__heading">./components/Contact</div>
            <p>This component provides a contact form.</p>
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
              
              <button className="primaryButton" onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
