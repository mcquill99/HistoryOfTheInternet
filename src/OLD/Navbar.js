import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Page1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                containerId="Page1"
              >
              Page 1
              </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="Page2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                containerId="Page2"
              >
              Page 2
              </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="Page3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                containerId="Page3"
              >
              Page 3
              </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="Page4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                containerId="Page4"
              >
              Page 4
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}