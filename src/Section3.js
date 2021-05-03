import React from "react";
import frameThree from "./images/frameThree.png";
import backgroundThree from "./images/mac-leopard-blur.png";
import logoEraThree from "./images/logoEraThree.png";
import marathon from "./images/marathon.jpeg";

class Section3 extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="background" style={{ backgroundImage: `url(${backgroundThree})` }}>
      <br />
      <div className="frameThree" style={{ backgroundImage: `url(${frameThree})` }}>
        <div className="layout">
        <div className="logoHolder">
          <div className="ThirdLogo">
            <br></br>
            <img src={logoEraThree} width={360}/>
          </div>
          </div>
          <div className="whiteHolder">
            <div className="feed">
              <img src={marathon} width={550} height={340}/>
              <br></br>
              <div className="socialMediaDescription">
              By the late 2000s, the number of users on social media had skyrocketed. Login to explore this era.
              </div>
            </div>
            <div className="sidebar">
              <p>Login</p>
              
            </div>
            
          </div>
          </div>
          </div>
      </div>
      {/* <img src={frameOne} /> */}
    </div>

    );
  }
}

export default Section3;