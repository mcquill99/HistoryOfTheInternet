import React from "react";
import frameOne from "./images/frameOne.png";
import backgroundOne from "./images/win31blur.png";

class Intro extends React.Component {
    render() {
      return (
        <div className="section intro">
            <div className="background introBackground">
            <p className="anim-typewriter type">
                Welcome to the History of the World Wide Web.
            </p>

            </div>
        </div>
      );
}
}




export default Intro;