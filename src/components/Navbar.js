import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// import Logo from "../assets/logo.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav">
            {/* <NavLink to="/" className="nav__logo-container">
               <img src={Logo} alt="!NotCurious"/>
            </NavLink> */}
            <NavLink to="/" className="nav__logo">
              ./assets/Logo
            </NavLink>
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/foobar">Foobar</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
