import React from "react";
import frameFour from "./images/frameFour.png";
import backgroundFour from "./images/bigsurblur.png";
import modernGraphic from "./images/modern-graphic.png";
import internet from "./images/internet-sm.png";
import placeholder from "./images/placeholder.png";
import bootstrapPic from "./images/bootstrap.png";
import react from "./images/react.png";
import angular from "./images/angular.png";
import vue from "./images/vue.png";
import chrome from "./images/chrome.png";
import safari from "./images/safari.png";
import firefox from "./images/firefox.png";
import wix from "./images/wix.png";
import weebly from "./images/weebly.jpeg";
import squarespace from "./images/squarespace.jpeg";
import godaddy from "./images/godaddy.jpeg";
import wordpress from "./images/wordpress.png";
import mobile from "./images/mobile.png";
import flash from "./images/flash.jpg";

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
                    <a className="nav-link" href="#" style={{fontWeight:'bold'}}>
                      Present
                    </a>
                </li>
            </ul>
          </nav>

          <div className="container-fluid">
            <div className="row pb-5">
              
              {/* FRONT */}
              <div className="col-md-6 intro d-flex justify-content-center">
                <div className="row intro-text">
                  <h1 className="col-md-12">The Present</h1>
                  <h2 className="col-md-12">We've finally made it.</h2>
                  <p className="col-md-12">A variety of tools help create modern-day websites.</p>
                  <button onClick={GoToBootstrap} id="learn-more" className="col-md-4 mt-4 ml-auto rounded-pill"><p className="mx-auto p-1">Learn More</p></button>
                  </div>
              </div>
              <div className="col-md-6">
                <img className='img-fluid' src={modernGraphic} />
              </div>
            </div>
          </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <div className="container">

            {/* BOOTSTRAP */}
            <div className="row pb-5" id="bs-section">
              
              <div className="col-md-6 intro d-flex justify-content-center">
                  <img className='img-fluid' src={bootstrapPic} />
                  </div>
              <div className="col-md-6 my-auto">
                <div className="row text-left">
                  <p>Bootstrap, an open-sourced CSS framework, was created in 2011 by Twitter developers Mark Otto and Jacob Thorton.</p>
                  <br/><br/>
                  <p>Bootstrap's library of pre-made layout components simplifies the development of informative web pages.</p>
                  <br/><br/>
                  <p>As of 2019, 19.6% of live websites use Bootstrap. That amounts to 1,518,207,412 websites!</p>
                </div>
              </div>
              <button onClick={GoToCard} className="mt-4 mx-auto next-btn rounded-pill">
                <p className="mx-auto p-1">Next</p>
                </button>
            </div>      

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            {/* FRONT-END */}
            <div className="row pb-5" id="front-end-section">
              <div className="col-12">
                <h1>Front-end frameworks</h1>
                <h4>Click on the buttons to learn more.</h4>
                <br/>
              </div>
              
              <div className="col-md-4 justify-content-center">
                <div>
                    <img src={react} className="img-fluid"/>
                </div>
                <div className="text-center">
                  <button type="button" id="react" class="btn btn-lg" data-toggle="popover" data-container="body" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">React</button>
                </div>
              </div>

              <div className="col-md-4 justify-content-center">
                <div>
                    <img src={angular} className="img-fluid"/>
                </div>
                <div className="text-center">
                  <button type="button" id="angular" class="btn btn-lg btn-danger" data-toggle="popover" data-container="body" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Angular</button>
                </div>
              </div>

              <div className="col-md-4 justify-content-center">
                <div>
                    <img src={vue} className="img-fluid"/>
                </div>
                <div className="text-center">
                  <button type="button" id="vue" class="btn btn-lg" data-toggle="popover" data-container="body" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Vue</button>
                </div>
              </div>

              <button onClick={GoToCard} className="mt-4 mx-auto next-btn rounded-pill">
                <p className="mx-auto p-1">Next</p>
                </button>
            </div>      

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            {/* CAROUSEL */}
            <div className="col-12">
                <h1>Website Builders</h1>
                <h4>Today, anyone can build a website without needing any coding experience. Website builders are software that lets users drag-and-drop elements onto a black page to create their own sites.</h4>
                <br/>
              </div>
            <div id="carouselExampleCaptions" className="carousel slide w-90" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={weebly} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={squarespace} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={wix} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={godaddy} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={wordpress} className="d-block w-100" alt="..."/>
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

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            {/* Mobile friendly */}
            <div className="row pb-5" id="mobile-section">
              
              <div className="col-md-6 my-auto">
                <div className="row text-center">
                  <h1 className="mx-auto">Mobile-first</h1>
                  <p className="mx-auto">The World Wide Web goes mobile.</p>
                  <br/><br/><br/>
                  <p>The dominance of the iPhone leads to a mobile-revolution. Many websites are redesigned with a mobile-friendly view.</p>
                  </div>
                </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img className='img-fluid' src={mobile} />
              </div>
              <button onClick={GoToCard} className="mt-4 mx-auto next-btn rounded-pill">
                <p className="mx-auto p-1">Next</p>
                </button>
            </div>


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>      


            {/* CARDS */}
            <h1>Popular Web Browsers</h1>
            <div className="card-deck pb-5 mb-5 mx-auto" id="card-section" width={'90%'}>
              <div className="card">
                <img className="card-img-top" src={chrome} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Google Chrome</h5>
                  <p className="card-text">Google Chrome is by far the most popular web browser, with a 66% worldwide browser market share. Chrome is well-recieved for its cross-compatibility, browsing tools, and speed. </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={safari} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Safari</h5>
                  <p className="card-text">Safari is the default Mac and iOS browser. It's known for its superb integration with the Apple ecosystem. It's also extremely fast and customizable.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={firefox} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Firefox</h5>
                  <p className="card-text">Firefox is an open source web broswer and a pioneer of many web capabilities. The developers are a strong advocate for online privacy. </p>

                </div>
              </div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            {/* Flash */}
            <div className="row pb-5" id="flash-section">
              
              <div className="col-md-6 intro d-flex justify-content-center my-auto">
                  <img className='img-fluid' src={flash} width={'80%'} />
                  </div>
              <div className="col-md-6">
                <div className="row text-left">
                  <h1>Goodbye Adobe Flash</h1>
                  <p>Initially released in 1996, Adobe Flash Player was a popular web plugin capable of displaying online multimedia content. 
                    It was commonly used for web games, animations, and GUI elements embedded in web pages.</p>
                  <br/><br/>
                  <p>Due to poor performance and security vulnerabilities, Adobe Flash was shut down on December 31, 2020 ending an era of online creativity.</p>
                </div>
              </div>
              <button onClick={GoToCard} className="mt-4 mx-auto next-btn rounded-pill">
                <p className="mx-auto p-1">Next</p>
                </button>
            </div>      

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            {/* ACCORDION */}
            <h1>What is the WWW used for today?</h1>
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <a>Email</a>
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Email still remains a main form of online communication. The World Wide Web allows users to access their email through providers like Gmail, Outlook, and Yahoo Mail.</div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <a>Streaming/Watching Content</a>
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    Over the last decade, online video content has skyrocketed in popularity. YouTube, an online video platform, sees over 30 million visitors a day. 300 hours of video are uploaded to YouTube every minute and almost 5 billion videos are watched on Youtube every single day.
                    <br/><br/>Streaming videos is also a popular option with a growing number of services such as Netflix, Hulu, Disney Plus, HBO Max, Peacock, and more.
                    <br/><br/>There are thousands of content creators on YouTube that make money on the platform by monetizing their content and generating ad revenue (AdSense).
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <a>Social Networks</a>
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    Every day, millions and millions of people use the World Wide Web to access social networks such as Facebook, Twitter, and Instagram. Of course, many people also access these sites via apps from their mobile devices.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <a>Philanthropy/Crowdfunding</a>
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div className="card-body">
                    Websites like GoFundMe and Indiegogo let people raise and donate money for all different causes. Never have people had such visibility and widespread-reach to raise money for their specific cause.
                  </div>
                </div>
              </div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            
          </div>

        </div>
      </div>
      {/* <img src={frameOne} /> */}
    </div>
    </div>
    );
  }
}

function GoToBootstrap() {
  const element = document.getElementById("bs-section");
  element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
}

function GoToCard() {
  const element = document.getElementById("card-section");
  element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
}

export default Section4;