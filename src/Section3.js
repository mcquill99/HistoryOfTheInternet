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
              this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed this is the feed 

            </div>
            <div className="sidebar">
              this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar this is the sidebar 
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