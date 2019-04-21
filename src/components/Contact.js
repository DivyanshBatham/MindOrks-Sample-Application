import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <section className="contact-section">
          <div className="container">
            <div className="contact">
              <div className="section__heading">./components/Contact</div>
              <p className="section__description">
                This component provides a contact form.
              </p>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleChange}/>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" value={this.state.email} onChange={this.handleChange}></textarea>
                </form>

            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Contact;
