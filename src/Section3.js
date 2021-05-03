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
        <div className="logoHolder">
          <div className="ThirdLogo">
            <br></br>
            <img src={logoEraThree} width={360}/>
          </div>
          </div>
          <div className="whiteHolder">
            <div className="feed">
              The amount of active users on social media platforms was increasing greatly by the late 2000s. YouTube's success is a clear example of the migration to social media, with its site having had 19.88 million users in 2006, and 413.61 million users in 2009: just a three year time span. As some platforms flourished, others leveled out or declined in regards to engagement. MySpace was the first social media platform to reach a million active users, achieved in 2004, but began declining in popularity in the late 2000s and failed to compete with other platforms. 
            </div>
            <div className="sidebar">
              <p>Login to explore!</p>
              
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