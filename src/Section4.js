import React from "react";
import frameFour from "./images/frameFour.png";
import backgroundFour from "./images/bigsurblur.png";
import modernGraphic from "./images/modern-graphic.png";

class Section4 extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="background" style={{ backgroundImage: `url(${backgroundFour})` }}>
      <br />
      <div className=" has_bootstrap frameFour" style={{ backgroundImage: `url(${frameFour})` }}>
        <div className="layout">

          <nav class="navbar navbar-expand-sm bg-light">
            <span class="navbar-brand mb-0 h1">History of the WWW</span>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                      Early 90s
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                      Late 90s
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                      2000s
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                      Present
                    </a>
                </li>
            </ul>
          </nav>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <p>Test</p>
              </div>
              <div className="col-md-6">
                <img className='img-fluid' src={modernGraphic} />
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <img src={frameOne} /> */}
    </div>
    </div>
    );
  }
}

export default Section4;