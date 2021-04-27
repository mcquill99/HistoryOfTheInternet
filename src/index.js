import React from "react";
import ReactDOM from "react-dom";

import App from "./Main";

import "./index.css";
import "./styles.css";
import "./overrides.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import $ from 'jquery'
import Popper from 'popper.js'

ReactDOM.render(<App/>, document.getElementById("root"));

/*class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const FullpageWrapper = () => (
  <ReactFullpage
    navigation
    sectionsColor={["#282c34", "#ff5f45", "#0798ec", "#f8d568"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <MySection content={"Page 1"} />
          <MySection content={"Page 2"} />
          <MySection content={"Page 3"} />
          <MySection content={"Page 4"} />
        </div>
      );
    }}
  />
);*/

/*ReactDOM.render(
<App />, 
document.getElementById('root'));*/

