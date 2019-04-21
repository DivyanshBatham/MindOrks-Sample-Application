import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer">© 2019 Divyansh Batham (!NotCurious).</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
