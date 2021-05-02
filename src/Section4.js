import React from "react";
import frameFour from "./images/frameFour.png";
import backgroundFour from "./images/bigsurblur.png";
import modernGraphic from "./images/modern-graphic.png";
import internet from "./images/internet-sm.png";
import placeholder from "./images/placeholder.png";
import bootstrapPic from "./images/bootstrap.png";
import bsExample from "./images/bs-example.png";
import bsUse from "./images/bs-use.jpeg";

class Section4 extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="background" style={{ backgroundImage: `url(${backgroundFour})` }}>
      <br />
      <div className=" has_bootstrap frameFour" style={{ backgroundImage: `url(${frameFour})` }}>
        <div className="layout">

          <nav className="navbar navbar-expand-sm">
            <span className="navbar-brand mb-0 h1"><img src={internet} width={"17%"} style={{paddingRight:'10px'}}/>History of the WWW</span>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                      Early 1990s
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                      Early 2000s
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                      Late 2000s
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                      Present
                    </a>
                </li>
            </ul>
          </nav>

          <div className="container-fluid">
            <div className="row pb-5">
              
              <div className="col-md-6 intro d-flex justify-content-center">
                <div className="row intro-text">
                  <h1 className="col-md-12">Minimalism</h1>
                  <h2 className="col-md-12">So hot right now.</h2>
                  <p className="col-md-12">This is what a modern website looks like.</p>
                  <button onClick={GoToCards} id="learn-more" className="col-md-4 mt-4 ml-auto rounded-pill"><p className="mx-auto p-1">Learn More</p></button>
                  </div>
              </div>
              <div className="col-md-6">
                <img className='img-fluid' src={modernGraphic} />
              </div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


            {/* CARDS */}
            <h1>Bootstrap</h1>
            <div className="card-deck pb-5 mx-auto" width={'90%'} id="card-section">
              <div className="card">
                <img className="card-img-top" src={bootstrapPic} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Bootstrap</h5>
                  <p className="card-text">Bootstrap, an open-sourced CSS framework, was created in 2011 by Twitter developers Mark Otto and Jacob Thorton.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={bsExample} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Simplifying Web Design</h5>
                  <p className="card-text">Bootstrap's library of pre-made layout components simplifies the development of informative web pages.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={bsUse} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Widely Accepted</h5>
                  <p className="card-text">As of 2019, 19.6% of live websites use Bootstrap. This amounts to 1,518,207,412 websites!</p>

                </div>
              </div>
            </div>

            {/* ACCORDION */}
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Collapsible Group Item #1
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Collapsible Group Item #2
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Collapsible Group Item #3
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>

            {/* CAROUSEL */}
            <div id="carouselExampleCaptions" className="carousel slide w-90" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={backgroundFour} className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={backgroundFour} className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={backgroundFour} className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
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

function GoToCards() {
  const element = document.getElementById("card-section");
  element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
}

export default Section4;