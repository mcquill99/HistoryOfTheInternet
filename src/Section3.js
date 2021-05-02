import React from "react";
import frameThree from "./images/frameThree.png";
import backgroundThree from "./images/mac-leopard-blur.png";
import logoEraThree from "./images/logoEraThree.png";

class Section3 extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="background" style={{ backgroundImage: `url(${backgroundThree})` }}>
      <br />
      <div className="frameThree" style={{ backgroundImage: `url(${frameThree})` }}>
        <div className="layout">
          <div className="ThirdLogo">
            <br></br>
            <center>
            <img src={logoEraThree} width={360}/>
            </center>
          </div>
            <div className="leftColumn">
              <p>this is the left column and this is text to test the left column. disregard this text as it is a test. lets see if we can code this left column to emuluate a late 2000s website. going to attempt that using the CSS yahoooo</p>
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