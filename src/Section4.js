import React from "react";
import frameFour from "./images/frameFour.png";
import backgroundFour from "./images/bigsurblur.png";
import modernGraphic from "./images/modern-graphic.png";
import internet from "./images/internet-sm.png";

class Section4 extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="background" style={{ backgroundImage: `url(${backgroundFour})` }}>
      <br />
      <div className=" has_bootstrap frameFour" style={{ backgroundImage: `url(${frameFour})` }}>
        <div className="layout">

          <nav class="navbar navbar-expand-sm">
            <span class="navbar-brand mb-0 h1"><img src={internet} width={"17%"} style={{paddingRight:'10px'}}/>History of the WWW</span>
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
              
              <div className="col-md-6 intro d-flex justify-content-center">
              <div className="row intro-text">
                <h1 className="col-md-12">Minimalism</h1>
                <h2 className="col-md-12">So hot right now.</h2>
                <p className="col-md-12">This is what a modern website looks like.</p>
                <button id="learn-more" className="col-md-4 mt-4 ml-auto rounded-pill"><p className="mx-auto p-1">Learn More</p></button>
                </div>
              </div>
              <div className="col-md-6">
                <img className='img-fluid' src={modernGraphic} />
              </div>
            </div>


            {/* CARDS */}
            <div class="card-deck">
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
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